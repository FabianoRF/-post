export default function formatDate(date: Date): string {
  const formattedDate = String(date).split('T');

  return formattedDate[0];
}
