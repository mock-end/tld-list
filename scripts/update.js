#!/usr/bin/env node

var punycode = require('punycode');
var request  = require('superagent');
var path     = require('path');
var fs       = require('fs');

var url = process.argv[2] || 'http://data.iana.org/TLD/tlds-alpha-by-domain.txt';

request
  .get(url)
  .end(function (err, res) {
    if (err) {
      throw err;
    }

    var content = 'module.exports = [';
    var count   = 0;

    res
      .text
      .split('\n')
      .forEach(function (line) {
        line = line.trim().toLowerCase();

        if (0 === line.length) {
          return;
        }

        // comment
        if ('#' === line[0]) {
          return;
        }

        // unicode TLDs (http://stackoverflow.com/a/9724529/376773)
        if ('xn--' === line.substring(0, 4)) {
          var decoded = punycode.decode(line.substring(4));
          content += '\n  "' + decoded + '", // ' + line;
        } else {
          content += '\n  "' + line + '",';
        }
        count++;
      });

    // remove trailing `,` char
    content = content.substring(0, content.length - 1);

    content += '\n];\n';

    fs.writeFile(path.join(__dirname, '../index.js'), content, function (err) {
      if (err) {
        throw err;
      }
      console.log('saved %d TLDs', count);
    });
  });
