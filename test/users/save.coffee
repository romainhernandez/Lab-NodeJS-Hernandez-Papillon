should = require 'should'
users = require '../../lib/users'

describe 'Save  Unit Tests', () ->
   it 'Should return the saved name', () ->
      users.save "roger", (user) ->
         user.should.equal "roger"
