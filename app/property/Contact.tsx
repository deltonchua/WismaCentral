import Link from 'next/link';

export default function Contact() {
  return (
    <section className='mt-12 border-t border-t-zinc-600'>
      <div className='container py-8 flex items-center gap-6 justify-between flex-wrap'>
        <div className='max-w-[80%]'>
          <h1 className='text-2xl uppercase'>Move Your Business Here</h1>
          <p className='mt-2'>
            Get a slice of real estate in the most exclusive postcode in
            Malaysia
          </p>
        </div>
        <Link href='/contact' className='btn btn-filled' title='Get in Touch'>
          <span>Get in Touch</span>
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
        </Link>
      </div>
    </section>
  );
}
