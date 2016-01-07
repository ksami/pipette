var fs = require('fs');
var jade = require('jade');
var pipette = require('./src/scripts/pipette.js');

// Compile Jade template
var render = jade.compileFile('./src/templates/index.jade', {
  pretty: true
});


// Render
fs.writeFile('./public/index.html', render({pipette}), (err)=>{
  if(err) throw err;
  console.log('Jade rendering done');
});