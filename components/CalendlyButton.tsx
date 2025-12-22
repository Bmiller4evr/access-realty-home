// ABOUTME: Calendly popup button component
// ABOUTME: Client component that triggers Calendly scheduling widget

"use client";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

interface CalendlyButtonProps {
  url: string;
  children: React.ReactNode;
  className?: string;
}

export default function CalendlyButton({ url, children, className }: CalendlyButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: `https://${url}` });
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
