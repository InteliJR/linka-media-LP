export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AdvertisingAgency",
    "name": "Linka Mídia",
    "description": "Agência completa de marketing digital em Maringá especializada em Social Media, Audiovisual e Tráfego Pago",
    "url": "https://linkamedia.com.br",
    "logo": "https://linkamedia.com.br/images/logo.png",
    "image": "https://linkamedia.com.br/images/og-image.jpg",
    "telephone": "+55-XX-XXXX-XXXX",
    "email": "contato@linkamedia.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Carneiro Leão, 833 - Sala 04",
      "addressLocality": "Maringá",
      "addressRegion": "PR",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-23.4273",
      "longitude": "-51.9375"
    },
    "sameAs": [
      "https://instagram.com/linkamedia"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "12"
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}