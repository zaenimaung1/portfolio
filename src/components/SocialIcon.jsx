const iconPaths = {
  github: (
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.08.64-.2.64-.45v-1.6c-2.6.57-3.15-1.1-3.15-1.1-.43-1.08-1.04-1.37-1.04-1.37-.85-.58.06-.57.06-.57.94.07 1.44.97 1.44.97.84 1.43 2.2 1.02 2.73.78.08-.6.33-1.02.6-1.25-2.07-.23-4.25-1.03-4.25-4.6 0-1.02.37-1.85.97-2.5-.1-.24-.42-1.19.1-2.47 0 0 .79-.25 2.6.96A8.85 8.85 0 0 1 12 7.5c.8 0 1.6.1 2.35.32 1.8-1.21 2.6-.96 2.6-.96.52 1.28.2 2.23.1 2.47.6.65.97 1.48.97 2.5 0 3.58-2.18 4.36-4.26 4.59.34.3.64.87.64 1.75v2.4c0 .25.17.54.65.45A9.5 9.5 0 0 0 12 2.5Z" />
  ),
  linkedin: (
    <>
      <path d="M6.2 9.2h3.15v9.9H6.2V9.2Z" />
      <path d="M7.78 4.9a1.82 1.82 0 1 1 0 3.64 1.82 1.82 0 0 1 0-3.64Z" />
      <path d="M11.15 9.2h3.02v1.35h.04c.42-.8 1.45-1.64 2.98-1.64 3.18 0 3.77 2.1 3.77 4.82v5.37h-3.14v-4.76c0-1.14-.02-2.6-1.58-2.6-1.59 0-1.83 1.24-1.83 2.51v4.85h-3.15V9.2Z" />
    </>
  ),
  mail: (
    <>
      <path d="M4 6.5h16v11H4v-11Z" />
      <path d="m4.5 7 7.5 5.8L19.5 7" fill="none" stroke="currentColor" strokeWidth="2" />
    </>
  ),
  phone: (
    <path d="M7.3 4.5 5 6.8c-.55.55-.65 1.38-.25 2.04 2.35 3.92 5.5 7.07 9.42 9.42.66.4 1.5.3 2.04-.25l2.3-2.3-3.1-3.1-1.45 1.45c-1.85-1.08-3.32-2.55-4.4-4.4l1.45-1.45-3.1-3.1-.6-.6Z" />
  ),
  facebook: (
  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
),
aibot: (
  <>
    {/* head */}
    <rect x="5" y="7" width="14" height="12" rx="4" />

    {/* face */}
    <rect
      x="7"
      y="10"
      width="10"
      height="7"
      rx="2"
      fill="white"
    />

    {/* left ear */}
    <rect x="2" y="11" width="2" height="5" rx="1" />

    {/* right ear */}
    <rect x="20" y="11" width="2" height="5" rx="1" />

    {/* antenna */}
    <line
      x1="12"
      y1="7"
      x2="12"
      y2="4"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />

    <circle cx="12" cy="3" r="1.5" />

    {/* eyes */}
    <circle cx="10" cy="13" r="1.2" fill="black" />
    <circle cx="14" cy="13" r="1.2" fill="black" />

    {/* smile */}
    <path
      d="M10 15.5c1 1 3 1 4 0"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
      fill="none"
    />

    {/* chat bubble */}
    <path d="M18 5h4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2l-2 1v-1h0a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
  </>
),
};

export default function SocialIcon({ name, className = "" }) {
  const normalizedName = name?.toLowerCase() ?? "mail";
  const path = iconPaths[normalizedName] ?? iconPaths.mail;

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {path}
    </svg>
  );
}
