import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const ViewTracking = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/ViewTracking.client'));

export default function ViewTrackingRoute() {
  return (
    <main>
      <h1>ViewTracking</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <ViewTracking />
      </Suspense>
    </main>
  );
}
