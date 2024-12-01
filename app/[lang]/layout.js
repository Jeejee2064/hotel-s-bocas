import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { poppins } from './fonts';

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
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function RootLayout({ children, params }) {

  return (
    <html lang={params.lang}>
<script src="https://us2.cloudbeds.com/widget/load/a81uKh/float?newWindow=1"></script>
      <body className={poppins.className}>

        {children}
        <Analytics />
      </body>
    </html>
  );
}