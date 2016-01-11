require('babel-polyfill');

var _ = require('underscore');
var rev = require('underscore.string/reverse');
var pipette = require('./pipette');

//TODO: get sortable order of functions
function run(){
    var text = _.map(document.getElementById('inputtext').value.split('\n'), str=>str.trim());
    var command = _.map(document.getElementById('commandtext').value.split('|'), str=>str.trim());

    var output = _.reduce(command, (arr, cmd)=>pipette[cmd](arr), text);
    var outputtext = _.reduce(output, (memo, str)=>`${memo}\n${str}`);

    document.getElementById('outputtext').value = outputtext;
}


document.getElementById('clickme').onclick = run;


$(function(){
  $('#chain').sortable({
    // connectWith:'.column",
    handle: '.portlet-header',
    cursor: 'move',
    cancel: '.portlet-toggle',
    placeholder: 'portlet-placeholder ui-corner-all',
    items: '> .portlet:not(#endChain)',
    receive: function(ev, ui){
      $item = $(ui.helper[0]);
      $item.toggleClass('ui-draggable');
      $item.removeAttr('style');
      $item.find('.portlet-toggle').click(function() {
        var icon = $( this );
        icon.toggleClass('ui-icon-minusthick ui-icon-plusthick');
        icon.closest('.portlet').find('.portlet-content').toggle();
      });
    }
  });
  
  $('#sidebar > .portlet').draggable({
    connectToSortable: '#chain',
    helper: 'clone',
    handle: '.portlet-header',
    cursor: 'move',
    revert: 'invalid'
  });


  $('.portlet')
    .addClass('ui-widget ui-widget-content ui-helper-clearfix ui-corner-all')
    .find('.portlet-header')
      .addClass('ui-widget-header ui-corner-all')
      .prepend('<span class="ui-icon ui-icon-minusthick portlet-toggle"></span>');

  $('#sidebar .portlet-content').toggle();
  $('#sidebar .portlet-next-arrow').toggle();
  $('#sidebar .portlet-toggle').toggleClass('ui-icon-minusthick ui-icon-plusthick');
  $('.portlet').disableSelection();

  
  $('.portlet-toggle').click(function() {
    var icon = $( this );
    icon.toggleClass('ui-icon-minusthick ui-icon-plusthick');
    icon.closest('.portlet').find('.portlet-content').toggle();
  });
});