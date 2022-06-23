import {Link} from '@shopify/hydrogen';
import {Lines} from '../components';

export default function LinesRoute() {
  return (
    <main>
      <h1>Lines</h1>
      <Link to="/">Back</Link>
      <Lines />
    </main>
  );
}
