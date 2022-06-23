import {Link} from '@shopify/hydrogen';
import {ResetProps} from '../components/index';

export default function ResetPropsRoute() {
  return (
    <main>
      <h1>ResetProps</h1>
      <Link to="/">Back</Link>
      <ResetProps />
    </main>
  );
}
