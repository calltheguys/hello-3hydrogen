import {Link} from '@shopify/hydrogen';
import {Reparenting} from '../components/index';

export default function ReparentingRoute() {
  return (
    <main>
      <h1>Reparenting</h1>
      <Link to="/">Back</Link>
      <Reparenting />
    </main>
  );
}
