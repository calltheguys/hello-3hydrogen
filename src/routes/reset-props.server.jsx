import {Link} from '@shopify/hydrogen';
import {lazy, Suspense} from 'react';
import {Loading} from '../components/index.server';

const ResetProps = import.meta.env.SSR
  ? Loading
  : lazy(() => import('../components/demos/ResetProps.client'));

export default function ResetPropsRoute() {
  return (
    <main>
      <h1>ResetProps</h1>
      <Link to="/">Back</Link>

      <Suspense fallback={<Loading />}>
        <ResetProps />
      </Suspense>
    </main>
  );
}
