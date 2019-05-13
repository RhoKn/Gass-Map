const expect  = require('chai').expect;
let request = require('request');

const uri = 'http://localhost:3000/';

let r = Math.random().toString(36).substring(7);
let emailR = r+'@gmail.com';

describe('Functionality Step by Step', function(){
    it("SignUP", function(done){
        request.post(uri+'users/register',{form:{nick_name: r, password: r,user_type:'true',email:emailR, first_name:r,last_name:r}}, function(error, response, body){
            expect(response.statusCode).to.equal(201);
            expect(response.statusMessage).to.equal('Created');
            done();
        });
    });
    it("Login",function(done) {
        request.post(uri+'users/login',{form:{nick_name: r, password:r}},function(error,response,body){
            expect(response.statusCode).to.equal(200);
            expect(response.statusMessage).to.equal('OK');
            done();
        });
    });
    it('List', function(done) {
        request(uri+'gasStations/all' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            expect(response.statusMessage).to.equal('OK');
            done();
        });
    });
});

