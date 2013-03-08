var ClosureCompiler = require(__dirname+"/../ClosureCompiler.min.js");

ClosureCompiler.compile(__filename, {}, function(error, result) {
    if (error) {
        throw(error);
    }
    console.log("✔ Compile: "+result);
    process.exit(0);
});
