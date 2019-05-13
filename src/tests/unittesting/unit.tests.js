const expect  = require('chai').expect;
let request = require('request');

describe('Functionality Step by Step', function(){
    it("Login a user",function(done) {
        request.post('http://localhost:3000/users/login',{form:{nick_name: 'admin', password:1}},function(error,response,body){
            expect(response.statusCode).to.equal(200);
            expect(response.statusMessage).to.equal('OK');
            done();
        });
    });
    it('Get our data', function(done) {
        request('http://localhost:3000/gasStations/all' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(response.statusMessage).to.equal('OK');
            done();
        });
    });
});

