import {Link} from '@shopify/hydrogen';
import {ContextMenuOverride} from '../components/index';

export default function ContextMenuOverrideRoute() {
  return (
    <main>
      <h1>Context Menu Override</h1>
      <Link to="/">Back</Link>
      <ContextMenuOverride />
    </main>
  );
}
