
Package.describe({
  name    : 'semantic:ui-flag',
  summary : 'Semantic UI - Flag: Single component release',
  version : '2.2.10',
  git     : 'git://github.com/Semantic-Org/UI-Flag.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'flag.css',
    'assets/images/flags.png'
  ], 'client');
});
