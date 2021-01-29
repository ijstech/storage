const Path = require('path');
const Fs = require('fs');
const RootPath = process.cwd();

function createDirectory(filePath){
    var dirname = Path.dirname(filePath);
    if (Fs.existsSync(dirname))
        return;
    createDirectory(dirname);
    Fs.mkdirSync(dirname);
}
function getFullPath(root, ...paths){    
    let rootPath = root;
    if (rootPath.slice(-1) != '/')
        rootPath += '/'
    let result = root;    
    if (Array.isArray(paths)){
        for (var i = 0; i < paths.length; i ++){
            result = Path.join(result, paths[i])
            if (result.indexOf(rootPath) != 0)
                return;
        }        
        return result
    }
    else   
        return;
}
function readFile(filePath, options){
    return new Promise(function(resolve, reject){
        try{
            filePath = getFullPath(RootPath, options.rootPath, filePath);            
            Fs.readFile(filePath, 'utf8', function(err, content){
                if (err)
                    reject(err)
                else
                    resolve(content);
            });
            resolve();
        }
        catch(err){
            reject(err)
        }
    })
}
function writeFile(filePath, blob, options){
    return new Promise(function(resolve, reject){
        try{
            filePath = getFullPath(RootPath, options.rootPath, filePath);
            createDirectory(filePath);
            Fs.writeFile(filePath, blob, function(err){
                if (err)
                    reject(err)
                else    
                    resolve()
            })
        }
        catch(err){            
            reject(err)
        }
    })
}
module.exports = {
    readFile: readFile,
    writeFile: writeFile
}