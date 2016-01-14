'use strict';

function getData()
{
    var scripts = document.getElementsByTagName('script');
    var scriptName = scripts[scripts.length-1];

    return {
        onion: scriptName.getAttribute('data-onion'),
    };
}

var onion = getData().onion;

if (onion !== null) {
    if (window.location.protocol + "//" + window.location.hostname != onion) {
        var query = new XMLHttpRequest();
        var url = window.location.protocol + "//" + onion;

        query.onload = function(e) {
            if (query.status === 200) {
                window.location.assign(url + window.location.pathname);
            }
        };
        query.timeout = 5000;
        query.open('HEAD', url, true);
        query.send();
    }
}
else {
    console.error("Missing data-onion attribute. Ensure that script loaded synchronously.");
}
