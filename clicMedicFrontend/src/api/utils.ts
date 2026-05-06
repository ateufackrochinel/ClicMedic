const baseurl = import.meta.env.VITE_BACKEND_BASE_URL;

function buildHeaders(token?: string): HeadersInit {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return headers;
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const errorBody = await response.json().catch(() => null);
    const message =
      (errorBody as { message?: string } | null)?.message ??
      `HTTP error ${response.status}`;
    throw new Error(message);
  }
  return (await response.json()) as T;
}

async function get<T>(url: string, { token }: { token?: string }): Promise<T> {
  const response = await fetch(`${baseurl}${url}`, {
    method: 'GET',
    headers: buildHeaders(token),
  });
  return handleResponse<T>(response);
}

async function post<T, B = unknown>(
  url: string,
  { body, token }: { body: B; token?: string }
): Promise<T> {
  const response = await fetch(`${baseurl}${url}`, {
    method: 'POST',
    headers: buildHeaders(token),
    body: JSON.stringify(body),
  });
  return handleResponse<T>(response);
}

export { get, post };

export function isValidToken(token: unknown): token is string {
  return typeof token === 'string' && token.length > 0 && token !== 'undefined' && token !== 'null';
}
