const baseurl = import.meta.env.VITE_BACKEND_BASE_URL;

async function get<T>(url: string, { token }: { token?: string }): Promise<T> {
  const response = await fetch(`${baseurl}${url}`, {
    method: 'GET',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return (await response.json()) as Promise<T>;
}

async function post<T>(
  url: string,
  { body, token }: { body: any; token?: string }
): Promise<T> {
  const response = await fetch(`${baseurl}${url}`, {
    method: 'POST',
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return (await response.json()) as Promise<T>;
}

export { get, post };
