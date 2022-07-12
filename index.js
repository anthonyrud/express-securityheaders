module.exports = function (CustomHeaders) {
    return function (req, res, next) {
        var ResponseHeaders = {
            "Content-Security-Policy": "default-src 'self'",
            "Permissions-Policy": "",
            "X-Frame-Options": "DENY",
            "X-Content-Type-Options": "nosniff",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
            "Referrer-Policy": "no-referrer",
            "X-XSS-Protection": "1; mode=block",
            "X-Permitted-Cross-Domain-Policies": "none",
            "Clear-Site-Data": "\"*\"",
            "Cross-Origin-Embedder-Policy": "require-corp",
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Resource-Policy": "same-origin"
        }

        res.removeHeader("X-Powered-By")

        if (CustomHeaders) for (const [key, value] of Object.entries(CustomHeaders))
            typeof value != "boolean" ? ResponseHeaders[key] = value : delete ResponseHeaders[key]

        for (const [key, value] of Object.entries(ResponseHeaders)) res.setHeader(key, value)

        next()
    }
}