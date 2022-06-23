import {Link} from '@shopify/hydrogen';
import {ClickAndHover} from '../components/index';

export default function ClickAndHoverRoute() {
  return (
    <main>
      <h1>Click And Hover</h1>
      <Link to="/">Back</Link>
      <ClickAndHover />
    </main>
  );
}
