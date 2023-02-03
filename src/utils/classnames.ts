export const classnames = (...args: Array<string | Record<string, any>>): string => {
  const result: Array<string> = [];

  [...args].forEach((value) => {
    if (typeof value === "string") result.push(value);

    if (typeof value === "object") {
      Object.entries(value).forEach(([key, value]) => {
        if (!Boolean(value)) return;

        result.push(key);
      });
    }
  });

  return result.join(" ");
};
