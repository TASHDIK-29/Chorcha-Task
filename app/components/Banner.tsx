import React from 'react';
import Heading from './shared/Heading';
import Paragraph from './shared/Paragraph';
import Image from 'next/image';

const Banner = () => {
    return (
        <div >
            <div className='flex items-center gap-8 py-16 px-60'>
                <div className='w-2/3 px-16'>
                    <Heading heading={"চর্চা করো নিজের গতিতে"} />
                    <Paragraph para={"সিলেবাসের যেকোন টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, AI দিয়ে  ব্যাখ্যা বুঝে নাও, আর মক টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।"} />

                    <Image
                        src={'/appstore.png'}
                        alt='app'
                        width={100}
                        height={100}
                        className='w-[100px] h[100px]'
                    />

                    <div className='flex items-center gap-4 mt-4'>
                        <p>
                            100k+ downloads |
                        </p>
                        <Image
                            src={'/star.png'}
                            alt='star'
                            width={100}
                            height={100}
                            className='w-3.5 h-3.5'
                        />
                        <p>
                            4.6 Rating with over 8k Reviews
                        </p>
                    </div>
                </div>

                <div className='w-1/3'>
                    <Image
                        src={'/phone.png'}
                        alt='star'
                        width={400}
                        height={100}
                    />
                </div>

            </div>
                <Image
                    src={'/shad1.png'}
                    alt='star'
                    width={100}
                    height={100}
                    className='w-full h-[200px]'
                />
        </div>
    );
};

export default Banner;