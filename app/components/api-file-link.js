export default Ember.Component.extend({
  tagName: 'span',
  linkClass: 'api-file-link',

  title: function() {
    var file = this.get('model.file'),
        line = this.get('model.line'),
        title;
    if (file) title = file.replace(/^\.\.\//,'');
    if (line) title += ":" + line;
    return title;
  }.property('model.file', 'model.line'),

  href: function() {
    var repoUrl = this.get('model.project.repoUrl'),
        sha     = this.get('model.project.sha'),
        file    = this.get('model.file'),
        line    = this.get('model.line');

    if (file) file = file.replace(/^\.\.\//,'');
    var href = repoUrl + '/tree/' + sha + '/' + file;
    if (line) href += "#L" + line;
    return href;
  }.property('model.project.repoUrl', 'model.project.sha', 'model.file', 'model.line')
});
