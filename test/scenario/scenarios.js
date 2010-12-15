describe('phones', function(){
  beforeEach(function(){
    browser().navigateTo('/app/index.html');
  });
  
  it('should list phones', function(){
    input('predicate.$').enter('Nexus S');
    element('a:contains("mark favorite")').click();
    wait();
    element('a:contains("remove favorite")').click();
    wait();
  });
  
});