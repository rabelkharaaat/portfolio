"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * next/image wrapper that fails gracefully: if the file is missing,
 * it simply stays hidden so the gradient placeholder behind it shows.
 * Drop real photos into /public to activate them.
 */
export default function Photo({
  src,
  alt,
  sizes,
  priority,
  quality = 82,
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
  /** JPEG quality next/image encodes at (1–100). */
  quality?: number;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      quality={quality}
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn("transition-opacity duration-500", className)}
    />
  );
}
