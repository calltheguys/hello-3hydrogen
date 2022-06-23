import {Link} from '@shopify/hydrogen';
import {Pointcloud} from '../components/index';

export default function PointcloudRoute() {
  return (
    <main>
      <h1>Pointcloud</h1>
      <Link to="/">Back</Link>
      <Pointcloud />
    </main>
  );
}
