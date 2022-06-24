import React from 'react';
import analytics from '../images/analytics.svg';

export default function Analytics() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto text-center md:text-left'>
        <h2 className='text-4xl md:text-5xl font-bold mb-10'>
          What We Provide ?
        </h2>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img src={analytics} alt='' className='w-2/3 mx-auto my-4' />
        <div className='flex flex-col justify-center items-center my-4 text-center'>
          <p className='text-green-400 font-bold '>DATA ANALYTICS DASHBOARD</p>
          <h1 className='font-bold py-2 text-2xl sm:text-2xl'>
            Manage Data Analytics Centrally
          </h1>
          <p className='font-semibold'>
            We provide you with your one stop application for tracking your data
            analytics in a brand new hassle free way. Click on the button below
            to sign up for our services.
          </p>
          <button className='bg-black text-green-400 w-fit mx-auto m-10 rounded-md px-8 py-2 text-md md:text-lg font-medium border-2 border-black hover:text-green-400 hover:bg-transparent hover:border-green-400'>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
