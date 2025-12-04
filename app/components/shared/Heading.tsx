import React from 'react';

const Heading = ({heading}) => {
    return (
        <h1 className='text-[48px] font-bold text-white leading-[100%] mb-2'>
            {heading}
        </h1>
    );
};

export default Heading;