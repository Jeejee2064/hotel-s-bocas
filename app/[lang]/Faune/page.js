import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BGSlider from "../components/BGSlider";
import Title from "../components/Title";

import ImaDroAct from "../components/ImaDroAct";
import ImaGauAct from "../components/ImaGauAct";

import Separator from "../components/Separator";
import SeparatorB from "../components/SeparatorB";
import dynamic from 'next/dynamic';
import { getDictionary } from "../../../dictionary";
import ParallaxBanner from "../components/ParallaxBanner";



export default async function Faune({ params }) {
    const imagesBeach = ['plage1.jpg', 'plage2.jpg', 'plage3.jpg', 'plage4.jpg'];
    const imagesSurf = ['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg'];
    const imagesSnorkel = ['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg'];
    const imagesHikes = ['chambre1.jpg', 'chambre2.jpg', 'chambre3.jpg', 'chambre4.jpg'];

    const lang = await getDictionary(params.lang);





    return (
        <div className="bg-gray-800 w-screen">
            <NavBar
                hotel={lang.hotel}
                resto={lang.resto}
                activite={lang.activite}
                about={lang.about}
                contact={lang.contact}
                faune={lang.faune}
                bookNow={lang.bookNow}
            />
            <BGSlider title={lang.faune}
                images={['tortue.JPG', 'mimitimbi.JPG', 'chambre3.jpg', 'chambre4.jpg']}
            />
            <div className='py-12'>
                <ImaGauAct
                    titre={lang.faune2}
                    text={lang.fauneText}
                    images={imagesBeach}
                />
                <Separator />
                <ImaDroAct
                    titre={lang.flore}
                    text={lang.floreText}
                    images={imagesHikes}
                />
                <ParallaxBanner image='./img/mimitimbi.JPG' text='Nature' />

               
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

