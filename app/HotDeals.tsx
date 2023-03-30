'use client';

import Image from 'next/image';

const deal = [
  'Social Media Marketing 123',
  '/img/resources/smm123.jpeg',
  'Automate your social media marketing in 3 simple steps.',
  'https://smm123.1university.com',
];

export default function HotDeals({ onClose }: { onClose: () => void }) {
  const [title, img, description, link] = deal;
  return (
    <div className='fixed inset-0 w-screen h-screen z-20 glass grid place-items-center'>
      <div className='w-[90%] max-w-[30rem] bg-white p-8 pb-10 rounded-2xl flex flex-col items-center text-center border-2 border-zinc-900 relative'>
        <div className='w-40 h-40 rounded-full overflow-hidden relative'>
          <Image src={img} alt={title} fill sizes='10rem' />
        </div>
        <h3 className='font-bold uppercase text-2xl mt-6'>{title}</h3>
        <p className='mt-2'>{description}</p>
        <a
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          title={title}
          className='btn mt-6'
        >
          <span>Get Started</span>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z'
              clipRule='evenodd'
            />
          </svg>
        </a>
        <button
          className='absolute top-4 right-4'
          title='Close'
          onClick={onClose}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
