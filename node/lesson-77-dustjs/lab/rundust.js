'use strict';

var fs = require('fs');
var path = require('path');
var dust = require('dustjs-linkedin');
require('dustjs-helpers');

var myName = path.basename(process.argv[1]);

if (process.argv.length < 3) {
  console.log('Usage: node ' + myName + ' <filename>');
  process.exit(1);
}
var templateFilename = process.argv[2];
var outputFilename = path.basename(templateFilename, path.extname(templateFilename)) + '.html';

var templateString;
try {
  templateString = fs.readFileSync(templateFilename).toString();
} catch(err) {
  console.log('Error opening file: ' + templateFilename);
  console.log(err.message);
  process.exit(1);
}

var templateName = "app";
var template = dust.compile(templateString, templateName);
dust.loadSource(template);

// Load the model up with a require().
var model = require("./model.js");

// Render the model using our template.
dust.render(templateName, model, function handler(err, out) {
  if (err) {
    console.error(err.message);
    return;
  }
  fs.writeFileSync(outputFilename, out);
});
