import React from 'react';

export default function Newsletter() {
  return (
    <div className='w-full py-16 text-white bg-[#000300]'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className=' lg:col-span-2 text-center'>
          <div className='max-w-[90%] mx-auto'>
            <h2 className='font-bold py-2 lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:text-left'>
              Want tips & tricks to optimize your flow ?
            </h2>
            <p className='py-2 font-semibold lg:text-left'>
              Sign up to our newsletter program and stay up to date.
            </p>
          </div>
        </div>
        <div>
          <div className='flex flex-col lg:flex-row lg:justify-evenly'>
            <input
              type='email'
              className='lg:w-2/3 rounded-md p-2 m-6 lg:m-0 text-black lg:mr-1'
              placeholder='Enter your email ...'
            />
            <button className='bg-green-400 w-fit rounded-md px-6 mx-auto lg:mr-2 lg:mx-0 lg:py-0 lg:my-0 py-2 my-1 text-black text-sm md:text-md font-medium border-2 border-green-400 hover:text-white hover:bg-transparent hover:border-green-400'>
              Notify me
            </button>
          </div>
          <p className='mt-2 text-center lg:mr-2'>
            We care about the protection of your data. Read our
          </p>
          <div className='flex justify-center'>
            <a
              href='/'
              className='text-green-400 underline underline-green-400 underline-offset-2 hover:text-yellow-300 hover:underline-yellow-300'
            >
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
