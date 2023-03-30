import Image from 'next/image';
import { prices } from '../list';

export default function Prices() {
  return (
    <section className='container mt-8'>
      <div className='text-center max-w-[80%] mx-auto'>
        <h1 className='text-2xl'>Prices at a Glance</h1>
        <p className='mt-2'>Estimated property prices around Wisma Central</p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
        {prices.map(([title, link, img, rental, sale], i) => (
          <div
            className='flex flex-col items-center'
            title={title as string}
            key={i}
          >
            <div className='w-2/3 max-w-[15rem] aspect-square rounded-full overflow-hidden relative'>
              <Image
                src={img as string}
                fill
                sizes='15rem'
                alt={title as string}
              />
            </div>
            <div className='text-center mt-4'>
              <h3 className='font-bold uppercase text-zinc-600'>{title}</h3>
              <p className='mt-1'>
                RENTAL: RM{rental.toLocaleString()}/ft<sup>2</sup>
              </p>
              <p>
                SALE: RM{sale.toLocaleString()}/ft<sup>2</sup>
              </p>
              <a
                href={link as string}
                target='_blank'
                rel='noopener noreferrer'
                className='text-sm font-bold text-zinc-600 uppercase inline-block mt-2'
              >
                Google Maps
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
