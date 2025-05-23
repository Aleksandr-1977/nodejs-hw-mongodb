const parseType = (contactType) => {
  if (!contactType) return undefined;
  const isString = typeof contactType === 'string';
  if (!isString) return undefined;
  const isType = (type) => ['work', 'home', 'personal'].includes(type);
  return isType(contactType.toLowerCase())
    ? contactType.toLowerCase()
    : undefined;
};

const parseBoolean = (value) => {
  if (value === undefined || value === null) return undefined;

  if (typeof value === 'boolean') return value;

  if (typeof value === 'string') {
    if (value.toLowerCase() === 'true') return true;
    if (value.toLowerCase() === 'false') return false;
    if (value === '1') return true;
    if (value === '0') return false;
  }

  if (typeof value === 'number') {
    return value !== 0;
  }
  return undefined;
};

export const parseFilterParams = (query) => {
  const { isFavourite, contactType } = query;
  const parsedType = parseType(contactType);
  const parsedFav = parseBoolean(isFavourite);

  const filter = {};

  if (parsedType !== undefined) {
    filter.contactType = parsedType;
  }

  if (parsedFav !== undefined) {
    filter.isFavourite = parsedFav;
  }

  return filter;
};
