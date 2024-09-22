// pages/index.js
'use client'
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { motion, AnimatePresence } from 'framer-motion';
import { styleScript, poppins, allura } from "../fonts";
import Image from 'next/image';



const dinerData = [
  {
    id: 1,
    categorie: 'entree',
    nom_en: 'Betroot carpaccio, Roquefort cheese , pecan nuts, brocoli and thyme dressing.',
    nom_fr: 'Carpaccio de betterave, Roquefort, noix de pécan, brocoli et vinaigrette au thym',
    nom_es: 'Carpaccio de remolacha, queso Roquefort, pecanas y brócoli, vinagreta de tomillo',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Betroot carpaccio, Roquefort cheese , pecan nuts, brocoli and thyme dressing.',
    prix: 11,
  },
    {
    id: 2,
    categorie: 'entree',
    nom_en: 'Fish tiradito in coconut sauce , passion fruit and fresh herbs.',
    nom_fr: 'Tiradito de poisson en sauce coco, fruit de la passion et herbes fraîches',
    nom_es: 'Tiradito de pescado en salsa de coco, maracuyá y hierbas frescas',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Fish tiradito in coconut sauce , passion fruit and fresh herbs.',
    prix: 13,
  },
    {
    id: 3,
    categorie: 'entree',
    nom_en: 'Salad of the month',
    nom_fr: 'Salade du mois',
    nom_es: 'Ensalada del mes',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 9,
  },
    {
    id: 4,
    categorie: 'entree',
    nom_en: 'Fried traditional pastry with pulled pork and pickled onions',
    nom_fr: 'Pâtisserie traditionnelle frite avec porc effiloché et oignons marinés',
    nom_es: 'Hojaldras con pulled pork y cebolla encur tida',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12,
  },
    {
    id: 5,
    categorie: 'entree',
    nom_en: 'French onion soup',
    nom_fr: 'Soupe à l\'oignon française',
    nom_es: 'Sopa de cebolla francesa',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 11,
  },
      {
    id: 6,
    categorie: 'entree',
    nom_en: 'Tuna tartare with an Asian touch and avocado puree',
    nom_fr: 'Tartare de thon avec une touche asiatique et purée d\'avocat',
    nom_es: 'Tartare de atún con toque asiático y puré de aguacate',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 13,
  },

    {
    id: 7,
    categorie: 'plat',
    nom_en: 'Cobia filet in miso sauce with carrot puree',
    nom_fr: 'Filet de cobia en sauce miso avec purée de carottes',
    nom_es: 'Filete de cobia en salsa miso y puré de zanahoria',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 23,
  },

    {
    id: 8,
    categorie: 'plat',
    nom_en: 'Pork ribs in barbecue sauce',
    nom_fr: 'Côtes de porc en sauce barbecue',
    nom_es: 'Ribs de cerdo en salsa barbacoa',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 19,
  },

    {
    id: 9,
    categorie: 'plat',
    nom_en: 'Beef cut of the day',
    nom_fr: 'Pièce de boeuf du jour',
    nom_es: 'Corte de res del día',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 24,
  },

    {
    id: 10,
    categorie: 'plat',
    nom_en: 'Tuna tataki in sesame seeds crust',
    nom_fr: 'Tataki de thon en croûte de graines de sésame',
    nom_es: 'Tataki de atún con costra de semilla de sésamo',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 21,
  },
      {
    id: 11,
    categorie: 'plat',
    nom_en: 'Hamburger with raclette cheese and caramelized onion',
    nom_fr: 'Hamburger avec fromage à raclette et oignons caramélisés',
    nom_es: 'Hamburguesa con queso raclette y cebolla caramelizada',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 17,
  },

    {
    id: 12,
    categorie: 'plat',
    nom_en: 'Prawns in red curry and coconut',
    nom_fr: 'Crevettes au curry rouge et coco',
    nom_es: 'Langostinos en salsa curry rojo y coco',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 21,
  },
    {
    id: 13,
    categorie: 'dessert',
    nom_en: 'Trio of homemade ice cream',
    nom_fr: 'Trio de glaces maison',
    nom_es: 'Trío de helados caseros',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 8,
  },

    {
    id: 14,
    categorie: 'dessert',
    nom_en: 'Chocolate fondant',
    nom_fr: 'Fondant au chocolat',
    nom_es: 'Fondant de chocolate',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 9,
  },
    {
    id: 15,
    categorie: 'dessert',
    nom_en: 'Crème Brûlée',
    nom_fr: 'Crème Brûlée',
    nom_es: 'Crème Brûlée',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 8,
  },



];

