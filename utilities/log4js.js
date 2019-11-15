let log4js=require('log4js');

let Log=function(){
    log4js.configure('./utilities/log4js_config.json');
    let log=log4js.getLogger("default");
    return log;
}

module.exports={
    Log
}