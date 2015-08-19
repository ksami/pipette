var _ = require('underscore');
var rev = require('underscore.string/reverse');

var sort = function(arr){return arr.sort();};
var reverse = function(arr){return _.map(arr, rev);};
var number = function(arr){return _.map(arr, function(str, idx){return idx+'. '+str;});};

var funcArr = [
    sort,
    reverse,
    number
];

function run(){
    var text = document.getElementById('inputtext').value;

    var func1 = funcArr[document.getElementById('func1').selectedIndex];
    var func2 = funcArr[document.getElementById('func2').selectedIndex];
    var func3 = funcArr[document.getElementById('func3').selectedIndex];
    console.log(func1);

    var textArr = text.split('\n');
    var output = _.reduce(func3(func2(func1(textArr))), function(memo, str){return memo+'\n'+str;});


    document.getElementById('outputtext').value = output;
}

document.getElementById('clickme').onclick = run;