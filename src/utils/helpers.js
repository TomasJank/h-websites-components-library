export const isBoolean = (val) => "boolean" === typeof val;

export const toTitleCase = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export function kebabToCamel(string, pascal = false) {
  let result = string?.replace(/(-\w)/g, () => matches[1]?.toUpperCase());

  if (pascal) {
    result = result?.charAt(0)?.toUpperCase() + result?.slice(1);
  }

  return result;
}

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
