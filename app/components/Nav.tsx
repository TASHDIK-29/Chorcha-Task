import Image from 'next/image';
import React from 'react';

const Nav = () => {
    return (
        <div className='flex items-center justify-between py-2 px-60'>
            <Image 
            src={'/logo.png'}
            alt='logo'
            width={100}
            height={100}
            className='w-[60px] h-[60px]'
            />

            <div className='flex items-center gap-12'>
                <a href="">ফিচারসমূহ</a>
                <a href="">চর্চা সাফল্য</a>
                <a href="">সাবস্ক্রিপশন</a>
            </div>

            <button className='bg-[#017A47] py-2 px-3.5 rounded-md'>
                সাইন আপ করো
            </button>
        </div>
    );
};

export default Nav;