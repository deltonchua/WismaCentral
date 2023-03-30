'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function AdBanner() {
  const [showBanner, setShowBanner] = useState(true);
  return showBanner ? (
    <div className='bg-zinc-900 text-zinc-100'>
      <div className='container h-16 flex items-center gap-2'>
        <div className='flex-1 overflow-hidden relative'>
          <Script
            async
            src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7105861530137815'
            crossOrigin='anonymous'
          />
          <ins
            className='adsbygoogle'
            style={{ display: 'block' }}
            data-ad-client='ca-pub-7105861530137815'
            data-ad-slot='7042903613'
            data-ad-format='auto'
            data-full-width-responsive='true'
          />
          <Script>(adsbygoogle = window.adsbygoogle || []).push({});</Script>
          <p className='text-center uppercase text-sm font-bold'>
            Your Ad Goes Here
          </p>
        </div>
        <button
          title='Close Banner'
          onClick={() => {
            setShowBanner(false);
          }}
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
  ) : null;
}
