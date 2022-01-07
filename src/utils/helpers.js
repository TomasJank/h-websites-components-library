export const isBoolean = (val) => "boolean" === typeof val;

export const toTitleCase = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1);

export const kebabToCamel = (string) =>
  string.replace(/-./g, (x) => x[1].toUpperCase());

export const camelToDash = (str) =>
  str
    .replace(/(^[A-Z])/, ([first]) => first.toLowerCase())
    .replace(/([A-Z])/g, ([letter]) => `-${letter.toLowerCase()}`);

export const getClasses = (
  element,
  props,
  delimiter = "--",
  prepend = "",
  camelToDashKey = false
) => {
  return Object.entries(props).map(([key, value]) => {
    if (camelToDashKey) key = camelToDash(key);
    if (!value || !isBoolean(value)) return;
    return `${element}${delimiter}${prepend ? prepend : ""}${camelToDash(key)}`;
  });
};
