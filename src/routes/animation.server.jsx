import {Link} from '@shopify/hydrogen';
import {Animation} from '../components';

export default function AnimationRoute() {
  return (
    <main>
      <h1>Animation</h1>
      <Link to="/">Back</Link>
      <Animation />
    </main>
  );
}
