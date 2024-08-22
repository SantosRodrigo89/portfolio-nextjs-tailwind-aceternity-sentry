/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { companies, testimonials } from '@/data';

const Clients = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        Feedback positivo de <span className='text-purple'>colegas</span>
      </h1>
      <div className='flex flex-col items-center justify-center'></div>
      <div className='h-[50v] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
        <div>
          <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
          />
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-8'>
        {companies.map(({ id, img, name, nameImg }) => (
          <div
            key={id}
            className='flex items-center justify-center w-1/2 sm:w-1/3 md:w-auto max-w-[120px] md:max-w-[160px]'
          >
            <img src={img} alt={name} className='w-1/4 md:w-1/3 ' />
            <h2 className='px-2 text-xs sm:text-sm md:text-base sm:py-3'>{nameImg}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
