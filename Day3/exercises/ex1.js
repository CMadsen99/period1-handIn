//---a---//
const crypto = require('crypto');
let size = 48;
crypto.randomBytes(size, function(err, buffer) {
  let secureHex = buffer.toString('hex');
  //console.log(secureHex)
});

function randomHex () {
    const randomHexes = {
        "title": "3 Secure Randoms", 
        "randoms": []
    };
    
    let size = 48;
    crypto.randomBytes(size, function(err, buffer) {
        let secureHex = buffer.toString('hex');        
        let hex48 = {
            "length": buffer.length,
            "random": secureHex
        }
        
        size = 40;        
        crypto.randomBytes(size, function(err, buffer) {
            let secureHex = buffer.toString('hex');
            let hex40 = {
                "length": buffer.length,
                "random": secureHex
            }
            
            size = 32;            
            crypto.randomBytes(size, function(err, buffer) {
                let secureHex = buffer.toString('hex');
                let hex32 = {
                    "length": buffer.length,
                    "random": secureHex
                }

                randomHexes.randoms = [hex48,hex40,hex32]; 
                
                console.log(randomHexes);
              });
          });
      });
}
      
//randomHex();

//---b---//
function makeSecureRandom(size) {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(size, (err, buffer) => {
            if (err) {
                //return måske ikke nødvendig
              return reject(err);
            }
            let hex = {
                "length": buffer.length,
                "random": buffer.toString('hex')
            }
            resolve(hex);
          })
    })
};

module.exports.makeSecureRandom = makeSecureRandom;