import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const Pointcloud = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/Pointcloud.client'));

export default function PointcloudRoute() {
  return (
    <main>
      <h1>Pointcloud</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <Pointcloud />
      </Suspense>
    </main>
  );
}
