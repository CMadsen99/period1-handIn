const OSreader = require("./OSreader");

const osReader = new OSreader();

console.log(osReader.ReadOS());


const DOS_Detector = require("./dosDetector");

const dosDetector = new DOS_Detector(1000);

dosDetector.on("DosDetected", (e) => console.log(`DosDetected: ${JSON.stringify(e)}`));

dosDetector.addUrl("nodejs.org");
dosDetector.addUrl("nodejs.org");
dosDetector.addUrl("nodejs.org");