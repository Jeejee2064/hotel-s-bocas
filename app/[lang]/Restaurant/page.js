import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";
import DinerMenu from "../components/DinerMenu";
import ImaGauRes from "../components/ImaGauRes";
import { getDictionary } from "../../../dictionary";
import ParallaxBanner from "../components/ParallaxBanner";


export default async function Restaurant({ params }) {
    const imagesResto = ['resto1.png'];

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
                images={['ext2.jpg', 'resto4.jpeg', 'resto5.jpeg']}
            />
            <ImaGauRes
                titre={lang.resto}
                text={lang.restoText}
                images={imagesResto}
                heureptidej={lang.heureptidej}
                heuredej={lang.heuredej}
                heuredin={lang.heuredin}
                horaire={lang.horaire}
            />
            <div className='py-12'>
            <ParallaxBanner image='./img/resto3.jpeg' text='Au Menu'/>
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

