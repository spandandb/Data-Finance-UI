import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsFacebook, BsLinkedin, BsInstagram } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className='w-full bg-[#000300]'>
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div className=''>
          <h1 className='text-3xl font-bold text-green-400 mb-4 cursor-not-allowed'>
            Data<span className='text-white'>Fin</span>
            <span className='text-yellow-300'>.</span>
          </h1>
          <p className='font-normal my-4'>
            This website has been made by Spandan Das Barman. I hope you liked
            it. Do connect with me if you want to team up for such amazing
            projects in future
          </p>
          <div className='flex justify-around my-6'>
            <a
              href='https://github.com/spandandb'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillGithub size={30} className='hover:text-green-400' />
            </a>
            <a
              href='https://www.facebook.com/spandan.dasbarman'
              target='_blank'
              rel='noreferrer'
            >
              <BsFacebook size={25} className='hover:text-green-400' />
            </a>
            <a
              href='https://www.instagram.com/spandy_db/'
              target='_blank'
              rel='noreferrer'
            >
              <BsInstagram size={25} className='hover:text-green-400' />
            </a>
            <a
              href='https://www.linkedin.com/in/spandan-das-barman-ba0970239/'
              target='_blank'
              rel='noreferrer'
            >
              <BsLinkedin size={25} className='hover:text-green-400' />
            </a>
          </div>
        </div>
        <hr className='lg:hidden border border-yellow-300' />
        <div className='lg:col-span-2 flex justify-around mt-10'>
          <div>
            <h6 className='font-semibold underline text-gray-400 mb-3'>
              Solutions
            </h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer'>Analytics</li>
              <li className='py-2 text-sm cursor-pointer'>Marketing</li>
              <li className='py-2 text-sm cursor-pointer'>Commerce</li>
              <li className='py-2 text-sm cursor-pointer'>Insights</li>
            </ul>
          </div>
          <div>
            <h6 className='font-semibold underline text-gray-400 mb-3'>
              Support
            </h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer'>Pricing</li>
              <li className='py-2 text-sm cursor-pointer'>Documentation</li>
              <li className='py-2 text-sm cursor-pointer'>Guides</li>
              <li className='py-2 text-sm cursor-pointer'>API Status</li>
            </ul>
          </div>
          <div>
            <h6 className='font-semibold underline text-gray-400 mb-3'>
              Company
            </h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer'>About</li>
              <li className='py-2 text-sm cursor-pointer'>Jobs</li>
              <li className='py-2 text-sm cursor-pointer'>Careers</li>
              <li className='py-2 text-sm cursor-pointer'>Press</li>
            </ul>
          </div>
          <div>
            <h6 className='font-semibold underline text-gray-400 mb-3'>
              Legal
            </h6>
            <ul>
              <li className='py-2 text-sm cursor-pointer'>Claim</li>
              <li className='py-2 text-sm cursor-pointer'>Policy</li>
              <li className='py-2 text-sm cursor-pointer'>Terms</li>
            </ul>
          </div>
        </div>
      </div>
      <p className='font-normal py-1 text-center bg-green-400'>
        ©️ 2022 DataFin. | All Rights Reserved
      </p>
    </div>
  );
}
