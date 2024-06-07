const { request } = require("http");
const { Module } = require("module");

var filename = Module._resolveFilename(request, parent, isMain);
var cacheModule = Module._cache[filename];
if(cacheModule)
    {
        updateChildren(parent, cacheModule, true);
        return cacheModule.exports;
    }