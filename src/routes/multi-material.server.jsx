import {Link} from '@shopify/hydrogen';
import {MultiMaterial} from '../components';

export default function MultiMaterialRoute() {
  return (
    <main>
      <h1>MultiMaterial</h1>
      <Link to="/">Back</Link>
      <MultiMaterial />
    </main>
  );
}
