function getData()
{
    var scripts = document.getElementsByTagName('script');
    var scriptName = scripts[scripts.length-1];

    return {
        domain : scriptName.getAttribute('data-domain'),
    };
}

var onion = getData().domain;

if (window.location.protocol + "//" + window.location.hostname != onion) {
    var query = new XMLHttpRequest();

    query.onload = function(e) {
        if (query.status == 200) {
            window.location.assign(onion + window.location.pathname);
        }
    };
    query.timeout = 5000;
    query.open('HEAD', onion, true);
    query.send();
};
