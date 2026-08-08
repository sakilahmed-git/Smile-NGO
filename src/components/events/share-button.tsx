"use client";

import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  path: string;
}

export function ShareButton({ title, path }: ShareButtonProps) {
  async function handleShare() {
    const url = typeof window !== "undefined" ? `${window.location.origin}${path}` : path;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch {
        // user cancelled or share failed, fall through to clipboard
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        // clipboard unavailable, no-op
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      aria-label={`Share ${title}`}
      className="btn-secondary !min-h-9 !px-3"
    >
      <Share2 size={16} aria-hidden />
    </button>
  );
}