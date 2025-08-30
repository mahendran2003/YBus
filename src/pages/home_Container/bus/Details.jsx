import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Bus from "../../../assets/bus9.png";
import { Link } from 'react-router-dom';
import Destination from "../destination/Destination";
import DepartTime from "../departtime/DepartTime";
import BusSeatLayout from "../seat/Seat";

const Details = () => {
  const rating = 4.5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[10ch]">
      <div className="w-full grid grid-cols-2 gap-16 items-center">
        <div className="col-span-1 space-y-8">
          <img src={Bus} alt="bus details" className="w-full aspect-[3/2] rounded-md object-contain"/>
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-neutral-900 dark:text-neutral-50">
              Luxury Bus
              <span className="text-base font-normal text-neutral-400 dark:text-neutral-500 ml-3">
                (NL 07 PM 0001)
              </span>
            </h1>
            <div className="flex items-center gap-x-2">
              <div className="flex items-center gap-x-1 text-sm text-yellow-500 dark:text-yellow-600">
                {[...Array(fullStars)].map((_, index) => (
                  <FaStar key={index} />
                ))}
                {hasHalfStar && <FaStarHalfAlt />}
              </div>
              <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal"> 
                ({rating})
              </p>
            </div>
            <p className="text-neutral-900 dark:text-neutral-200 text-sm font-normal">
              I travel to Ybus by Amtrak quite often and decided to try BestBus Prime on Sunday. It was easy, cheaper, and very comfortable, without the delays I have experienced with Amtrak recently. Our driver, Ali Inshan, was very good and courteous. I will definitely use Prime again.
            </p>
          </div>
        </div>

        <div className="col-span-1 space-y-10">
          <div className="space-y-6">
            <Destination/>  
            <BusSeatLayout />
            <DepartTime/>
            {/* Add more content here if needed */}
          </div>
          {/* Seat selection */}
          <div className="flex">
            <Link to={'bus/bus-details/checkout'} className="w-fit bg-violet-600 text-neutral-50 font-medium text-base px-6 py-2 rounded-md hover:bg-violet-700 ease-in-out duration-300">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
