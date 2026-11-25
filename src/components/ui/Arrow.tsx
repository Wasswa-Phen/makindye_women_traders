interface ArrowProps {
  direction?: "right" | "left";
}

export function Arrow({ direction = "right" }: ArrowProps) {
  return (
    <svg
      className={direction === "left" ? "rotate-180" : ""}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3.75 9h10.5M10 4.75 14.25 9 10 13.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
