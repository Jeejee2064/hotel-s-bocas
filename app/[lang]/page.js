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


export default async function Home({params}) {
  const lang = await getDictionary(params.lang);

  const structuredData = {
  "@context": "https://schema.org",
  "@type": "Hotel",
  "name": "Hotel S Bocas",
  "description": "Discover luxury and comfort at Hotel S Bocas in Bocas del Toro. Enjoy stunning views, top-notch service, and an unforgettable stay.",
  "url": "https://www.hotel-s-bocas.com",
  "image": "https://www.hotel-s-bocas.com/en/img/ext4.jpeg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Ocean View Drive",
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

}





const meta = {
    en: {
      title: "Welcome to Hotel S Bocas - Your Perfect Getaway in Bocas del Toro",
      description: "Discover luxury and comfort at Hotel S Bocas in Bocas del Toro. Enjoy stunning views, top-notch service, and an unforgettable stay.",
      url: "https://www.hotel-s-bocas.com/en",
      image: "https://www.hotel-s-bocas.com/en/img/ext4.jpeg"
    },
    es: {
      title: "Bienvenido a Hotel S Bocas - Tu escapada perfecta en Bocas del Toro",
      description: "Descubre lujo y comodidad en Hotel S Bocas en Bocas del Toro. Disfruta de vistas impresionantes, servicio de primera clase y una estancia inolvidable.",
      url: "https://www.hotel-s-bocas.com/es",
      image: "https://www.hotel-s-bocas.com/es/img/ext4.jpeg"
    },
    fr: {
      title: "Bienvenue à l'Hôtel S Bocas - Votre escapade parfaite à Bocas del Toro",
      description: "Découvrez le luxe et le confort à l'Hôtel S Bocas à Bocas del Toro. Profitez de vues imprenables, d'un service exceptionnel et d'un séjour inoubliable.",
      url: "https://www.hotel-s-bocas.com/fr",
      image: "https://www.hotel-s-bocas.com/fr/img/ext4.jpeg"
    }
  };

  // Get meta tags based on current language
  const { title, description, url, image } = meta[lang] || meta['en']; // Default to English if lang is not defined


  return (
    <>
     <Head>
        <title>Hotel S Bocas - Luxury Hotel in Bocas del Toro</title>
        <meta name="description" content="Discover luxury and comfort at Hotel S Bocas in Bocas del Toro." />
          <link rel="icon" href="/favicon.ico" />
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Hotel S Bocas - Luxury Hotel in Bocas del Toro" />
        <meta property="og:description" content="Discover luxury and comfort at Hotel S Bocas in Bocas del Toro." />
        <meta property="og:image" content="https://www.hotel-s-bocas.com/en/img/ext4.jpeg" />
        <meta property="og:url" content="https://www.hotel-s-bocas.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hotel S Bocas - Luxury Hotel in Bocas del Toro" />
        <meta name="twitter:description" content="Discover luxury and comfort at Hotel S Bocas in Bocas del Toro." />
        <meta name="twitter:image" content="https://www.hotel-s-bocas.com/en/img/ext4.jpeg" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </Head>
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
      </>
  );
};


