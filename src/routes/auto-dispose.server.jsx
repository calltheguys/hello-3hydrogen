import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const AutoDispose = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/AutoDispose.client'));

export default function AutoDisposeRoute() {
  return (
    <main>
      <h1>AutoDispose</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <AutoDispose />
      </Suspense>
    </main>
  );
}
