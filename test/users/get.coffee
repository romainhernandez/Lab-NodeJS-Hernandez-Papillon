should = require 'should'
users = require '../../lib/users'

describe 'Get Unit Tests', () ->
   it 'Should return the right ID', () ->
      users.get 100, (user) ->
         user.should.have.property('id',100)
