import { useState } from "react";
import type { PhotoAsset } from "@/types/content";

interface SafeImageProps {
  asset: PhotoAsset;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
}

export function SafeImage({ asset, alt, className, loading, fetchPriority }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <img src={asset.fallbackSrc} alt={alt} className={className} loading={loading} />;
  }

  if (asset.webpSrc) {
    return (
      <picture>
        <source srcSet={asset.webpSrc} type="image/webp" />
        <img
          src={asset.src}
          alt={alt}
          className={className}
          loading={loading}
          fetchPriority={fetchPriority}
          onError={() => setFailed(true)}
        />
      </picture>
    );
  }

  return (
    <img
      src={asset.src}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  );
}
