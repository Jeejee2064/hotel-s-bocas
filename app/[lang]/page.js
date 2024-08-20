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
   
  );
};


