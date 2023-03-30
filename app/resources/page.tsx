import Image from 'next/image';
import PageTitle from '../components/PageTitle';
import { resources } from '../list';

export default function Resources() {
  return (
    <main>
      <PageTitle title='Resources' />
      <section className='divide-y divide-zinc-600'>
        {resources.map(([title, img, description, link], i) => (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='block hover:bg-orange-100 transition-colors duration-300 group'
            title={title}
            key={i}
          >
            <div className='container py-8 flex flex-col sm:flex-row sm:group-even:flex-row-reverse gap-6 items-center text-center sm:text-left'>
              <div className='w-48 h-48 bg-white rounded-full overflow-hidden relative shrink-0'>
                <Image src={img} fill sizes='12rem' alt={title} />
              </div>
              <div>
                <h3 className='uppercase text-2xl'>{title}</h3>
                <p className='md:text-lg mt-2'>{description}</p>
              </div>
            </div>
          </a>
        ))}
      </section>
    </main>
  );
}
