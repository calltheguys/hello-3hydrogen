import {Link} from '@shopify/hydrogen';
import {MultiView} from '../components/index';

export default function MultiViewRoute() {
  return (
    <main>
      <h1>MultiView</h1>
      <Link to="/">Back</Link>
      <MultiView />
    </main>
  );
}
