import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Inject = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Inject.client'));

export default function InjectRoute() {
  return (
    <main>
      <h1>Inject</h1>
      <Link to="/">Back</Link>
      <Inject />
      <Suspense fallback={<Loading />}>
        <Inject />
      </Suspense>
    </main>
  );
}
