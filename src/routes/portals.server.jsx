import {Link} from '@shopify/hydrogen';
import {Portals} from '../components/index';

export default function PortalsRoute() {
  return (
    <main>
      <h1>Portals</h1>
      <Link to="/">Back</Link>
      <Portals />
    </main>
  );
}
