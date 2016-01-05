require('babel-polyfill');

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


$(function(){
  $( ".column" ).sortable({
    connectWith: ".column",
    handle: ".portlet-header",
    cancel: ".portlet-toggle",
    placeholder: "portlet-placeholder ui-corner-all"
  });
  
  $( ".portlet" )
    .addClass( "ui-widget ui-widget-content ui-helper-clearfix ui-corner-all" )
    .find( ".portlet-header" )
      .addClass( "ui-widget-header ui-corner-all" )
      .prepend( "<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>");
  
  $( ".portlet-toggle" ).click(function() {
    var icon = $( this );
    icon.toggleClass( "ui-icon-minusthick ui-icon-plusthick" );
    icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
  });
});