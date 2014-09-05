Template.linkTo.helpers({
  href: function () {
    var data = this;
    var params = data.params || data;
    var route = data.route || '/';

    return Router.path(route, params, {
      query: data.query,
      hash: data.hash
    });
  },

  attrs: function () {
    var data = this;
    return _.pick(data, ['class', 'id', 'title']);
  }
});
