import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Selection = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Selection.client'));

export default function SelectionRoute() {
  return (
    <main>
      <h1>Selection</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Selection />
      </Suspense>
    </main>
  );
}
