const expect  = require('chai').expect;
let request = require('request');

const uri = 'https://api.datos.gob.mx/v2/precio.gasolina.publico';

describe('Get gas stations from api', function(){
    it("SignUP", function(done){
        request.get(uri, function(error, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
    // it("Login",function(done) {
    //     request.post(uri+'users/login',{form:{nick_name: r, password:r}},function(error,response,body){
    //         expect(response.statusCode).to.equal(200);
    //         expect(response.statusMessage).to.equal('OK');
    //         done();
    //     });
    // });
    // it('List', function(done) {
    //     request(uri+'gasStations/all' , function(error, response, body) {
    //         expect(response.statusCode).to.equal(200);
    //         expect(response.statusMessage).to.equal('OK');
    //         done();
    //     });
    // });
});
