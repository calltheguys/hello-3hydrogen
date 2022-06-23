import {Link} from '@shopify/hydrogen';
import {StopPropagation} from '../components/index';

export default function StopPropagationRoute() {
  return (
    <main>
      <h1>StopPropagation</h1>
      <Link to="/">Back</Link>
      <StopPropagation />
    </main>
  );
}
