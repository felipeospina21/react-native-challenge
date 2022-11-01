export async function customFetch<T>(request: RequestInfo): Promise<T> {
  const response = await fetch(request);
  return await response.json();
}
