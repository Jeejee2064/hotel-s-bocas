import NavBar from "./components/NavBar";
import BGSlider from "./components/BGSlider";
import Footer from "./components/Footer";
import ImaGauche from "./components/ImaGauche";
import ImaGauche2 from "./components/ImaGauche2";
import ImaDroite from "./components/ImaDroite";
import Separator from "./components/Separator";
import SeparatorB from "./components/SeparatorB";
import ParallaxBanner from "./components/ParallaxBanner";
import BigText from "./components/BigText";
import { getDictionary } from "../../dictionary";
import Head from 'next/head';

export async function generateMetadata({ params }) {
  const lang = params.lang;

  const meta = {
    en: {
      title: "Boutique Hotel Restaurant S Bocas del Toro, Bluff Beach, Panama",
      description: "Discover luxury, comfort and gastronomy at Hotel Restaurant S Bocas in Bocas del Toro, Islà Colón, Bluff Beach, Panamà. Enjoy stunning views, top-notch service, and an unforgettable stay.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/en/img/ext3.jpeg"
    },
    es: {
      title: "Boutique Hotel Restaurante S Bocas del Toro, Bluff Beach, Panama",
      description: "Descubre lujo, comodidad y gastronomía en Hotel S Bocas en Bocas del Toro, Islà Colón, Bluff Beach, Panamà. Disfruta de vistas impresionantes, servicio de primera clase y una estancia inolvidable.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/es/img/ext3.jpeg"
    },
    fr: {
      title: "Boutique Hotel Restaurant S Bocas del Toro, Bluff Beach, Panama",
      description: "Découvrez le luxe, le confort et la gastronomie à l'Hôtel S Bocas à Bocas del Toro, Islà Colón, Bluff Beach, Panamà. Profitez de vues imprenables, d'un service exceptionnel et d'un séjour inoubliable.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/ext3.jpeg"
    }
  };

  const { title, description, url, image } = meta[lang] || meta['en']; // Default to English if lang is not defined

  return {
    title,
    description,
    url,
    image,
    
  };
}


export default async function Home({params}) {
  const lang = await getDictionary(params.lang);

  
      const metadata = await generateMetadata({ params });
  const { title, description, url, image } = metadata;

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
    "priceRange":"$$",
    "amenityFeature": [
      "Free WiFi",
      "Swimming Pool",
      "Restaurant",
      "Safe",
      "Beach",
      "Air conditioning"
    ],
  
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "9.405",
      "longitude": "-82.252"
    },
    "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "56"  // You can adjust the number of reviews
  }
  };

  return (
   <>
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
            

      </Head>
      <body>
      <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
    <div className="bg-gray-800">
      <NavBar 
      hotel={lang.hotel} 
      resto={lang.resto} 
      activite={lang.activite}
      about={lang.about}
      contact={lang.contact}
      faune={lang.faune}
      bookNow={lang.bookNow}
      />
      <BGSlider title={lang.hotelResto}
      images = {['piscine2.jpeg', 'chambre5.jpeg', 'resto7.jpeg']}
      />
      <ImaGauche image='ext4.jpeg' text={lang.homeHotel} title={lang.hotel} cta={lang.viewMore} href='/Hotel'/>
      <Separator />     
      <ImaDroite image='resto7.jpeg' text={lang.homeRestaurant} title={lang.resto} cta={lang.viewMore} href='/Restaurant'/>
      <SeparatorB />

      <ImaGauche image='plage.jpg' text={lang.homeActivities} title={lang.activite} cta={lang.viewMore} href='/Activities'/>
        <Separator />   
      <ImaDroite image='lys.jpg' text={lang.homeFaune} title={lang.faune} cta={lang.viewMore} href='/Faune'/>
  
      <ParallaxBanner image='./img/plage.jpg' text='Bluff Beach' />


      <Footer
             email={lang.email}
              adress={lang.adress} 
              phone={lang.phone} 
              contact={lang.contact}
              conditions={lang.conditions}
              />

    </div>
    </body>
   </>
  );
};


