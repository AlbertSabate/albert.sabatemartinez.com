export function createMetaTags({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image?: string;
  url?: string;
}) {
  const metaTags = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];

  if (image) {
    metaTags.push({ property: "og:image", content: image }, { name: "twitter:image", content: image });
  }

  if (url) {
    metaTags.push({ property: "og:url", content: url });
  }

  return metaTags;
}
