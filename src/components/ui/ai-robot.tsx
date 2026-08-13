import { cn } from "@/lib/utils";

export function AIRobot({
  className,
  size = 170,
  children,
}: {
  className?: string;
  size?: number;
  children?: React.ReactNode;
}) {
  return (
    <div className={cn("pointer-events-none relative", className)}>
      {children}
      <svg viewBox="0 0 200 260" width={size} height={size * 1.3} fill="none">
        <defs>
          <radialGradient id="headGrad" cx="35%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="55%" stopColor="#F0E4D2" />
            <stop offset="100%" stopColor="#C9AF88" />
          </radialGradient>
          <radialGradient id="bodyGrad" cx="35%" cy="22%" r="80%">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="55%" stopColor="#EEE1CC" />
            <stop offset="100%" stopColor="#C3A97F" />
          </radialGradient>
          <radialGradient id="tipGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#F6DEC4" />
            <stop offset="55%" stopColor="#C8876A" />
            <stop offset="100%" stopColor="#7A5636" />
          </radialGradient>
          <radialGradient id="coreGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#FFDBB0" />
            <stop offset="55%" stopColor="#C8876A" />
            <stop offset="100%" stopColor="#5C3D28" />
          </radialGradient>
          <filter id="soft">
            <feGaussianBlur stdDeviation="1.6" />
          </filter>
        </defs>

        <ellipse cx="100" cy="248" rx="40" ry="8" fill="#4A3728" opacity="0.18" />

        <rect x="82" y="222" width="14" height="16" rx="7" fill="url(#bodyGrad)" stroke="#4A3728" strokeWidth="2" />
        <rect x="104" y="222" width="14" height="16" rx="7" fill="url(#bodyGrad)" stroke="#4A3728" strokeWidth="2" />
        <ellipse cx="89" cy="238" rx="10" ry="5" fill="#4A3728" />
        <ellipse cx="111" cy="238" rx="10" ry="5" fill="#4A3728" />

        <path d="M55 155 C40 162 32 178 36 196" stroke="url(#bodyGrad)" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="37" cy="200" r="10" fill="url(#bodyGrad)" stroke="#4A3728" strokeWidth="2" />
        <path d="M145 155 C160 162 168 178 164 196" stroke="url(#bodyGrad)" strokeWidth="15" strokeLinecap="round" fill="none" />
        <circle cx="163" cy="200" r="10" fill="url(#bodyGrad)" stroke="#4A3728" strokeWidth="2" />

        <rect x="52" y="130" width="96" height="96" rx="46" fill="url(#bodyGrad)" stroke="#4A3728" strokeWidth="2.5" />
        <ellipse cx="78" cy="152" rx="22" ry="14" fill="#FFFDF9" opacity="0.45" filter="url(#soft)" />

        <circle cx="100" cy="178" r="17" fill="#4A3728" />
        <circle cx="100" cy="178" r="11" fill="url(#coreGrad)" />
        <ellipse cx="96" cy="174" rx="3" ry="2" fill="#FFFDF9" opacity="0.8" />

        <rect x="85" y="118" width="30" height="24" rx="10" fill="url(#bodyGrad)" stroke="#4A3728" strokeWidth="2" />

        <circle cx="44" cy="82" r="15" fill="url(#headGrad)" stroke="#4A3728" strokeWidth="2" />
        <ellipse cx="39" cy="77" rx="5" ry="3" fill="#FFFDF9" opacity="0.6" filter="url(#soft)" />
        <circle cx="156" cy="82" r="15" fill="url(#headGrad)" stroke="#4A3728" strokeWidth="2" />
        <ellipse cx="151" cy="77" rx="5" ry="3" fill="#FFFDF9" opacity="0.6" filter="url(#soft)" />

        <line x1="100" y1="30" x2="100" y2="8" stroke="#4A3728" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="6" r="7" fill="url(#tipGrad)" stroke="#4A3728" strokeWidth="1.5" />
        <ellipse cx="97" cy="3.5" rx="2.5" ry="1.5" fill="#FFFDF9" opacity="0.7" />

        <circle cx="100" cy="80" r="52" fill="url(#headGrad)" stroke="#4A3728" strokeWidth="2.5" />
        <ellipse cx="78" cy="55" rx="20" ry="12" fill="#FFFDF9" opacity="0.55" filter="url(#soft)" />

        <circle cx="82" cy="78" r="6" fill="#4A3728" />
        <circle cx="84" cy="76" r="1.8" fill="#FFFDF9" />
        <circle cx="118" cy="78" r="6" fill="#4A3728" />
        <circle cx="120" cy="76" r="1.8" fill="#FFFDF9" />
        <path d="M88 92 Q100 100 112 92" stroke="#4A3728" strokeWidth="3" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