const dejeunerData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];
const barData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];
const ptidejData = [
  {
    id: 1,
    categorie: 'tapas',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 2,
    categorie: 'entrée',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 3,
    categorie: 'plat',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 4,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },
    {
    id: 5,
    categorie: 'dessert',
    nom_en: 'Spanish Omelette',
    nom_fr: 'Omelette Espagnole',
    nom_es: 'Tortilla Española',
    description_en: 'A classic Spanish dish with eggs, potatoes, and onions.',
    description_fr: 'Un plat espagnol classique à base d\'œufs, de pommes de terre et d\'oignons.',
    description_es: 'Un plato clásico español con huevos, patatas y cebollas.',
    prix: 12.99,
  },

];

const categoriesData= {
  "categories": {
    "entree": {
      "en": "Starters",
      "es": "Entradas",
      "fr": "Entrées"
    },
    "plat": {
      "en": "Main Courses",
      "es": "Platos Fuertes",
      "fr": "Plat Principaux"
    },
    "dessert": {
      "en": "Desserts",
      "es": "Postres",
      "fr": "Desserts"
    }
  }
}
// Get the current path
const currentPath = window.location.pathname;

// Extract the language code from the path
const lang = currentPath.split('/')[1];

// Now, 'lang' should contain the language code ('en', 'fr', 'es', etc.)
console.log('Current Language:', lang);


function getCategoryName(category) {
  
  const categories = categoriesData.categories;


    return categories[category][lang]; // Return the text in the desired language

  
}

const displayMenu = (menuData) => {
  const categoryOrder = ['tapas', 'entree', 'plat', 'dessert'];

  const groupedMenu = groupByCategory(menuData);

  const sortedCategories = categoryOrder.filter(category => groupedMenu[category]);

  return sortedCategories.map(category => (
    <div key={category} className="w-full justify-center text-center rounded-lg">
      <div className={styleScript.className}>
        <h2 className="text-8xl text-gray-200 align-text-center mt-24 mb-12">
        {getCategoryName(category)}
        </h2>
      </div>
      {groupedMenu[category].map((item) => (
        <div key={item.id} className={poppins.className}>
          <p className="text-2xl ph-8 font-bold text-gray-200 align-text-center">
            {lang === 'fr' && item.nom_fr}
            {lang === 'es' && item.nom_es}
            {lang === 'en' && item.nom_en}
          </p>

          <p className="text-2xl text-gray-200 align-text-center pb-12">
            ${item.prix}
          </p>
        </div>
      ))}
      <div className='w-1/5 h-2 rounded-full bg-gray-400 m-auto'>
      </div>
    </div>
  ));
};

const groupByCategory = (menuData) => {
  return menuData.reduce((grouped, item) => {
    const category = item.categorie;

    if (!grouped[category]) {
      grouped[category] = [];
    }

    grouped[category].push(item);
    return grouped;
  }, {});
};

function CollapsibleMenu({ title, menuData }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=' relative justify-center bg-gray-600 bg-opacity-20 w-3/4 mx-auto items-center'>
      <div className='justify-self-center items-center rounded-lg'>
        <motion.div
          onClick={toggleMenu}
          className="cursor-pointer relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Image
            src={`/img/image2.png`}
            alt={`cha`}
            fill
            style={{ objectFit: "cover", opacity: 0.7, zIndex: -1 }}
          />
          <div className={styleScript.className}>
            <h2 className="text-6xl  text-gray-200 text-center mt-24 p-12 mb-12 z-20">{title}</h2>
          </div>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              key={title}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="w-full justify-center text-center pb-8"
            >
              <div className={styleScript.className}>
                {displayMenu(menuData)}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default function DinerMenu({titleBar,titleBreakfast,titleDiner,titleLunch}) {






  return (
    <div>
    {/*
            <CollapsibleMenu title={titleBar} menuData={barData} />
            <CollapsibleMenu title={titleLunch} menuData={dejeunerData} />
      
      <CollapsibleMenu title={titleBreakfast} menuData={ptidejData} />
      */}
      <CollapsibleMenu title={titleDiner} menuData={dinerData} />
    </div>
  );
}
