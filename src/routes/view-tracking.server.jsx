import {Link} from '@shopify/hydrogen';
import {ViewTracking} from '../components/index';

export default function ViewTrackingRoute() {
  return (
    <main>
      <h1>ViewTracking</h1>
      <Link to="/">Back</Link>
      <ViewTracking />
    </main>
  );
}
