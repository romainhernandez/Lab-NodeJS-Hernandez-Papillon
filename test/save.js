var should = require('should');
var users = require('../../lib/users');

describe('Save  Unit Tests',function(){
   it('Should return the saved name', function() {
      users.save("roger",function(user) {
         user.should.equal("roger");
      })
   })
}
