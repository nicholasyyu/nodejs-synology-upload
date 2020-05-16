var request = require('request');
var fs = require('fs');

let r = request.post( { url: 'http://your domain:5000/webapi/entry.cgi?_sid=RipYPdjaIOSMk1520M7N896807' }, ( err, response, body ) => {
    if (err) {
        return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
});

let form = r.form();
form.append( 'api', 'SYNO.FileStation.Upload');
form.append( 'version', '2');
form.append( 'method', 'upload' );
form.append( 'overwrite', 'false' );
form.append( 'path', '/APITest');
form.append( 'create_parents', 'true' );
form.append( 'file', fs.createReadStream('./Sales Cloud Basics.pdf'), { 'filename' : 'Sales Cloud Basics'});