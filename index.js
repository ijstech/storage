const Log = require('@ijstech/log');
var Options = {};

module.exports = {
    _init: function(options){
        Options = options;
        this.options = options;
    },
    readFile: async function(filePath){ 
        try{
            switch (this.options.type){
                case 'local':
                    return require('./local').readFile(filePath, this.options)
                case 's3':
                    return require('./s3').readFile(filePath, this.options)
                case 'oss':
                    return require('./oss').readFile(filePath, this.options)
                default:
                    return '$invalid_storage_type'
            }
        }
        catch(err){
            Log.error(err);
        }
    },
    writeFile: async function(filePath, blob){
        try{
            switch (this.options.type){
                case 'local':
                    return require('./local').writeFile(filePath, blob, this.options)
                case 's3':
                    return require('./s3').writeFile(filePath, blob, this.options)
                case 'oss':
                    return require('./oss').writeFile(filePath, blob, this.options)
                default:
                    return '$invalid_storage_type'
            }
        }
        catch(err){
            Log.error(err);
        }        
    },
    _plugin: function(vm, ctx, site, options){

    }
}