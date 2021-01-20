function readFile(filePath){
    return new Promise(function(resolve, reject){
        try{
            resolve();
        }
        catch(err){
            reject(err)
        }
    })
}
function writeFile(filePath, blob){
    try{
        resolve();
    }
    catch(err){
        reject(err)
    }
}
module.exports = {
    readFile: readFile,
    writeFile: writeFile
}