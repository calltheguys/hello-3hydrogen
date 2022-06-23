import {Link} from '@shopify/hydrogen';
import {SuspenseAndErrors} from '../components/index';

export default function SuspenseAndErrorsRoute() {
  return (
    <main>
      <h1>SuspenseAndErrors</h1>
      <Link to="/">Back</Link>
      <SuspenseAndErrors />
    </main>
  );
}
