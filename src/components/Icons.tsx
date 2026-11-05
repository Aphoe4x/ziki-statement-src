interface IconProps {
  className?: string;
}

const stroke = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function Check({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M4.5 12.5 9 17l10.5-10.5" />
    </svg>
  );
}

export function ChevronDown({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function Refresh({ className }: IconProps) {
  return (
    <svg {...stroke} className={className}>
      <path d="M20 11a8 8 0 1 0-.7 4.4" />
      <path d="M20 4v7h-7" />
    </svg>
  );
}

export function Logo({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden focusable="false">
      <rect width="32" height="32" rx="8" fill="#0B1733" />
      <path
        d="M8.6 7H25c1.6 0 2.4 1.9 1.3 3.1l-6.4 6.8c-.7.8-1.7 1.2-2.8 1.2h-3c-1.5 0-2.8-1.2-2.8-2.8v-.7H4.6c-1.7 0-2.5-2-1.3-3.2l3.1-3.3C7 7.4 7.8 7 8.6 7Z"
        fill="#3978F6"
      />
      <path
        d="M7.9 17.5h11.2c1.6 0 2.5 2 1.3 3.2l-4.7 4.8c-.5.5-1.2.8-1.9.8H4.5c-1.6 0-2.4-2-1.3-3.2L6.3 19c.4-.9 1-1.5 1.6-1.5Z"
        fill="#8FC9FF"
      />
    </svg>
  );
}
