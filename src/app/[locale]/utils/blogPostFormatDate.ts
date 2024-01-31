export const blogPostFormatDate = (date: string) => {
  const objectDate = new Date(date);
  const year = objectDate.getFullYear();
  const monthString = objectDate.toLocaleString("en-us", { month: "short" });
  const day = objectDate.getDate();
  return `${year}, ${day} ${monthString}`;
};
