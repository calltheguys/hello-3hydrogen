import {Link} from '@shopify/hydrogen';
import {MultiRender} from '../components/index';

export default function MultiRenderRoute() {
  return (
    <main>
      <h1>MultiRender</h1>
      <Link to="/">Back</Link>
      <MultiRender />
    </main>
  );
}
