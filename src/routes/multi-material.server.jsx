import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const MultiMaterial = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/MultiMaterial.client'));

export default function MultiMaterialRoute() {
  return (
    <main>
      <h1>MultiMaterial</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <MultiMaterial />
      </Suspense>
    </main>
  );
}
