require('app-module-path').addPath(__dirname + '/dist');

require('worker/' + process.argv[2]);
