const os = require('os');

class OSreader {
    ReadOS() {
        const platform = os.platform();
        const osType = os.type();
        const freeMem = os.freemem();
        const totalMem = os.totalmem();
        const EOL = JSON.stringify(os.EOL);

        const osData = {
            platform,
            osType,
            freeMem,
            totalMem,
            EOL
        };

        return osData;
    }
}

module.exports = OSreader;