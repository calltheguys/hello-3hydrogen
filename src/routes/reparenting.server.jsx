import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Reparenting = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Reparenting.client'));

export default function ReparentingRoute() {
  return (
    <main>
      <h1>Reparenting</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Reparenting />
      </Suspense>
    </main>
  );
}
