import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const StopPropagation = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/StopPropagation.client'));

export default function StopPropagationRoute() {
  return (
    <main>
      <h1>StopPropagation</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <StopPropagation />
      </Suspense>
    </main>
  );
}
