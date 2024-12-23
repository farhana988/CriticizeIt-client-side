/* eslint-disable react/prop-types */
// import React from 'react';

const ServiceDetailsCard = ({details}) => {
    const {
        serviceImage,
     serviceTitle,
     companyName,
     website,
     description,
     category,
     price,
     addedDate,
      } = details || {}
    return (
        <div className=' bg-white rounded-t-xl lg:rounded-l-xl shadow-lg overflow-hidden'>
            
        <div className='flex flex-col '>
            {/* Service Image */}
            <div className='w-full md:w-1/3'>
                <img
                    src={serviceImage || 'https://via.placeholder.com/300'}
                    alt={serviceTitle}
                    className='w-full h-full object-cover rounded-t-lg md:rounded-l-lg'
                />
            </div>

            {/* Service Info */}
            <div className='p-6 w-full md:w-2/3'>
                <h2 className='text-2xl font-semibold text-gray-800 mb-2'>
                service Title: {serviceTitle}</h2>
                <p className='text-sm text-gray-500 mb-4'>
                company Name:   {companyName}</p>

                {/* Website  */}
               <p>website:{website}</p>

              

                <div className='mt-6'>
                    {/* Category */}
                    <p className='text-sm font-semibold text-gray-700'>
                        <span className='text-gray-500'>Category: </span>
                        {category}
                    </p>

                    {/* Price */}
                    <p className='text-lg font-bold text-gray-900 mt-2'>
                        Price: ${price}
                    </p>

                    {/* Added Date */}
                    <p className='text-sm text-gray-500 mt-2'>
                        Added on: {new Date(addedDate).toLocaleDateString()}
                    </p>
                </div>
                <div className='mt-6'>
                    {/* Description */}
                    <h3 className='text-lg font-medium text-gray-800 mb-2'>Description</h3>
                    <p className='text-gray-600'>{description}</p>
                </div>

            
            </div>
        </div>
    </div>
    );
};

export default ServiceDetailsCard;