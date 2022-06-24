import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Layers = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Layers.client'));

export default function LayersRoute() {
  return (
    <main>
      <h1>Layers</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Layers />
      </Suspense>
    </main>
  );
}
