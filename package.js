Package.describe({
  summary: "A simple helper for iron router to create route links.",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');
  api.addFiles('link-to.html');
  api.addFiles('link-to.js');
});

