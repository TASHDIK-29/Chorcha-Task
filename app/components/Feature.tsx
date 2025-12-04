import React from 'react';
import Heading from './shared/Heading';
import Paragraph from './shared/Paragraph';

const Feature = () => {
    return (
        <div className='px-60 py-16 mt-20'>
            <div className='text-center mb-12 border-b border-slate-100/75 pb-4'>
                <Heading heading={'চর্চার ফিচারসমূহ'} />
                <Paragraph para={'চর্চাতে আছে মক টেস্ট, ১০ লক্ষ প্রশ্নের ডাটাবেজ, দেশব্যাপী লিডারবোর্ড যা তোমার পড়াশোনা কে করবে প্রতিযোগী ও যাচাই এর সুযোগ'} />
            </div>
        </div>
    );
};

export default Feature;