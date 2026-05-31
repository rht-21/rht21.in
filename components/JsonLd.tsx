import { SITE } from "@/lib/site";
import { profile, experience } from "@/lib/data";

/**
 * Structured data (schema.org JSON-LD). This is what helps Google understand
 * "Rohit Mishra" as an entity — surfacing a knowledge panel, sitelinks, and
 * rich results. Rendered as a server component so it's in the initial HTML.
 */
const JsonLd = () => {
  const sameAs = profile.socials.map((s) => s.href);
  const currentRole = experience.find((e) => e.current);

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE.url}/#person`,
    name: profile.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    image: `${SITE.url}${SITE.ogImage}`,
    jobTitle: SITE.jobTitle,
    description: SITE.description,
    email: `mailto:${profile.email}`,
    sameAs,
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "Computer Vision",
      "Voice AI",
      "RAG pipelines",
      "Python",
      "Next.js",
    ],
    ...(currentRole && {
      worksFor: {
        "@type": "Organization",
        name: currentRole.company,
      },
    }),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: `${profile.name} — ${SITE.jobTitle}`,
    description: SITE.description,
    inLanguage: "en",
    publisher: { "@id": `${SITE.url}/#person` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
};

export default JsonLd;
