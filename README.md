# express-securityheaders

Add security related headers to an express application.

## Description

express-securityheaders add's a default set of security headers to secure your express applications.

The following are set by default:

  Content-Security-Policy: default-src 'self'  
  Permissions-Policy: ""  
  X-Frame-Options: DENY  
  X-Content-Type-Options: nosniff  
  Strict-Transport-Security: max-age=31536000; includeSubDomains  
  Referrer-Policy: no-referrer  
  X-XSS-Protection: 1; mode=block  
  X-Permitted-Cross-Domain-Policies: none  
  Clear-Site-Data: "*"  
  Cross-Origin-Embedder-Policy: require-corp  
  Cross-Origin-Opener-Policy: same-origin  
  Cross-Origin-Resource-Policy: same-origin  

The X-Powered-By header is removed.

Test your application headers using https://securityheaders.com

### Install

* Install with npm
```
npm install express-securityheaders --save
```

### Examples

* Basic usage with default headers
```
const express = require("express");
const SecurityHeaders = require('express-securityheaders');

var app = express();

app.use(SecurityHeaders());
```

* Override a default header
```
const express = require("express");
const SecurityHeaders = require('express-securityheaders');

var app = express();

app.use(SecurityHeaders({
  "Content-Security-Policy": "default-src 'self' cdn.jsdelivr.net"
}));
```

* Override multiple default headers
```
const express = require("express");
const SecurityHeaders = require('express-securityheaders');

var app = express();

app.use(SecurityHeaders({
  "Content-Security-Policy": "default-src 'self' cdn.jsdelivr.net",
  "X-Frame-Options": "SAMEORIGIN",
  "referrer-policy": "strict-origin-when-cross-origin"
}));
```

* Add new header
```
const express = require("express");
const SecurityHeaders = require('express-securityheaders');

var app = express();

app.use(SecurityHeaders({
  "my-header": "my-header content"
}));
```

* Remove a header
```
const express = require("express");
const SecurityHeaders = require('express-securityheaders');

var app = express();

app.use(SecurityHeaders({
  "Content-Security-Policy": false
}));
```

