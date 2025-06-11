// list of redirects based on the source parameter
const sourceRedirects: Record<string, string> = {
  windows_designer: '/docs/Desktop_UIs/Exploring_USoft_Windows_Designer',
  // ...add more
};

export function getRedirectUrl(params: URLSearchParams): string | null {
  const source = params.get('source');
  if (source && sourceRedirects[source]) {
    return sourceRedirects[source];
  }
  return null;
}