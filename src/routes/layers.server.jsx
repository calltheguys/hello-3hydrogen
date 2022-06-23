import {Link} from '@shopify/hydrogen';
import {Layers} from '../components/index';

export default function LayersRoute() {
  return (
    <main>
      <h1>Layers</h1>
      <Link to="/">Back</Link>
      <Layers />
    </main>
  );
}
