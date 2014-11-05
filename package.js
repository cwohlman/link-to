Package.describe({
  summary: "A simple helper for iron router to create route links.",
  version: "1.0.0",
  git: "https://github.com/cwohlman/link-to.git",
  name: "cwohlman:link-to"
});

Package.on_use(function(api) {
  api.use('ui');
  api.use('templating');

  api.add_files('link_to.html', ['client']);
  api.add_files('link_to.js', ['client']);
});
