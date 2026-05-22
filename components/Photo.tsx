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
  className,
}: {
  src: string;
  alt: string;
  sizes?: string;
  priority?: boolean;
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
      sizes={sizes}
      onError={() => setFailed(true)}
      className={cn("transition-opacity duration-500", className)}
    />
  );
}
