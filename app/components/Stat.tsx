import React from 'react';
import Heading from './shared/Heading';
import Paragraph from './shared/Paragraph';
import Image from 'next/image';

const Stat = () => {
    return (
        <div className='px-60 py-16 mt-20 '>
            <div className='text-center mb-12'>
                <Heading heading={'চর্চার সাথে পড়াশোনা হবে স্মার্ট, ফান ও সহজ'} />
                <Paragraph para={'চর্চাতে আছে মক টেস্ট, ১০ লক্ষ প্রশ্নের ডাটাবেজ, দেশব্যাপী লিডারবোর্ড যা তোমার পড়াশোনা কে করবে প্রতিযোগী ও যাচাই এর সুযোগ'} />
            </div>

            <div className='grid grid-cols-12 grid-rows-6 gap-6'>
                <div className='col-span-4 row-span-3 relative'>
                    <Image
                        src={'/c.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-full h-full'
                    />
                    <Image
                        src={'/f2.png'}
                        alt='star'
                        width={200}
                        height={100}
                        className='w-[101px] h-[101px] absolute -top-5 -left-15'
                    />


                </div>
                <div className='col-span-4 row-span-3'>
                    <Image
                        src={'/c.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-full h-full'
                    />
                </div>
                <div className='col-span-4 row-span-6'>
                    <Image
                        src={'/c.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-full h-full'
                    />
                </div>
                <div className='col-span-3 row-span-2'>
                    <Image
                        src={'/c.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-full h-full'
                    />
                </div>
                <div className='col-span-5 row-span-3 relative'>
                    <Image
                        src={'/c.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-full h-full'
                    />
                    <Image
                        src={'/f1.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-[126px] h-24 absolute -top-8 -right-15'
                    />
                </div>
            </div>

            <div className='mt-8 flex justify-center'>
                <button className='bg-[#017A47] py-2 px-3.5 rounded-md flex items-center'>
                    সাইন আপ করো

                    <Image
                        src={'/arrow.png'}
                        alt='star'
                        width={400}
                        height={100}
                        className='w-6 h-6'
                    />
                </button>
            </div>
        </div>
    );
};

export default Stat;