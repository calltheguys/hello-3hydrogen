import {Link} from '@shopify/hydrogen';
import {AutoDispose} from '../components';

export default function AutoDisposeRoute() {
  return (
    <main>
      <h1>AutoDispose</h1>
      <Link to="/">Back</Link>
      <AutoDispose />
    </main>
  );
}
