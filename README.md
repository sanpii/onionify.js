Automaticaly redirect user to onion domain.

<https://about.okhin.fr/posts/Onionify/>

# Installation

```
bower install onionify.js
```

# Configuration

This script made a [cross-origin
request](https://developer.mozilla.org/fr/docs/HTTP/Access_control_CORS). You
need to allow this request, generally via your http server, by adding these
http headers:

```
Access-Control-Allow-Origin: https://example.org
Access-Control-Request-Method: HEAD
```

For example with nginx:

```
add_header 'Access-Control-Allow-Origin' 'https://example.org'
add_header 'Access-Control-Request-Method' 'HEAD'
```

# Usage

```html
<script src="bower_components/onionify.js/src/onionify.js" data-onion="https://dua6u3dsufohrnsz.onion"></script>
```

The script should be loaded **synchronously**. No *async* attribute.
