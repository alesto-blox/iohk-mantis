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

module.exports = {
    timeout,
    writeToFileAppended
}