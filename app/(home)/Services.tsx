import Image from 'next/image';
import Link from 'next/link';
import { services } from '../list';

export default function Services() {
  return (
    <section className='container flex gap-4 overflow-x-auto snap-x mt-8 mb-12'>
      {services.map(([title, img, id], i) => (
        <Link
          href={`/services#${id}`}
          className='flex flex-col items-center snap-center group'
          title={title}
          key={i}
        >
          <div className='relative w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-zinc-900 group-hover:ring group-hover:ring-orange-600'>
            <Image src={img} alt={title} fill sizes='10rem' />
          </div>
          <span className='text-sm font-bold text-zinc-600 mt-1 uppercase'>
            {title}
          </span>
        </Link>
      ))}
    </section>
  );
}
