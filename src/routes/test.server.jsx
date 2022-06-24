import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Test = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Test.client'));

export default function TestRoute() {
  return (
    <main>
      <h1>Test</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Test />
      </Suspense>
    </main>
  );
}
