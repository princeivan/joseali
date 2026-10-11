import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const defaultSocialImage = {
  url: "/images/joseali-og.jpg",
  width: 1200,
  height: 630,
  alt: `${siteConfig.name} — Kenya safaris and coastal tours`,
};

export function pageMetadata({
  title,
  description,
  path,
  image = defaultSocialImage,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: typeof defaultSocialImage;
  absoluteTitle?: boolean;
}): Metadata {
  const socialTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_KE",
      siteName: siteConfig.name,
      url: new URL(path, siteConfig.url).href,
      title: socialTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image.url],
    },
  };
}
