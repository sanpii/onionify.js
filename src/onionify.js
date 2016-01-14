var onion = 'https://dua6u3dsufohrnsz.onion';
var query = new XMLHttpRequest();
if (window.location.protocol + "//" + window.location.hostname != onion) {
    query.onload = function(e) {
        if (query.status != 200) return
        else {
            window.location.assign(onion + window.location.pathname);
        }
    };
    query.timeout = 5000;
    query.open('HEAD', onion, true);
    query.send();
};
