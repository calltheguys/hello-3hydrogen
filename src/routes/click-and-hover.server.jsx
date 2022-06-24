import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const ClickAndHover = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/ClickAndHover.client'));

export default function ClickAndHoverRoute() {
  return (
    <main>
      <h1>Click And Hover</h1>
      <Link to="/">Back</Link>
      <Suspense fallback={<Loading />}>
        <ClickAndHover />
      </Suspense>
    </main>
  );
}
