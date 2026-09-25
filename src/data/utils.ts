function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    timeZone: "UTC"
  };

  return new Date(date).toLocaleDateString("en-US", options);
};

function limitText(string: String): String {
  const characterLimit = 100;

  if (string.length > characterLimit) {
    return string.substring(0, (characterLimit - 3)).trimEnd() + "...";
  }

  return string;
};

export {
  formatDate,
  limitText,
};
