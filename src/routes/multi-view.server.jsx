import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const MultiView = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/MultiView.client'));

export default function MultiViewRoute() {
  return (
    <main>
      <h1>MultiView</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <MultiView />
      </Suspense>
    </main>
  );
}
