import React from 'react';

const Paragraph = ({para}) => {
    return (
        <p className='text-[18px] leading-[150%] font-normal text-white mb-2'>
            {para}
        </p>
    );
};

export default Paragraph;