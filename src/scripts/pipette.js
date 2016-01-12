var _ = require('underscore');
var s = require('underscore.string');

module.exports = {
    'sort': arg=>{
      if(_.isArray(arg)) {return arg.sort(s.naturalCmp);}
      else {return arg;}
    },
    'reverse': arg=>{
      if(_.isArray(arg)) {return _.map(arg,s.reverse);}
      else {return s.reverse(arg);}
    },
    'number': arg=>{
      if(_.isArray(arg)) {return _.map(arg,(str,idx)=>`${idx+1}. ${str}`);}
      else {return arg;}
    },
    'unique': arg=>{
      if(_.isArray(arg)) {return _.uniq(arg);}
      else {return arg;}
    },
    'split': arg=>{
      if(_.isArray(arg)) {return arg;}
      else {return s.lines(arg);}
    },
    'join': arg=>{
      if(_.isArray(arg)) {return arg.join('\n');}
      else {return arg;}
    }
};