var _ = require('underscore');
var rev = require('underscore.string/reverse');


var pipette = {
    'sort': arr=>arr.sort(),
    'reverse': arr=>_.map(arr,rev),
    'number': arr=>_.map(arr,(str,idx)=>`${idx+1}. ${str}`),
    'unique': arr=>_.uniq(arr)
};

function run(){
    var text = _.map(document.getElementById('inputtext').value.split('\n'), str=>str.trim());
    var command = _.map(document.getElementById('commandtext').value.split('|'), str=>str.trim());

    var output = _.reduce(command, (arr, cmd)=>pipette[cmd](arr), text);
    var outputtext = _.reduce(output, (memo, str)=>`${memo}\n${str}`);

    document.getElementById('outputtext').value = outputtext;
}


document.getElementById('clickme').onclick = run;