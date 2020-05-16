var request = require('request');
var fs = require('fs');

var formData = {
    api: 'SYNO.FileStation.Upload',
    version: '2',
    method: 'upload',
    overwrite: 'false',
    path: '/APITest',
    create_parents: 'true',
    file: fs.createReadStream('./2324.txt')
};
request.post({
    url: 'http://your domain :5000/webapi/entry.cgi?_sid=RipYPdjaIOSMk1520M7N896807',
    formData: formData
}, function optionalCallback(err, httpResponse, body) {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});