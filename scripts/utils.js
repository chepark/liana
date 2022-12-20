export function formatDate(xmlDate) {
  let createdAt = Date.parse(xmlDate);
  createdAt = new Date(createdAt);

  // year
  const yyyy = createdAt.getFullYear();
  // month
  const mm = createdAt.getMonth() + 1;
  // date
  const dd = createdAt.getDate();

  return `${dd}.${mm}.${yyyy}`;
}
