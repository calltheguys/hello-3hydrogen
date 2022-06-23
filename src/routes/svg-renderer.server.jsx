import {Link} from '@shopify/hydrogen';
import {SVGRenderer} from '../components/index';

export default function SVGRendererRoute() {
  return (
    <main>
      <h1>SVGRenderer</h1>
      <Link to="/">Back</Link>
      <SVGRenderer />
    </main>
  );
}
