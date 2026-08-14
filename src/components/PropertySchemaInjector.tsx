import { useEffect } from 'react';

interface PropertySchema {
  name: string;
  description: string;
  price: string;
  address: string;
  beds: string;
  baths: string;
  builtUp: string;
  images: string[];
  url?: string;
}

/**
 * Injects Schema.org RealEstateListing JSON-LD into <head> for AEO.
 * This makes property listings discoverable by answer engines (Google AI, Perplexity, etc.)
 */
export default function PropertySchemaInjector({ properties }: { properties: PropertySchema[] }) {
  useEffect(() => {
    // Remove any previous property schema
    const existing = document.getElementById('property-schema-ld');
    if (existing) existing.remove();

    const schema = {
      '@context': 'https://schema.org',
      '@graph': properties.map((p) => ({
        '@type': 'RealEstateListing',
        name: p.name,
        description: p.description,
        image: p.images[0],
        url: p.url || 'https://hamptonsre.com.my/#properties',
        offers: {
          '@type': 'Offer',
          price: p.price.replace(/[^0-9]/g, ''),
          priceCurrency: 'MYR',
          availability: 'https://schema.org/InStock',
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kuala Lumpur',
          addressCountry: 'MY',
          streetAddress: p.address,
        },
        numberOfRooms: parseInt(p.beds) || undefined,
        numberOfBathroomsTotal: parseInt(p.baths) || undefined,
        floorSize: {
          '@type': 'QuantitativeValue',
          value: parseInt(p.builtUp) || undefined,
          unitCode: 'FTK',
        },
      })),
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'property-schema-ld';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('property-schema-ld');
      if (el) el.remove();
    };
  }, [properties]);

  return null;
}
