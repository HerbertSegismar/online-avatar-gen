import { useEffect } from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title || "Random Avatar Generator";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        description || "Generate random avatars with customizable features"
      );
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content =
        description || "Generate random avatars with customizable features";
      document.head.appendChild(newMeta);
    }
  }, [title, description]);

  return (
    <Helmet>
      {/* Standard meta tags */}
      <title>{title || "Random Avatar Generator"}</title>
      <meta
        name="description"
        content={
          description || "Generate random avatars with customizable features"
        }
      />
      <meta
        name="keywords"
        content="avatar generator, random avatar, svg avatar, profile picture, custom avatar"
      />
      <meta name="author" content="Avatar Generator" />
      <meta name="robots" content="index, follow" />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title || "Random Avatar Generator"} />
      <meta
        property="og:description"
        content={
          description || "Generate random avatars with customizable features"
        }
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:alt" content="Random Avatar Generator" />
      <meta property="og:site_name" content="Random Avatar Generator" />

      {/* Twitter meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "Random Avatar Generator"} />
      <meta
        name="twitter:description"
        content={
          description || "Generate random avatars with customizable features"
        }
      />
      <meta name="twitter:image" content="/twitter-image.png" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Random Avatar Generator",
          description:
            "Generate unique SVG avatars with random facial features",
          applicationCategory: "Utility",
          operatingSystem: "All",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
