import Image from 'next/image';
import { contacts } from '../list';

export default function Contacts() {
  return (
    <section className='container grid sm:grid-cols-2 md:grid-cols-3 gap-12 mt-8'>
      {contacts.map(([title, img, name, contact, link], i) => (
        <div key={i} className='flex flex-col items-center group' title={title}>
          <div className='w-40 h-40 rounded-full border-2 border-zinc-900 relative shrink-0 transition-colors group-hover:bg-orange-500 '>
            <Image src={img} fill sizes='10rem' alt={title} />
          </div>
          <h3 className='text-lg font-bold text-zinc-600 uppercase mt-4'>
            {title}
          </h3>
          <p className='mt-2'>{name}</p>
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-2 inline-block text-ellipsis overflow-hidden max-w-full'
          >
            {contact}
          </a>
        </div>
      ))}
    </section>
  );
}
