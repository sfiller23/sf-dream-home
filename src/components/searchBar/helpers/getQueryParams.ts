export function getQueryParams(
  url: string
): Record<string, string | "rent" | "buy"> {
  const queryParams: Record<string, string> = {};
  // Create a URL object to easily access search params
  const urlObj = new URL(url);
  // Use URLSearchParams to iterate over all query parameters
  urlObj.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });
  return queryParams;
}
