import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import DinerMenu from "../components/DinerMenu";
import ImaGauRes from "../components/ImaGauRes";
import { getDictionary } from "../../../dictionary";
import ParallaxBanner from "../components/ParallaxBanner";


export default async function Restaurant({ params }) {
    const imagesResto = ['image1.png', 'image2.png', 'image3.png', 'image4.png'];

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
        <BGSlider title={lang.resto}
                images={['image4.png', 'image2.png', 'image3.png', 'image1.png']}
            />
            <ImaGauRes
                titre={lang.resto}
                text={lang.restoText}
                images={imagesResto}
                heure={lang.heure}
                horaire={lang.horaire}
            />
            <div className='py-12'>
            <ParallaxBanner image='./img/image4.png' text='Au Menu'/>
                <DinerMenu
                    titleBar={lang.bar}
                    titleBreakfast={lang.breakfast}
                    titleDiner={lang.diner}
                    titleLunch={lang.lunch}
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

