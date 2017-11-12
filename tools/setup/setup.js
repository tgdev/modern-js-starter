/*
 * Taken from rect-slingshot by @coreyhouse
 * https://github.com/coryhouse/react-slingshot/tree/master/tools/setup
 */

/* eslint-disable no-var */
var rimraf = require('rimraf');
var chalk = require('chalk');
var replace = require('replace');
var prompt = require('prompt');
var prompts = require('./setupPrompts');

var chalkSuccess = chalk.green;
var chalkProcessing = chalk.blue;
var chalkWarn = chalk.red;

/* eslint-disable no-console */
console.log(chalkSuccess('Dependencies installed.'));

prompt.start();

console.log(chalkWarn('WARNING:  Preparing to delete local git repository...'));
prompt.get([{name: 'deleteGit', description: 'Delete the git repository?  [Y/n]'}], function(err, result) {

  // eslint-disable-next-line no-undef
  if (err) { process.exit(1); }

  var deleteGit = result.deleteGit.toUpperCase();

  function updatePackage() {
    console.log(chalkProcessing('Updating package.json settings:'));

    prompt.get(prompts, function(err, result) {
      // parse user responses
      // default values provided for fields that will cause npm to complain if left empty
      const responses = [
        {
          key: 'name',
          value: result.projectName || 'new-project'
        },
        {
          key: 'version',
          value: result.version || '0.1.0'
        },
        {
          key: 'author',
          value: result.author
        },
        {
          key: 'license',
          value: result.license || 'MIT'
        },
        {
          key: 'description',
          value: result.description
        },
        // simply use an empty string here to clear the existing repo URL and homepage
        {
          key: 'url',
          value: ''
        },
        {
          key: 'homepage',
          value: ''
        }
      ];

      // update package.json with the user's values
      responses.forEach(res => {
        replace({
          regex: `("${res.key}"): "(.*?)"`,
          replacement: `$1: "${res.value}"`,
          paths: ['package.json'],
          recursive: false,
          silent: true
        });
      });

      // reset package.json 'keywords' field to empty state
      replace({
        regex: /"keywords": \[[\s\S]+?\]/,
        replacement: `"keywords": []`, // eslint-disable-line quotes
        paths: ['package.json'],
        recursive: false,
        silent: true
      });

      // remove setup script from package.json
      replace({
        regex: /\s*"setup":.*,/,
        replacement: '',
        paths: ['package.json'],
        recursive: false,
        silent: true
      });

      // remove all setup scripts from the 'tools' folder
      console.log(chalkSuccess('\nSetup complete! Cleaning up...\n'));
      rimraf('./tools/setup', error => {
        if (error) throw new Error(error);
      });
    });

  }

  if (deleteGit.match(/^N.*/)) {
    updatePackage();
  }
  else {
    // remove the original git repository
    rimraf('.git', error => {
      if (error) throw new Error(error);
      console.log(chalkSuccess('Original Git repository removed.\n'));
      updatePackage();
    });
  }
});
/* eslint-enable no-console */
/* eslint-enable no-var */
