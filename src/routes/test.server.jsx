import {Link} from '@shopify/hydrogen';
import {Test} from '../components/index';

export default function TestRoute() {
  return (
    <main>
      <h1>Test</h1>
      <Link to="/">Back</Link>
      <Test />
    </main>
  );
}
