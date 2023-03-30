import Image from 'next/image';
import PageTitle from '../components/PageTitle';
import { services } from '../list';

export default function Services() {
  return (
    <main>
      <PageTitle title='Services' />
      <section className='container grid sm:grid-cols-2 gap-12 mb-12 mt-8'>
        {services.map(
          ([title, img, id, description, lvl, website, whatsapp], i) => (
            <div
              id={id}
              key={i}
              className='flex items-center gap-4 group scroll-mt-20'
              title={title}
            >
              <div className='w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-zinc-900 relative shrink-0 transition-colors group-hover:bg-orange-500'>
                <Image src={img} fill sizes='10rem' alt={title} />
              </div>
              <div>
                <h3 className='font-bold uppercase'>{title}</h3>
                <p className='mt-1'>{description}</p>
                <p className='text-sm font-bold text-zinc-100 bg-zinc-900 px-2 py-1 inline-block mt-3'>
                  LVL {lvl}
                </p>
                {website && whatsapp && (
                  <div className='flex items-center gap-2 mt-3'>
                    <a
                      href={website}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='Website'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM6.262 6.072a8.25 8.25 0 1010.562-.766 4.5 4.5 0 01-1.318 1.357L14.25 7.5l.165.33a.809.809 0 01-1.086 1.085l-.604-.302a1.125 1.125 0 00-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 01-2.288 4.04l-.723.724a1.125 1.125 0 01-1.298.21l-.153-.076a1.125 1.125 0 01-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 01-.21-1.298L9.75 12l-1.64-1.64a6 6 0 01-1.676-3.257l-.172-1.03z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                    <a
                      href={whatsapp}
                      target='_blank'
                      rel='noopener noreferrer'
                      title='WhatsApp'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='w-6 h-6'
                      >
                        <path
                          fillRule='evenodd'
                          d='M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          )
        )}
      </section>
    </main>
  );
}
