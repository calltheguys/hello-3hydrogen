import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const SuspenseMaterial = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/SuspenseMaterial.client'));

export default function SuspenseMaterialRoute() {
  return (
    <main>
      <h1>SuspenseMaterial</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <SuspenseMaterial />
      </Suspense>
    </main>
  );
}
