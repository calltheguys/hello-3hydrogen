import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Animation = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Animation.client.jsx'));

export default function AnimationRoute() {
  return (
    <main>
      <h1>Animation</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Animation />}>
        <Animation />
      </Suspense>
    </main>
  );
}
