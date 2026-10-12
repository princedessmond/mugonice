type LogoMarkProps = {
  className?: string;
};

export function LogoMark({ className = "" }: LogoMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="MugoNice logo"
    >
      <defs>
        <linearGradient
          id="mugonice-logo-gradient"
          x1="8"
          y1="5"
          x2="58"
          y2="60"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e1d9ff" />
          <stop offset="0.5" stopColor="#a181ff" />
          <stop offset="1" stopColor="#65e8f1" />
        </linearGradient>
        <linearGradient
          id="mugonice-logo-shine"
          x1="15"
          y1="13"
          x2="48"
          y2="49"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="#0b0a0f" />
      <path
        d="M8 19.5C8 13.15 13.15 8 19.5 8h25C50.85 8 56 13.15 56 19.5v25C56 50.85 50.85 56 44.5 56h-25C13.15 56 8 50.85 8 44.5v-25Z"
        fill="url(#mugonice-logo-gradient)"
      />
      <path
        d="M17 44V20h6.7L32 32.75 40.3 20H47v24h-6.6V30.95l-6.55 9.8h-3.7l-6.55-9.8V44H17Z"
        fill="#0b0910"
      />
      <path
        d="M13 23.5C16.5 14.5 25.5 10 37 10c6.8 0 12.1 1.75 16 5.25V19c-4.65-3.4-10.15-5.1-16.5-5.1-9.7 0-17.53 3.2-23.5 9.6Z"
        fill="url(#mugonice-logo-shine)"
      />
      <circle cx="49" cy="15" r="2.5" fill="#f5f2ff" />
    </svg>
  );
}
