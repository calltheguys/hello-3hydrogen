import {Link} from '@shopify/hydrogen';
import {Selection} from '../components/index';

export default function SelectionRoute() {
  return (
    <main>
      <h1>Selection</h1>
      <Link to="/">Back</Link>
      <Selection />
    </main>
  );
}
