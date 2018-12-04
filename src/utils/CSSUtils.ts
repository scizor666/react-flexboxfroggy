import _ from 'lodash';

export const styleStringFromObject = (style: object) => _.reduce(style, (result, v, k) => `${result}${k}:${v};`, '');

export const styleObjectWithCamelizedKeys = (style: object) => _.mapKeys(style, (__, key) => _.camelCase(key));
