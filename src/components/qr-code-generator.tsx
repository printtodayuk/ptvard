"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export function QrCodeGenerator() {
  const [url, setUrl] = useState<string>("");

  useEffect(() => {
    // This ensures the code runs only on the client, after hydration
    setUrl(window.location.href);
  }, []);

  if (!url) {
    return (
      <div className="flex items-center justify-center p-2">
        <Skeleton className="h-40 w-40 rounded-lg" />
      </div>
    );
  }

  // QR code styling matches the app's theme
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
    url
  )}&qzone=1&color=3F51B5&bgcolor=F5F5F5`;

  return (
    <div className="rounded-xl border-4 border-primary/20 bg-primary/10 p-2 transition-all hover:border-primary/40">
      <div className="rounded-md bg-white p-1">
        <Image
          src={qrCodeUrl}
          alt="QR Code for digital business card"
          width={160}
          height={160}
          className="rounded-sm"
          priority
        />
      </div>
    </div>
  );
}
