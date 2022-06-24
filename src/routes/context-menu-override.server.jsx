import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const ContextMenuOverride = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/ContextMenuOverride.client'));

export default function ContextMenuOverrideRoute() {
  return (
    <main>
      <h1>Context Menu Override</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <ContextMenuOverride />
      </Suspense>
    </main>
  );
}
