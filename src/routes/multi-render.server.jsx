import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const MultiRender = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/MultiRender.client'));

export default function MultiRenderRoute() {
  return (
    <main>
      <h1>MultiRender</h1>
      <Link to="/">Back</Link>

      <Suspense fallback={<Loading />}>
        <MultiRender />
      </Suspense>
    </main>
  );
}
