import { poppins } from './fonts';
import './globals.css';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "Hotel S Bocas del Toro, Bluff Beach, Panama",
      description: "Discover luxury and comfort at Hotel S Bocas in Bocas del Toro, Islà Colón, Bluff Beach, Panamà. Enjoy stunning views, top-notch service, and an unforgettable stay.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/en/img/ext4.jpeg"
    },
    es: {
      title: "Hotel S Bocas del Toro, Bluff Beach, Panama",
      description: "Descubre lujo y comodidad en Hotel S Bocas en Bocas del Toro, Islà Colón, Bluff Beach, Panamà. Disfruta de vistas impresionantes, servicio de primera clase y una estancia inolvidable.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/es/img/ext4.jpeg"
    },
    fr: {
      title: "Hotel S Bocas del Toro, Bluff Beach, Panama",
      description: "Découvrez le luxe et le confort à l'Hôtel S Bocas à Bocas del Toro, Islà Colón, Bluff Beach, Panamà. Profitez de vues imprenables, d'un service exceptionnel et d'un séjour inoubliable.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/ext4.jpeg"
    }
  };

  const { title, description, url, image } = meta[lang] || meta['en']; // Default to English if lang is not defined

  return {
    title,
    description,
    url,
    image,
    lang,
  };
}

export default async function RootLayout({ children, params }) {
  const metadata = await generateMetadata({ params });
  const { title, description, url, image, lang } = metadata;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel S Bocas",
    "description": description,
    "url": url,
    "image": image,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bluff Beach, Isla Colón",
      "addressLocality": "Bocas del Toro",
      "addressRegion": "PAN",
      "postalCode": "00000",
      "addressCountry": "PA"
    },
    "telephone": "+507-6798-7980",
    "email": "sosebbocas@gmail.com",
    "sameAs": "https://www.instagram.com/hotel_s_bocas/",
    "checkInTime": "15:00",
    "checkOutTime": "11:00",
    "numberOfRooms": 10,
    "amenities": [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Safe",
      "Beach",
      "Air conditioning"
    ],
    "offers": [
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "120.00",
        "itemOffered": {
          "@type": "Room",
          "name": "Standard King Room",
          "description": "Designed for the modern traveler, our hotel room combines contemporary design and functionality. Soothing colors create a relaxing atmosphere, while chic furniture and state-of-the-art facilities ensure a memorable stay.",
          "numberOfRooms": 4
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "140.00",
        "itemOffered": {
          "@type": "Room",
          "name": "Deluxe King Room",
          "description": "Designed for the modern traveler, our hotel room combines contemporary design and functionality. Soothing colors create a relaxing atmosphere, while chic furniture and state-of-the-art facilities ensure a memorable stay.",
          "numberOfRooms": 4
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "180.00",
        "itemOffered": {
          "@type": "Room",
          "name": "Junior Suite",
          "description": "Experience opulence in our exclusive suite, where luxury meets comfort. With generous space, high-end furniture, a sumptuous bathroom, and personalized amenities, this hotel room offers an unparalleled experience.",
          "numberOfRooms": 1
        }
      },
      {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": "210.00",
        "itemOffered": {
          "@type": "Room",
          "name": "Suite",
          "description": "Experience opulence in our exclusive suite, where luxury meets comfort. With generous space, high-end furniture, a sumptuous bathroom, and personalized amenities, this hotel room offers an unparalleled experience.",
          "numberOfRooms": 1
        }
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.405",
      "longitude": "-82.252"
    }
  };

  return (
    <>
        <html lang={lang}>

      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Structured Data */}
             <NextSeo />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
      <body className={poppins.className}>{children}</body>
          </html>

    </>
  );
}
