"use client";

import { useEffect, useState } from "react";
import { LoadingExperience } from "@/components/loading-experience";

const DEFAULT_PREVIEW_DELAY_MS = 2200;
const MAX_PREVIEW_DELAY_MS = 6000;

function getPreviewDelay(search: string) {
  const params = new URLSearchParams(search);
  const rawDelay = params.get("loaderDelay") ?? params.get("delay");
  const delay = rawDelay ? Number(rawDelay) : DEFAULT_PREVIEW_DELAY_MS;

  if (!Number.isFinite(delay)) {
    return DEFAULT_PREVIEW_DELAY_MS;
  }

  return Math.min(Math.max(delay, 800), MAX_PREVIEW_DELAY_MS);
}

export function LoadingPreview() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const shouldPreview =
      params.get("loader") === "1" || params.get("loading") === "1";

    if (!shouldPreview) {
      return;
    }

    let hideTimeout: number | undefined;
    const showTimeout = window.setTimeout(() => {
      setIsVisible(true);
      hideTimeout = window.setTimeout(() => {
        setIsVisible(false);
      }, getPreviewDelay(window.location.search));
    }, 0);

    return () => {
      window.clearTimeout(showTimeout);

      if (hideTimeout) {
        window.clearTimeout(hideTimeout);
      }
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="loading-preview-overlay">
      <LoadingExperience preview />
    </div>
  );
}
