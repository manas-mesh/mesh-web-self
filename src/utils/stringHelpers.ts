// The function converts string to title case: This Is Title Case

export const toTitleCase = (str: string) => {
  const newStr = str
    .split(' ')
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(' ');
  return newStr;
};
