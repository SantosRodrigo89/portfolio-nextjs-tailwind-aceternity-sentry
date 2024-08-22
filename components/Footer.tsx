/* eslint-disable @next/next/no-img-element */
import React from 'react';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <footer className='w-full mb-=[100px] md:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Leveling up <span className='text-purple'>one day</span> at a time
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
        Vamos transformar desafios em oportunidades!
        </p>
        <a href='mailto:rodrigo.v.santos89@gmail.com'>
          <MagicButton
            title='Vamos conversar?'
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center md:w-11/12 w-full'>  
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2024 Rodrigo
        </p>
          <div className='flex items-center md:gap-3 gap-6'>
            {socialMedia.map((info) => (
              <a
                key={info.id}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
              >
                <img src={info.img} alt='ícones de mídia social' width={20} height={20} />
              </a>
            ))}
          </div>
        </div>
    </footer>
  );
};

export default Footer;
