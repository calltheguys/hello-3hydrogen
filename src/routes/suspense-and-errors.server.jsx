import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const SuspenseAndErrors = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/SuspenseAndErrors.client'));

export default function SuspenseAndErrorsRoute() {
  return (
    <main>
      <h1>SuspenseAndErrors</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <SuspenseAndErrors />
      </Suspense>
    </main>
  );
}
