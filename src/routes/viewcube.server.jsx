import {Link} from '@shopify/hydrogen';
import {ViewCube} from '../components/index';

export default function ViewCubeRoute() {
  return (
    <main>
      <h1>ViewCube</h1>
      <Link to="/">Back</Link>
      <ViewCube />
    </main>
  );
}
