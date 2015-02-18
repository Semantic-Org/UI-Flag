var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-flag',
  summary : 'Semantic UI - Flag (official): Single component release of flag',
  version : '1.9.0',
  git     : 'git://github.com/Semantic-Org/UI-Flag.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
