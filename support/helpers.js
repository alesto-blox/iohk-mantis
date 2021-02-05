const fs  =require('fs')

function writeToFileAppended(file, data) {
    fs.writeFile(file, data + "\n", {
        flag: 'a'
    }, (err) => {
        //console.log("Error: ",err)
    })
}

async function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

function resetMantisConfig(baseConfig,mantisConfig) {
    fs.readFile(baseConfig, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }
        fs.writeFile(mantisConfig, data, function (err) {
            if (err) throw err;
        });
    });
}

module.exports = {
    timeout,
    writeToFileAppended,
    resetMantisConfig
}