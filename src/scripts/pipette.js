var _ = require('underscore');
var rev = require('underscore.string/reverse');

module.exports = {
    'sort': arr=>arr.sort(),
    'reverse': arr=>_.map(arr,rev),
    'number': arr=>_.map(arr,(str,idx)=>`${idx+1}. ${str}`),
    'unique': arr=>_.uniq(arr)
};