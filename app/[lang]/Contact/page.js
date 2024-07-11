import Image from 'next/image';
import NavBar from '../components/NavBar';
import { getDictionary } from "../../../dictionary";
import Title from '../components/Title';
import Footer from '../components/Footer';
import AboutText from '../components/AboutText';
import dynamic from 'next/dynamic';
import Link from 'next/link';

export default async function Contact({ params }) {
  const lang = await getDictionary(params.lang);

  const DynamicMapComponent = dynamic(
    () => import('../components/FootMap'),
    { ssr: false }
  );

  return (
    <div className="bg-gray-800 w-screen m-auto justify-center align-center">
      <NavBar
        hotel={lang.hotel}
        resto={lang.resto}
        activite={lang.activite}
        about={lang.about}
        contact={lang.contact}
        faune={lang.faune}
        bookNow={lang.bookNow}
      />
      <div className="text-gray-800" style={{ textAlign: 'center' }}>
        <div className="pt-16">
          <div className="w-full flex items-center justify-center">
            <Image
              src="/logoS.svg"
              alt="SVG Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
      <Title text={lang.contact} className="mb-8" />
      <div className="w-screen text-gray-200 py-16 md:px-12 px-4 m-auto align-center justify-center flex flex-col items-center">
        <Link className="flex items-center mb-4" href="mailto:sosebbocas@gmail.com">
          <img
            src="/email.png"
            alt="mail icon"
            width={30}
            height={30}
            className="mr-2"
          />
          sosebbocas@gmail.com
        </Link>
        <Link className="flex items-center mb-4" href="https://wa.me/50767987980">
          <img
            src="/whatsapp.png"
            alt="whatsapp icon"
            width={30}
            height={30}
            className="mr-2"
          />
          +50767987980 (WhatsApp)
        </Link>
        <Link className="flex items-center mb-8" href="https://www.google.com/maps/place/9%C2%B024'21.7%22N+82%C2%B015'02.8%22W/@9.4058516,-82.2526802,17z/">
          <img
            src="/location.png"
            alt="location icon"
            width={30}
            height={30}
            className="mr-2"
          />
          Bluff Beach, Isla Colón, Bocas del Toro, Panamá
        </Link>

        <DynamicMapComponent />
      </div>
    </div>
  );
}
