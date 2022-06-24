import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Gestures = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Gestures.client'));

export default function GesturesRoute() {
  return (
    <main>
      <h1>Gestures</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Gestures />
      </Suspense>
    </main>
  );
}
