export async function postJson(url: string, body: object) {
  return await fetch(url, {
    method: 'POST',
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

