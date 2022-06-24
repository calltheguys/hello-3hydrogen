import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Gltf = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Gltf.client'));

export default function GltfRoute() {
  return (
    <main>
      <h1>Gltf</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Gltf />
      </Suspense>
    </main>
  );
}
