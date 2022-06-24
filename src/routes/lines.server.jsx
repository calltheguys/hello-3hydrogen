import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Lines = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Lines.client'));

export default function LinesRoute() {
  return (
    <main>
      <h1>Lines</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Lines />
      </Suspense>
    </main>
  );
}
