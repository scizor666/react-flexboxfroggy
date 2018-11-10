import _ from 'lodash';

export const styleStringFromObject = style => _.reduce(style, (result, v, k) => `${result}${k}:${v};`, '');

export const styleObjectWithCamelizedKeys = style => _.mapKeys(style, (__, key) => _.camelCase(key));
