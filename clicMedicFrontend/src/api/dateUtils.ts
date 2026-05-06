export function formatDateForAPI(dateString: string): string {
  return new Date(dateString).toISOString().substring(0, 19);
}
