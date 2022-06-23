import {Link} from '@shopify/hydrogen';
import {Gltf} from '../components/index';

export default function GltfRoute() {
  return (
    <main>
      <h1>Gltf</h1>
      <Link to="/">Back</Link>
      <Gltf />
    </main>
  );
}
