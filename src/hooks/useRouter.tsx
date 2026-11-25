import { createContext, type ReactNode, useCallback, useContext, useEffect, useState } from "react";

interface RouterLocation {
  pathname: string;
  hash: string;
}

interface RouterContextValue {
  pathname: string;
  hash: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextValue | null>(null);

function parseDestination(to: string): RouterLocation {
  if (to.startsWith("#")) {
    return { pathname: window.location.pathname || "/", hash: to };
  }
  const url = new URL(to, window.location.origin);
  const cleanPath =
    url.pathname.length > 1 && url.pathname.endsWith("/")
      ? url.pathname.slice(0, -1)
      : url.pathname || "/";
  return { pathname: cleanPath, hash: url.hash };
}

function readBrowserLocation(): RouterLocation {
  const rawPath = window.location.pathname || "/";
  const cleanPath = rawPath.length > 1 && rawPath.endsWith("/") ? rawPath.slice(0, -1) : rawPath;
  return {
    pathname: cleanPath,
    hash: window.location.hash,
  };
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<RouterLocation>(readBrowserLocation);

  const scrollToTarget = useCallback((hash: string) => {
    if (hash && hash !== "#staff" && hash !== "#home") {
      const id = hash.slice(1);
      requestAnimationFrame(() => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }
      });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  useEffect(() => {
    const handlePopOrHash = () => {
      const next = readBrowserLocation();
      setLocation(next);
      scrollToTarget(next.hash);
    };
    window.addEventListener("popstate", handlePopOrHash);
    window.addEventListener("hashchange", handlePopOrHash);
    return () => {
      window.removeEventListener("popstate", handlePopOrHash);
      window.removeEventListener("hashchange", handlePopOrHash);
    };
  }, [scrollToTarget]);

  const navigate = useCallback(
    (to: string) => {
      const next = parseDestination(to);
      const targetUrl = `${next.pathname}${next.hash}`;
      if (next.pathname === location.pathname && next.hash === location.hash) {
        scrollToTarget(next.hash);
        return;
      }
      window.history.pushState({}, "", targetUrl);
      setLocation(next);
      scrollToTarget(next.hash);
    },
    [location.hash, location.pathname, scrollToTarget],
  );

  return (
    <RouterContext.Provider value={{ pathname: location.pathname, hash: location.hash, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter(): RouterContextValue {
  const ctx = useContext(RouterContext);
  if (!ctx) {
    throw new Error("useRouter must be used inside a RouterProvider");
  }
  return ctx;
}
