import PageTitle from '../components/PageTitle';
import Prices from './Prices';
import Contact from './Contact';

export default function Property() {
  return (
    <main>
      <PageTitle title='Property' />
      <Prices />
      <Contact />
    </main>
  );
}
