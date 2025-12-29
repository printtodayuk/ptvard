import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function CompanyLogo({ className }: { className?: string }) {
  const logoImage = PlaceHolderImages.find((img) => img.id === "logo");

  if (!logoImage) {
    return (
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f0f0f0",
          color: "#333",
          fontWeight: "bold",
          fontSize: "1.25rem",
        }}
      >
        Logo
      </div>
    );
  }

  return (
    <Image
      src={logoImage.imageUrl}
      alt="PrintTodayUK Logo"
      width={450}
      height={113}
      className={className}
      data-ai-hint={logoImage.imageHint}
      priority
    />
  );
}
