/**
 * It changes the date string into "dd.mm.yyyy" format.
 *
 * @param {string} xmlDate dateString fetched from the news RSS Feed
 * @returns {string}
 */
export function formatDate(xmlDate) {
  let createdAt = Date.parse(xmlDate);
  createdAt = new Date(createdAt);

  const yyyy = createdAt.getFullYear();
  const mm = createdAt.getMonth() + 1;
  const dd = createdAt.getDate();

  return `${dd}.${mm}.${yyyy}`;
}
