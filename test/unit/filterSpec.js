describe('filter', function(){
  describe('checked', function(){
    it('should show check on true', function(){
      expect(angular.filter('checked')(true)).toEqual("\u2714");
    });

    it('should show cross on false', function(){
      expect(angular.filter('checked')(undefined)).toEqual("\u2716");
    });
    it('should show check on undefined', function(){
      expect(angular.filter('checked')(false)).toEqual("\u2716");
    });
  });
});