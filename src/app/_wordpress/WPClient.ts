const WP_API_ENDPOINT = process.env.WORDPRESS_ENDPOINT + "/wp-json/wp/v2";
const CACHE = undefined

export async function WP_Query<T>(path: string): Promise<[T, number, number]> {
  const res = await fetch(WP_API_ENDPOINT + "/" + path, {
    cache: CACHE
  });

  const headers = res.headers;
  const total = headers.get("x-wp-total") ? Number(headers.get("x-wp-total")) : 0
  const totalPages = headers.get("x-wp-totalpages") ? Number(headers.get("x-wp-totalpages")) : 0
  return [await res.json(), total, totalPages]
}

export async function WP_Query_Yarpp<T>(path: string): Promise<[T, number, number]> {
  const res = await fetch(process.env.WORDPRESS_ENDPOINT + "/wp-json/yarpp/v1/related/" + path, {
    cache: CACHE
  });

  const headers = res.headers;
  const total = headers.get("x-wp-total") ? Number(headers.get("x-wp-total")) : 0
  const totalPages = headers.get("x-wp-totalpages") ? Number(headers.get("x-wp-totalpages")) : 0
  return [await res.json(), total, totalPages]
}
