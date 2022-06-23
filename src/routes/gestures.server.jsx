import {Link} from '@shopify/hydrogen';
import {Gestures} from '../components/index';

export default function GesturesRoute() {
  return (
    <main>
      <h1>Gestures</h1>
      <Link to="/">Back</Link>
      <Gestures />
    </main>
  );
}
