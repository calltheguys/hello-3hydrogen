import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const ViewCube = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/ViewCube.client'));

export default function ViewCubeRoute() {
  return (
    <main>
      <h1>ViewCube</h1>
      <Link to="/">Back</Link>

      <Suspense fallback={<Loading />}>
        <ViewCube />
      </Suspense>
    </main>
  );
}
