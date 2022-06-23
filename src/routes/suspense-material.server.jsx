import {Link} from '@shopify/hydrogen';
import {SuspenseMaterial} from '../components/index';

export default function SuspenseMaterialRoute() {
  return (
    <main>
      <h1>SuspenseMaterial</h1>
      <Link to="/">Back</Link>
      <SuspenseMaterial />
    </main>
  );
}
