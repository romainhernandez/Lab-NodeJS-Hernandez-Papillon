var should = require('should');
var users = require('../../lib/users');

describe('Get Unit Tests', function(){
  it('Should return the right ID', function(){
    users.get(100, function(user){
      user.should.have.property('id',100);
    })
  })
})
