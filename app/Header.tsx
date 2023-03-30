'use client';

import { useState } from 'react';
import Link from 'next/link';
import { menu } from './list';
import HotDeals from './HotDeals';
// import Image from 'next/image';

export default function Header() {
  const [showDeals, setShowDeals] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className='sticky top-0 z-10 glass shadow-sm'>
      <div className='container p-4 flex items-center justify-between'>
        <Link href='/' title='Home'>
          {/* <Image src='/logo.png' width={45} height={30} alt='WCkl' /> */}
          <h1 className='text-lg font-bold'>WCkl</h1>
        </Link>
        <div className='flex items-center gap-4'>
          <button
            className='btn py-1'
            title='Hot Deals!'
            onClick={() => {
              setShowDeals(true);
            }}
          >
            <span>Hot Deals!</span>
          </button>
          <button
            className=''
            title={showMenu ? 'Hide Menu' : 'Show Menu'}
            onClick={() => {
              setShowMenu((prev) => !prev);
            }}
          >
            {showMenu ? (
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
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            ) : (
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
                  d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {showMenu && (
        <div className='border-t border-b border-zinc-300'>
          <nav
            className='container flex sm:justify-center gap-4 overflow-x-auto'
            onClick={() => {
              setShowMenu(false);
            }}
          >
            {menu.map(([title, link], i) => (
              <Link
                href={link}
                title={title}
                className='text-sm uppercase font-bold text-zinc-600 hover:text-zinc-900'
                key={i}
              >
                {title}
              </Link>
            ))}
          </nav>
        </div>
      )}
      {showDeals && (
        <HotDeals
          onClose={() => {
            setShowDeals(false);
          }}
        />
      )}
    </header>
  );
}
