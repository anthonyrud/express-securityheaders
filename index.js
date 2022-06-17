module.exports = function (CustomHeaders) {
    return function (req, res, next) {
        var ResponseHeaders = {
            "Content-Security-Policy": "default-src 'self'",
            "Permissions-Policy": "",
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Strict-Transport-Security": "max-age=15552000; includeSubDomains",
            "Referrer-Policy": "no-referrer"
        }

        res.removeHeader("X-Powered-By")

        for (const [key, value] of Object.entries(CustomHeaders))
            typeof value != "boolean" ? ResponseHeaders[key] = value : delete ResponseHeaders[key]

        for (const [key, value] of Object.entries(ResponseHeaders)) res.setHeader(key, value)

        next()
    }
}