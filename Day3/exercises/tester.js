const {makeSecureRandom} = require("./ex1");

function plain () {
const hex48 = makeSecureRandom(48);
const hex40 = makeSecureRandom(40);
const hex32 = makeSecureRandom(32);
const hex24 = makeSecureRandom(24);
const hex16 = makeSecureRandom(16);
const hex8 = makeSecureRandom(8);

Promise.all([hex48,hex40,hex32,hex24,hex16,hex8]).then((values) => {
    console.log(values);
}).catch(err => console.log(err));
};

//plain();

async function testerParal() {
    try {
        const hex48 = makeSecureRandom(48);
        const hex40 = makeSecureRandom(40);
        const hex32 = makeSecureRandom(32);
        const hex24 = makeSecureRandom(24);
        const hex16 = makeSecureRandom(16);
        const hex8 = makeSecureRandom(8);
        const result = await Promise.all([hex48,hex40,hex32,hex24,hex16,hex8]);
        console.log("-Paral-", result);
    } catch (err) {
        console.log(err);
    }
}

testerParal();