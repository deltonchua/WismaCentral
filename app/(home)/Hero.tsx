import Link from 'next/link';

export default function Hero() {
  return (
    <section className='container max-w-screen-md space-y-8 mt-8'>
      <div className='text-center'>
        <h1 className='font-bold text-4xl uppercase'>Wisma Central</h1>
        <h2 className='mt-2 max-w-[80%] mx-auto text-zinc-600'>
          147, Jln Ampang, 50450 Kuala Lumpur
        </h2>
      </div>
      <iframe
        src='https://www.google.com/maps/embed?pb=!4v1607924460082!6m8!1m7!1soKcD1ohCCqU0-ElYCVmB4w!2m2!1d3.159108128899523!2d101.7143638768715!3f160.85121749295658!4f5.529162162294142!5f0.7820865974627469'
        allowFullScreen
        className='w-full aspect-[4/3] sm:aspect-video rounded-2xl outline-none border-2 border-zinc-900'
      />
      <div className='flex items-center justify-center gap-4 flex-wrap'>
        <Link href='/services' className='btn btn-filled' title='All Services'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            className='w-5 h-5'
          >
            <path
              fillRule='evenodd'
              d='M9.638 1.093a.75.75 0 01.724 0l2 1.104a.75.75 0 11-.724 1.313L10 2.607l-1.638.903a.75.75 0 11-.724-1.313l2-1.104zM5.403 4.287a.75.75 0 01-.295 1.019l-.805.444.805.444a.75.75 0 01-.724 1.314L3.5 7.02v.73a.75.75 0 01-1.5 0v-2a.75.75 0 01.388-.657l1.996-1.1a.75.75 0 011.019.294zm9.194 0a.75.75 0 011.02-.295l1.995 1.101A.75.75 0 0118 5.75v2a.75.75 0 01-1.5 0v-.73l-.884.488a.75.75 0 11-.724-1.314l.806-.444-.806-.444a.75.75 0 01-.295-1.02zM7.343 8.284a.75.75 0 011.02-.294L10 8.893l1.638-.903a.75.75 0 11.724 1.313l-1.612.89v1.557a.75.75 0 01-1.5 0v-1.557l-1.612-.89a.75.75 0 01-.295-1.019zM2.75 11.5a.75.75 0 01.75.75v1.557l1.608.887a.75.75 0 01-.724 1.314l-1.996-1.101A.75.75 0 012 14.25v-2a.75.75 0 01.75-.75zm14.5 0a.75.75 0 01.75.75v2a.75.75 0 01-.388.657l-1.996 1.1a.75.75 0 11-.724-1.313l1.608-.887V12.25a.75.75 0 01.75-.75zm-7.25 4a.75.75 0 01.75.75v.73l.888-.49a.75.75 0 01.724 1.313l-2 1.104a.75.75 0 01-.724 0l-2-1.104a.75.75 0 11.724-1.313l.888.49v-.73a.75.75 0 01.75-.75z'
              clipRule='evenodd'
            />
          </svg>
          <span>All Services</span>
        </Link>
        <a
          href='https://goo.gl/maps/2pceQ9SAABhzo97u6'
          target='_blank'
          rel='noopener noreferrer'
          className='btn'
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
    </section>
  );
}
