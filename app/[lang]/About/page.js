
import Image from 'next/image';
import NavBar from '../components/NavBar';
import { getDictionary } from "../../../dictionary";
import Title from '../components/Title';
import Footer from '../components/Footer';
import AboutText from '../components/AboutText';
export default async function AboutUs({ params }) {
  const lang = await getDictionary(params.lang);

  return (
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
      <div className='text-gray-800'
        style={{

          textAlign: 'center',
        }}
      >
        <div className=' pt-16'>

          <div className='w-full flex items-center justify-center'>
            <Image
              src="/logoS.svg"
              alt="SVG Image"
              width={300}
              height={300}
            />

          </div>


        </div>
      </div>
      <div className="items-center text-gray-200  p-12">
        <div className='mb-8'>
          <Title className='mb-8' text={lang.about} />
        </div>
        <div className="space-y-4">
  
          <AboutText text={lang.aboutText1}/>
          <AboutText text={lang.aboutText2}/>
          <AboutText text={lang.aboutText3}/>
          <AboutText text={lang.aboutText4}/>
          
         
        </div>
      </div>
      <div className="">
        <img
          src="/img/ext4.jpeg"
          alt="Sonia and Sebastien Brunet"
          className='w-screen'
        />
      </div>
      <Footer
        email={lang.email}
        adress={lang.adress}
        phone={lang.phone}
        contact={lang.contact}
      />

    </div>
  );
};


