import Image from 'next/image';
import PageTitle from '../components/PageTitle';

export default function About() {
  return (
    <main>
      <PageTitle title='About' />
      <section className='container mb-12 mt-8'>
        <div className='w-64 aspect-square max-w-[60%] rounded-full [shape-outside:circle(50%)] overflow-hidden mr-6 float-left relative'>
          <Image
            src='/img/field.jpg'
            fill
            sizes='16rem'
            alt='Selangor Turf Club'
          />
        </div>
        <div className='space-y-8'>
          <p>
            <span className='text-xl font-bold'>Wisma Central</span> was
            constructed by Garden City Development Bhd in the 1980s. In 1987,
            Wisma Central became the first commercial property to receive strata
            title on freehold land in Kuala Lumpur.
          </p>
          <p>
            Wisma Central is a 11-storey office and retail building located at
            Jalan Ampang, 2 buildings away from KLCC, Petronas Twin Tower. It
            was once famous for its "Rose Chan" night club.
          </p>
          <p>
            From the 80s through the 90s, many rich and famous can be spotted
            sitting on the balcony of the Wisma Central Penthouse, with cool
            beer on one hand and binoculars on the other, watching horse racing
            (picture: Selangor Turf Club, circa 1982) on weekends.
          </p>
          <p>
            From humble origins, Wisma Central is transforming into a rosey,
            vibrant and artistic building with tenants offering a multitude of
            services from F&B to finance. Today, this place is bustling with
            crowds from all walks of life, especially at lunch time on weekdays.
          </p>
        </div>
      </section>
    </main>
  );
}
