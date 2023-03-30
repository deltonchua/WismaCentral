import Link from 'next/link';
import { menu } from './list';

export default function Footer() {
  return (
    <footer className='bg-zinc-900 text-zinc-100'>
      <div className='container py-16 grid sm:grid-cols-3 gap-16 text-sm'>
        <div>
          <h1 className='text-lg font-bold'>Wisma Central</h1>
          <p className='mt-2'>
            147, Jln Ampang
            <br />
            50450 Kuala Lumpur
            <br />
            Malaysia
          </p>
          <a
            href='https://goo.gl/maps/2pceQ9SAABhzo97u6'
            target='_blank'
            rel='noopener noreferrer'
            className='btn hover:border-zinc-100 mt-4'
            title='Google Maps'
          >
            <span>Google Maps</span>
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
        </div>
        <div className='flex flex-col gap-2'>
          {[['Home', '/'], ...menu].map(([title, link], i) => (
            <Link
              href={link}
              title={title}
              className='w-min font-bold uppercase hover:text-orange-600 text-zinc-300'
              key={i}
            >
              {title}
            </Link>
          ))}
        </div>
        <div>
          <div className='flex gap-2 flex-wrap'>
            <a
              href='mailto:contact@wismacentralkl.com'
              className='btn btn-filled bg-zinc-100 text-zinc-900'
              title='Email'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path d='M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z' />
                <path d='M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z' />
              </svg>
              <span>Email</span>
            </a>
            <a
              href='https://wa.me/60173082891'
              target='_blank'
              rel='noopener noreferrer'
              className='btn hover:border-zinc-100'
              title='WhatsApp'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-5 h-5'
              >
                <path
                  fillRule='evenodd'
                  d='M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 01-.522 1.756.75.75 0 00.584 1.143 5.976 5.976 0 003.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7zm0 8a1 1 0 100-2 1 1 0 000 2zm-2-1a1 1 0 11-2 0 1 1 0 012 0zm5 1a1 1 0 100-2 1 1 0 000 2z'
                  clipRule='evenodd'
                />
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>
          <p className='mt-4'>
            &copy;{new Date().getFullYear()} Wisma Central.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
