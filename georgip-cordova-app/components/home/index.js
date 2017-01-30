'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

var el = new Everlive({
    appId: '9gi1ov5bttp5t68r',
    authentication: {
        persist: true
    },
    offline: true,
    scheme: 'https'
});

var testFiles = [{
    Filename: 'file1.txt',
    ContentType: 'text/plain',
    totalSize: 19,
    base64: 'ZmlsZSAxIHRleHQgY29udGVudA=='
}, {
    Filename: 'file2.js',
    ContentType: 'application/javascript',
    totalSize: 27,
    base64: 'Ly9maWxlIDIgamF2YXNjcmlwdCBjb250ZW50'
}];

el.online(false);
el.files.applyOffline(true).create(testFiles[0])
    .then(function(resp) {
        console.log('resp: ' + JSON.stringify(resp));
    })
    .catch(function(err) {
        console.log('err: ' + JSON.stringify(err));
    });

// END_CUSTOM_CODE_home