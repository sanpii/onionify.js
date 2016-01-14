function getData()
{
    var scripts = document.getElementsByTagName('script');
    var scriptName = scripts[scripts.length-1];

    return {
        domain : scriptName.getAttribute('data-domain'),
    };
}

var onion = getData().domain;

if (onion !== null) {
    if (window.location.protocol + "//" + window.location.hostname != onion) {
        var query = new XMLHttpRequest();
        var url = window.location.protocol + "//" + getData().domain;

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
    console.error("Missing data-domain attribute. Ensure that script loaded synchronously.");
}
