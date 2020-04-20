const fs = require('fs');
const mkdirp = require('mkdirp');

// return value is the first directory created
const made = mkdirp('/tmp/foo/bar/baz')
console.log(`made directories, starting with ${made}`)