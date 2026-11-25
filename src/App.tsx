import { useEffect } from "react";
import { ContentStoreProvider } from "@/context/ContentStoreContext";
import { RouterProvider, useRouter } from "@/hooks/useRouter";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { GalleryAlbumPage } from "@/pages/GalleryAlbumPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { GetInvolvedPage } from "@/pages/GetInvolvedPage";
import { HomePage } from "@/pages/HomePage";
import { ImpactPage } from "@/pages/ImpactPage";
import { NewsArticlePage } from "@/pages/NewsArticlePage";
import { NewsPage } from "@/pages/NewsPage";
import { OurWorkPage } from "@/pages/OurWorkPage";
import { ProgrammeDetailPage } from "@/pages/ProgrammeDetailPage";
import { StaffDashboardPage } from "@/pages/StaffDashboardPage";

const routeTitles: Record<string, string> = {
  "/": "Makindye Women Traders | Women Leading a Greener Tomorrow",
  "/about": "About Us | Makindye Women Traders",
  "/our-work": "Our Work | Makindye Women Traders",
  "/impact": "Our Impact | Makindye Women Traders",
  "/gallery": "Gallery | Makindye Women Traders",
  "/news": "News & Updates | Makindye Women Traders",
  "/get-involved": "Get Involved | Makindye Women Traders",
  "/contact": "Contact Us | Makindye Women Traders",
  "/staff": "Staff Portal Prototype | Makindye Women Traders",
};

function AppRoutes() {
  const { pathname, hash, navigate } = useRouter();

  useEffect(() => {
    if (hash === "#staff" || pathname === "/staff") {
      document.title = routeTitles["/staff"];
      return;
    }
    const base = `/${pathname.split("/")[1] || ""}`;
    document.title =
      routeTitles[pathname] ?? routeTitles[base] ?? "Makindye Women Traders | Kampala, Uganda";
  }, [hash, pathname]);

  if (hash === "#staff" || pathname === "/staff") {
    return <StaffDashboardPage onExit={() => navigate("/")} />;
  }

  if (pathname === "/") return <HomePage />;
  if (pathname === "/about") return <AboutPage />;
  if (pathname === "/our-work") return <OurWorkPage />;
  if (pathname.startsWith("/our-work/")) {
    return <ProgrammeDetailPage slug={pathname.replace("/our-work/", "")} />;
  }
  if (pathname === "/impact") return <ImpactPage />;
  if (pathname === "/gallery") return <GalleryPage />;
  if (pathname.startsWith("/gallery/")) {
    return <GalleryAlbumPage slug={pathname.replace("/gallery/", "")} />;
  }
  if (pathname === "/news") return <NewsPage />;
  if (pathname.startsWith("/news/")) {
    return <NewsArticlePage slug={pathname.replace("/news/", "")} />;
  }
  if (pathname === "/get-involved") return <GetInvolvedPage />;
  if (pathname === "/contact") return <ContactPage />;

  return <HomePage />;
}

export default function App() {
  return (
    <RouterProvider>
      <ContentStoreProvider>
        <AppRoutes />
      </ContentStoreProvider>
    </RouterProvider>
  );
}
