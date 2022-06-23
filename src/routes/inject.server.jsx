import {Link} from '@shopify/hydrogen';
import {Inject} from '../components/index';

export default function InjectRoute() {
  return (
    <main>
      <h1>Inject</h1>
      <Link to="/">Back</Link>
      <Inject />
    </main>
  );
}
