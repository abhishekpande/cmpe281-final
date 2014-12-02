var express = require('express'),
    wines = require('./routes/wines');
 
var app = express();
 
 
 
app.get('/furnitures', wines.findAll);
app.get('/furnitures/:id', wines.findById);
app.post('/furnitures', wines.addWine);
app.put('/furnitures/:id', wines.updateWine);
app.delete('/furnitures/:id', wines.deleteWine);
app.get('/ipaddress',function(req,res)
{
var os = require('os');

var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
   res.send(addresses);
});

app.listen(80);
console.log('Listening on port 80...');