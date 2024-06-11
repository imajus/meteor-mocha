Package.describe({
  name: 'meteortesting:mocha',
  summary: 'Run Meteor package or app tests with Mocha',
  git: 'https://github.com/meteortesting/meteor-mocha.git',
  documentation: '../README.md',
  version: '3.1.0-rc.0',
  testOnly: true,
});

Package.onUse(function onUse(api) {
  api.versionsFrom(['2.8.0', '3.0-rc.2'])
  api.use([
    'meteortesting:mocha-core@8.3.1-rc300.0',
    'ecmascript'
  ]);

  api.use([
    'meteortesting:browser-tests@1.6.0-rc300.0',
    'http@1.0.0 || 2.0.0'
  ], 'server');
  api.use('browser-policy', 'server', { weak: true });
  api.use('lmieulet:meteor-coverage@1.1.4 || 2.0.1 || 3.0.0 || 4.1.0', 'client', { weak: true });

  api.mainModule('client.js', 'client');
  api.mainModule('server.js', 'server');
});
