const {filterDir, filterDirP, filterDirMyPromise} = require("./filterdir");

//filterDir(__dirname, ".json", (err, files) => {
//    if(err) {
//      return console.log(err);
//    }
//})

//filterDirP(__dirname, ".js")
//.then(files => console.log(files))
//.catch(e => console.log(e))

//async function tester() {
//    const files = await filterDirP(__dirname, ".js")
//    console.log(files)
//}

//tester();

// filterDirMyPromise(__dirname, ".js")
// .then(files => console.log(files))
// .catch(e => console.log(e));

async function testerSeqv() {
    try {
        const p1 = await filterDirMyPromise("Folder1", ".js");
        const p2 = await filterDirMyPromise("Folder2", ".js");
        const p3 = await filterDirMyPromise("Folder3", ".js");
        const p4 = await filterDirMyPromise("Folder4", ".js");
        const p5 = await filterDirMyPromise("Folder5", ".js");
        console.log("-Seqv-", [p1,p2,p3,p4,p5]);        
    } catch (err) {
        console.log(err);
    }
}

testerSeqv();

async function testerParal() {
    try {
        const p1 = filterDirMyPromise("Folder1", ".js");
        const p2 = filterDirMyPromise("Folder2", ".js");
        const p3 = filterDirMyPromise("Folder3", ".js");
        const p4 = filterDirMyPromise("Folder4", ".js");
        const p5 = filterDirMyPromise("Folder5", ".js");
        const result = await Promise.all([p1,p2,p3,p4,p5]);
        console.log("-Paral-", result);
    } catch (err) {
        console.log(err);
    }
}

testerParal();

