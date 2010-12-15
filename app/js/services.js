angular.service('phoneCatApp', function($route, $location, $resource, $window) {
  $route.when('/favorites', {template:'partials/favorites.html', controller:FavoritesCtrl});
  $route.when('/phones/', {template:'partials/catalog.html', controller:CatalogCtrl});
  $route.when('/phones/:phoneId', {template:'partials/detail.html', controller:DetailCtrl});
  $route.onChange(function() {
    if ($location.hash === '') {
      $location.updateHash('/phones/');
      this.$eval();
    } else {
      $route.current.scope.params = $route.current.params;
      $window.scrollTo(0,0);
    }
  });

  this.Phone = $resource('/app/phones/:phoneId.json');

}, {$inject:['$route', '$location', '$resource', '$window'], $creation: 'eager'});


angular.service('favorites', function($cookieStore){
  return {
    has: function(phoneId){
      return !!($cookieStore.get('favorites') || {})[phoneId];
    },
    add:function(phoneId) {
      var favorites = $cookieStore.get('favorites') || {};
      favorites[phoneId] = true;
      $cookieStore.put('favorites', favorites);
    },
    remove:function(phoneId) {
      var favorites = $cookieStore.get('favorites') || {};
      delete favorites[phoneId];
      $cookieStore.put('favorites', favorites);
    },
    list: function() {
      var list = [];
      angular.foreach($cookieStore.get('favorites') || {}, function(value, key){
        list.push(key);
      });
      list.sort();
      return list;
    }
  };
}, {$inject:['$cookieStore']});