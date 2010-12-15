describe('favorites', function(){
  var scope, favorites, $cookieStore;

  beforeEach(function(){
    scope = angular.scope();
    $cookieStore = scope.$inject('$cookieStore');
    favorites = scope.$inject('favorites');
  });


  describe('add', function() {

    it('should add phones to favorites and store them in cookie store', function() {
      expect($cookieStore.get('favorites')).toBeUndefined();
      favorites.add('abc123');
      expect($cookieStore.get('favorites')).toEqual({'abc123':true});
    });

  });


  describe('remove', function() {

    it('should remove phones from favorites', function() {
      favorites.add('abc123');
      expect($cookieStore.get('favorites')).toEqual({"abc123":true});

      favorites.remove('abc123');
      expect($cookieStore.get('favorites')).toEqual({});
    });

  });


  describe('has', function() {

    it('should return true if an item is favorite', function() {
      expect(favorites.has('abc123')).toBe(false);

      favorites.add('abc123');

      expect(favorites.has('abc123')).toBe(true);
    });

  });

  describe('list', function() {

    it('should return list of favorites in sorted order', function() {
      expect(favorites.list()).toEqual([]);

      favorites.add('abc');

      expect(favorites.list()).toEqual(['abc']);

      favorites.add('123');

      expect(favorites.list()).toEqual(['123', 'abc']);
    });

  });

});
