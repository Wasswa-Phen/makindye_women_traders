import type { ReactNode } from "react";

interface SectionIntroProps {
  eyebrow: string;
  title: ReactNode;
  body?: string;
  light?: boolean;
}

export function SectionIntro({ eyebrow, title, body, light = false }: SectionIntroProps) {
  return (
    <div className={`section-intro ${light ? "text-white" : ""}`}>
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2 className="display mt-5">{title}</h2>
      {body && (
        <p
          className={`mt-5 max-w-xl text-base leading-7 ${light ? "text-white/85" : "text-charcoal/75"}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}
