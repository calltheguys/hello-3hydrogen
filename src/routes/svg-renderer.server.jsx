import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const SVGRenderer = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/SVGRenderer.client'));

export default function SVGRendererRoute() {
  return (
    <main>
      <h1>SVGRenderer</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <SVGRenderer />
      </Suspense>
    </main>
  );
}
