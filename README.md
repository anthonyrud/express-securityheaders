# express-securityheaders

Add security related headers to an express application.

## Description

express-securityheaders add's a default set of security headers to secure your express applications.

### Install

* Install with npm
```
npm install express-securityheaders --save
```

### Examples

* Basic usage with default headers
```
const SecurityHeaders = require('express-securityheaders');

app.use(SecurityHeaders());
```

* Custom headers
```
const SecurityHeaders = require('express-securityheaders');

app.use(SecurityHeaders({
  "Content-Security-Policy": "default-src 'self' cdn.jsdelivr.net",
}));
```

* Add new header
```
const SecurityHeaders = require('express-securityheaders');

app.use(SecurityHeaders({
  "my-header": "my-header content"
}));
```

* Remove a header
```
const SecurityHeaders = require('express-securityheaders');

app.use(SecurityHeaders({
  "Content-Security-Policy": false
}));
```

