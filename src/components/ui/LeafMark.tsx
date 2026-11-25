interface LeafMarkProps {
  light?: boolean;
}

export function LeafMark({ light = false }: LeafMarkProps) {
  return (
    <div className="flex items-center gap-3">
      <svg width="38" height="42" viewBox="0 0 38 42" fill="none" aria-hidden="true">
        <path
          d="M19 39V14M19 28C11 27 6 22 5 13c8 0 13 4 14 11M19 21c1-8 6-13 14-14 0 9-5 15-14 16"
          stroke={light ? "#F8F6F0" : "#173F35"}
          strokeWidth="2"
        />
        <path d="M14 39h10" stroke={light ? "#C5A46D" : "#C5A46D"} strokeWidth="2" />
      </svg>
      <div className={`leading-[.9] tracking-[-.03em] ${light ? "text-white" : "text-forest"}`}>
        <strong className="block text-[15px]">MAKINDYE</strong>
        <span className="text-[13px] tracking-[.06em]">WOMEN TRADERS</span>
      </div>
    </div>
  );
}
