import React from 'react';
import single from '../images/single.png';
import double from '../images/double.png';
import triple from '../images/triple.png';

export default function Cards() {
  return (
    <div className='w-full py-40 px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto text-center md:text-left'>
        <h2 className='text-4xl md:text-5xl font-bold mb-10'>Pricing</h2>
      </div>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-2xl flex flex-col p-4 my-8 rounded-lg duration-100 hover:scale-105 border border-green-400 hover:shadow-green-400'>
          <img src={single} alt='' className='w-20 mx-auto -m-7 bg-white' />
          <h2 className='text-2xl font-bold text-center py-8 mt-4'>
            Single User
          </h2>
          <p className='text-center font-bold text-4xl'>₹199</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b-2 mx-8 mt-8'>500 GB storage</p>
            <p className='py-2 border-b-2 mx-8'>1 Granted User</p>
            <p className='py-2 border-b-2 mx-8'>Send upto 2 GB</p>
          </div>
          <button className='bg-green-400 w-fit rounded-md px-6 py-2 m-6 mx-auto text-black text-md md:text-md font-medium border-2 border-green-400 hover:text-black hover:bg-transparent hover:border-green-400'>
            Start Trial
          </button>
        </div>

        <div className='w-full shadow-2xl flex flex-col md:my-4 p-4 my-8 md:mb-8 rounded-lg duration-100 hover:scale-105 border border-green-400 hover:shadow-green-400'>
          <img src={double} alt='' className='w-20 mx-auto -m-7 bg-white' />
          <h2 className='text-2xl font-bold text-center py-8 mt-3'>
            Partnership
          </h2>
          <p className='text-center font-bold text-4xl'>₹499</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b-2 mx-8 mt-8'>1500 GB storage</p>
            <p className='py-2 border-b-2 mx-8'>2 Granted Users</p>
            <p className='py-2 border-b-2 mx-8'>Send upto 5 GB</p>
          </div>
          <button className='bg-black w-fit rounded-md px-6 py-2 m-6 mx-auto text-green-400 text-md md:text-md font-medium border-2 border-black hover:text-black hover:bg-transparent hover:border-green-400'>
            Start Trial
          </button>
        </div>

        <div className='w-full shadow-2xl flex flex-col p-4 md:my-0 md:mb-8 my-8 rounded-lg duration-100 hover:scale-105 border border-green-400 hover:shadow-green-400'>
          <img src={triple} alt='' className='w-20 mx-auto -m-7 bg-white' />
          <h2 className='text-2xl font-bold text-center py-8 mt-1'>
            Group Use
          </h2>
          <p className='text-center font-bold text-4xl'>₹1899</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b-2 mx-8 mt-8'>10000 GB storage</p>
            <p className='py-2 border-b-2 mx-8'>Unlimited Granted Users</p>
            <p className='py-2 border-b-2 mx-8'>Send upto 100 GB</p>
          </div>
          <button className='bg-green-400 w-fit rounded-md px-6 py-2 m-6 mx-auto text-black text-md md:text-md font-medium border-2 border-green-400 hover:text-black hover:bg-transparent hover:border-green-400'>
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
}
