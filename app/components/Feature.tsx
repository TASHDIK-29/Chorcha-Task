import React from 'react';
import Heading from './shared/Heading';
import Paragraph from './shared/Paragraph';
import Image from 'next/image';

const Feature = () => {
    return (
        <div className='px-60 py-16 mt-20'>
            <div className='text-center mb-12 border-b border-slate-100/75 pb-4'>
                <Heading heading={'চর্চার ফিচারসমূহ'} />
                <Paragraph para={'চর্চাতে আছে মক টেস্ট, ১০ লক্ষ প্রশ্নের ডাটাবেজ, দেশব্যাপী লিডারবোর্ড যা তোমার পড়াশোনা কে করবে প্রতিযোগী ও যাচাই এর সুযোগ'} />
            </div>

            <div className='grid grid-cols-2 gap-16'>
                <div >
                    <div className='flex items-center gap-1 justify-center'>
                        <h3 className='text-[24px] font-bold text-center'>
                            কাস্টম
                        </h3>
                        <Image
                            src={'/m.png'}
                            alt='app'
                            width={100}
                            height={100}
                            className='w-[24px] h[24px]'
                        />
                        <h3 className='text-[24px] font-bold'>
                            কাস্টম
                        </h3>
                    </div>
                    <p className='text-16 leading-[136%] mt-4 mb-8 text-center'>
                        নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ
                    </p>

                    <Image
                        src={'/phone.png'}
                        alt='app'
                        width={400}
                        height={100}
                        className='w-full'
                    />
                </div>
                <div >
                    <div className='flex items-center gap-1 justify-center'>
                        <h3 className='text-[24px] font-bold text-center'>
                            কাস্টম
                        </h3>
                        <Image
                            src={'/m.png'}
                            alt='app'
                            width={100}
                            height={100}
                            className='w-[24px] h[24px]'
                        />
                        <h3 className='text-[24px] font-bold'>
                            কাস্টম
                        </h3>
                    </div>
                    <p className='text-16 leading-[136%] mt-4 mb-8 text-center'>
                        নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ
                    </p>

                    <Image
                        src={'/phone.png'}
                        alt='app'
                        width={400}
                        height={100}
                        className='w-full'
                    />
                </div>
                <div >
                    <div className='flex items-center gap-1 justify-center'>
                        <h3 className='text-[24px] font-bold text-center'>
                            কাস্টম
                        </h3>
                        <Image
                            src={'/m.png'}
                            alt='app'
                            width={100}
                            height={100}
                            className='w-[24px] h[24px]'
                        />
                        <h3 className='text-[24px] font-bold'>
                            কাস্টম
                        </h3>
                    </div>
                    <p className='text-16 leading-[136%] mt-4 mb-8 text-center'>
                        নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ
                    </p>

                    <Image
                        src={'/phone.png'}
                        alt='app'
                        width={400}
                        height={100}
                        className='w-full'
                    />
                </div>
                <div >
                    <div className='flex items-center gap-1 justify-center'>
                        <h3 className='text-[24px] font-bold text-center'>
                            কাস্টম
                        </h3>
                        <Image
                            src={'/m.png'}
                            alt='app'
                            width={100}
                            height={100}
                            className='w-[24px] h[24px]'
                        />
                        <h3 className='text-[24px] font-bold'>
                            কাস্টম
                        </h3>
                    </div>
                    <p className='text-16 leading-[136%] mt-4 mb-8 text-center'>
                        নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ
                    </p>

                    <Image
                        src={'/phone.png'}
                        alt='app'
                        width={400}
                        height={100}
                        className='w-full'
                    />
                </div>
                <div >
                    <div className='flex items-center gap-1 justify-center'>
                        <h3 className='text-[24px] font-bold text-center'>
                            কাস্টম
                        </h3>
                        <Image
                            src={'/m.png'}
                            alt='app'
                            width={100}
                            height={100}
                            className='w-[24px] h[24px]'
                        />
                        <h3 className='text-[24px] font-bold'>
                            কাস্টম
                        </h3>
                    </div>
                    <p className='text-16 leading-[136%] mt-4 mb-8 text-center'>
                        নিজের ইচ্ছেমত বিষয়, টপিক, সময় ও প্রশ্নের ধরণ নির্বাচন করে মক পরীক্ষা দেওয়ার সুযোগ
                    </p>

                    <Image
                        src={'/phone.png'}
                        alt='app'
                        width={400}
                        height={100}
                        className='w-full'
                    />
                </div>
               
            </div>
        </div>
    );
};

export default Feature;