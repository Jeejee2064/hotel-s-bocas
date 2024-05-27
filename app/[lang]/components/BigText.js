import React from 'react';
import CTA from './CTA';
import { parisienne } from '../fonts';
import Link from 'next/link';

const BigText = () => {
    return (
        <div className="h-3/4 w-full py-72  justify-center items-center">

            <div className={parisienne.className}>
                <h1 className="text-8xl text-gray-200 text-center">Experience Pristine Nature</h1>
            </div>
            <Link href='https://90af79e181b4489f.sirvoy.me/'>
                <CTA name='Book Now' />
            </Link>
        </div>
    );
};

export default BigText;
