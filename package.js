Package.describe({
  name: 'qtheninja:viralreferral',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A viral referral program to help spreaad the word for early access.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/qtheninja/meteorViralReferral',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.1');
  api.use('ecmascript');
  api.mainModule('viralreferral.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('qtheninja:viralreferral');
  api.mainModule('viralreferral-tests.js');
});
