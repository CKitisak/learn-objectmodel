const objModel = require('objectmodel');

const Config = new objModel.ObjectModel({
    local: {
        time: {
            format: ["12h", "24h", undefined]
        }
    }
});

const config = { local: undefined }; // object duck typed
const model_config = Config(config); // object mode

console.log(JSON.stringify(model_config, null, 2));

// so to prevent this exception, we have to check this way:
if (config != null
    && config.local != null
    && config.local.time != null
    && config.local.time.format === "12h") {
    hour %= 12;
}

// with object models, no worries :)
if (model_config.local.time.format === "12h") { 
    hour %= 12; 
} else {
    // model_config.local.time.format returns undefined
    console.log('model_config.local.time.format is', model_config.local.time.format);

    // set time format
    model_config.local.time.format = '24h';
    console.log('set time format to "24h"');

    if (model_config.local.time.format === '24h') {
        console.log('time format is OK!');
    }

    console.log(JSON.stringify(model_config, null, 2));
}
