export default function BackgroundFX() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Left glow */}
      <div
        className="absolute -top-56 -left-72 h-[760px] w-[760px] rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--bgfx-glow-1), transparent 72%)",
        }}
      />

      {/* Right glow */}
      <div
        className="absolute top-10 -right-52 h-[620px] w-[620px] rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle at center, var(--bgfx-glow-2), transparent 70%)",
        }}
      />

      {/* Wave-ish shadow */}
      <svg
        className="absolute left-1/2 top-[55vh] w-[1400px] max-w-none -translate-x-1/2 opacity-[0.12]"
        viewBox="0 0 1200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 170C120 90 240 250 360 170C480 90 600 250 720 170C840 90 960 250 1080 170C1140 130 1170 110 1200 100V300H0V170Z"
          fill="url(#g)"
        />
        <defs>
          <linearGradient
            id="g"
            x1="0"
            y1="0"
            x2="1200"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="var(--bgfx-wave)" stopOpacity="0" />
            <stop
              offset="0.5"
              stopColor="var(--bgfx-wave)"
              stopOpacity="1"
            />
            <stop offset="1" stopColor="var(--bgfx-wave)" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
