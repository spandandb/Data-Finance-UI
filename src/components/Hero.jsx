import React from 'react';
import bgVid from '../videos/bg.mp4';
import Typed from 'react-typed';

export default function Hero() {
  return (
    <div id='home'>
      <div className='w-full h-[90vh] top-0'>
        <video
          className='object-cover h-[130vh] w-full absolute -z-10 top-0'
          src={bgVid}
          autoPlay
          loop
          muted
        />
        <div className='max-w-[800px] w-full h-full mx-auto text-center flex flex-col justify-center'>
          <p className='text-white font-bold p-2 text-lg md:text-2xl'>
            GROWING WITH DATA ANALYTICS
          </p>
          <h1 className='text-green-400 md:text-7xl sm:text-6xl text-4xl font-bold md:py-2'>
            Grow with data<span className='text-yellow-300'>.</span>
          </h1>
          <div className='flex justify-center items-center'>
            <p className='text-white text-md sm:text-xl md:text-3xl font-semibold py-2'>
              Fast, flexible financing for{' '}
            </p>
            <Typed
              className='text-yellow-300 font-bold text-md sm:text-xl md:text-3xl ml-2'
              strings={['BTB', 'BTC', 'SASS']}
              typeSpeed={160}
              backSpeed={160}
              loop
            />
          </div>
          <p className='text-gray-400 font-semibold p-6 text-sm sm:text-md md:text-lg'>
            Monitor your <span className='text-yellow-300'>Data Analytics</span>{' '}
            to increase revenue for BTB,BTC & SASS platforms.
          </p>
          <button className='bg-green-400 w-fit mx-auto m-10 rounded-md px-8 py-4 text-md md:text-lg font-medium border-2 border-green-400 hover:text-white hover:bg-transparent hover:border-green-400'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
