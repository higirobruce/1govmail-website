import { clsx } from "clsx";

interface LogoProps {
  className?: string;
  iconSize?: number;
  showText?: boolean;
  dark?: boolean; // dark icon on light background
}

export function Logo({
  className,
  iconSize = 28,
  showText = true,
  dark = false,
}: LogoProps) {
  return (
    <div className={clsx("flex items-center gap-2.5", className)}>
      {/* Mail icon in a rounded square — mirrors the app's tray icon */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Rounded square background */}
        <rect
          width="28"
          height="28"
          rx="7"
          fill={dark ? "#111111" : "#ffffff"}
        />
        {/* Envelope body */}
        <rect
          x="6"
          y="8.5"
          width="16"
          height="11"
          rx="1.5"
          stroke={dark ? "#ffffff" : "#111111"}
          strokeWidth="1.5"
          fill="none"
        />
        {/* Envelope flap / V line */}
        <path
          d="M6.5 9.5 L14 15 L21.5 9.5"
          stroke={dark ? "#ffffff" : "#111111"}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>

      {showText && (
        <span
          className={clsx(
            "text-[15px] font-semibold tracking-tight",
            dark ? "text-[#111111]" : "text-white"
          )}
        >
          1Gov Mail
        </span>
      )}
    </div>
  );
}
