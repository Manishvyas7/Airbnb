import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { listingDataContext } from '../Context/ListingContext';

function ListingPage3() {
  const navigate = useNavigate();
  const {
    frontEndImage1,
    frontEndImage2,
    frontEndImage3,
    city,
    landmark,
  } = useContext(listingDataContext);

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 py-6">
      
      {/* Back Button */}
      <button
        onClick={() => navigate('/listingpage1')}
        className="absolute top-6 left-6 w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-md hover:bg-red-700 transition"
      >
        <FaArrowLeftLong className="text-white text-xl" />
      </button>

      {/* Location Title */}
      <div className="w-full max-w-6xl mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">
          {`In ${landmark?.toUpperCase()}, ${city?.toUpperCase()}`}
        </h1>
      </div>

      {/* Image Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Main Image */}
        <div className="md:col-span-2 h-[300px] md:h-[500px] overflow-hidden rounded-lg border">
          <img
            src={frontEndImage1}
            alt="Main"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Side Images */}
        <div className="flex flex-col gap-4 h-[300px] md:h-[500px]">
          <div className="h-1/2 overflow-hidden rounded-lg border">
            <img
              src={frontEndImage2}
              alt="Side 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-1/2 overflow-hidden rounded-lg border">
            <img
              src={frontEndImage3}
              alt="Side 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListingPage3;
