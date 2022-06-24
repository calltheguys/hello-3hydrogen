import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Portals = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Portals.client'));

export default function PortalsRoute() {
  return (
    <main>
      <h1>Portals</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Portals />
      </Suspense>
    </main>
  );
}
