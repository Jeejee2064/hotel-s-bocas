'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Title from './Title';
import CTA from './CTA';
import Link from 'next/link';
import Image from 'next/image'; 



const Cha1 = ({ title, text, images, CTAname, CTAlink, bgColor, options }) => {
    console.log(images)
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
    };




    return (
        <div className={`  pt-12 ${bgColor}`}>


            <div className="   ">
            <Title text={title} />
    <motion.h1
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                    className='text-center text-gray-200'
                >
                    {options}
                </motion.h1>
                <div className=" mx-auto  items-center justify-center mt-8 ">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.6 }}
                        className="items-center justify-center"
                    >
                        <Slider {...settings} className="md:w-3/4 w-full lg:w-3/5  mx-auto ">
    {images.map((image, index) => (
        <div key={index}>
            <img 
                src={`/img/${image}`} 
                alt={`Slide ${index + 1}`} 
                className="w-full h-1/2  object-cover" 
            />
        </div>
    ))}
</Slider>
                    </motion.div>
                </div>
                <motion.div
                    className="flex md:w-3/4 w-full lg:w-3/5 m-auto py-10 item-center justify-center relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.6 }}
                >
                   

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="  z-10"
                    >
                        <div className="justify-center items-center">
                            
                   
                            <Link href={CTAlink}>
                                <CTA name={CTAname} />
                            </Link>
                        </div>
                    </motion.div>
                </motion.div>


            </div>
        </div>
    );
};

export default Cha1;

