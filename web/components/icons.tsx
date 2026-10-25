import type { SVGProps } from "react";

/* Brand-consistent line/solid social icons (currentColor) */

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0-.02-5ZM3 9.75h4v11.25H3V9.75Zm6.5 0h3.84v1.54h.05c.54-.98 1.85-2.02 3.8-2.02 4.07 0 4.82 2.56 4.82 5.9V21h-4v-5.07c0-1.21-.02-2.77-1.74-2.77-1.74 0-2 1.32-2 2.68V21h-4V9.75Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YouTubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M23.5 7.1a3 3 0 0 0-2.1-2.1C19.5 4.5 12 4.5 12 4.5s-7.5 0-9.4.5A3 3 0 0 0 .5 7.1 31.4 31.4 0 0 0 0 12a31.4 31.4 0 0 0 .5 4.9 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 24 12a31.4 31.4 0 0 0-.5-4.9ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" />
    </svg>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.24 2.25h3.3l-7.2 8.23L23 21.75h-6.63l-5.2-6.8-5.95 6.8H1.9l7.7-8.8L1.25 2.25H8l4.7 6.21 5.54-6.21Zm-1.16 17.52h1.83L7.02 4.13H5.06l12.02 15.64Z" />
    </svg>
  );
}

/* Spark System step icons (line, currentColor) */

function StepIcon({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function DiscoverIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <StepIcon {...props}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />
    </StepIcon>
  );
}

export function DefineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <StepIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M9 15l1-3 5-5 2 2-5 5-3 1Z" />
    </StepIcon>
  );
}

export function DesignIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <StepIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M4 9h16M9 9v11" />
    </StepIcon>
  );
}

export function DeployIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <StepIcon {...props}>
      <circle cx="12" cy="6" r="2.2" />
      <circle cx="6" cy="17" r="2.2" />
      <circle cx="18" cy="17" r="2.2" />
      <path d="M11 8l-4 7M13 8l4 7M8.2 17h7.6" />
    </StepIcon>
  );
}

export function DriveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <StepIcon {...props}>
      <path d="M4 20h16" />
      <path d="M5 16l5-5 3 3 6-6" />
      <path d="M15 8h4v4" />
    </StepIcon>
  );
}

export function EvolveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <StepIcon {...props}>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M15.5 10a4 4 0 1 0 .5 3" />
      <path d="M16 7.5V10h-2.5" />
    </StepIcon>
  );
}

/* UI arrows — SVG rather than "→"/"↗" text, which Sora lacks (the fallback glyph sits off-centre) */

export function ArrowRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <path d="M4.5 11.5l7-7M5.5 4.5h6v6" />
    </svg>
  );
}
