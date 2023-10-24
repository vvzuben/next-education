import NotFound from '@components/PageNotFound'
import { WP_Query } from './_wordpress/WPClient';

export default async function PageNotFound() {
  const [options] = await WP_Query<any>('options/all');
  return <NotFound {...options.page_not_found} />
}
