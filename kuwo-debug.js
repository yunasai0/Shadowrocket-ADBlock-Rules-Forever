var url = $request.url;
var body = $response ? $response.body : $request.body;
var type = $response ? "Response" : "Request";

var shortUrl = url.split("?")[0];
var preview = body ? body.substring(0, 500) : "empty";

console.log("[kuwo-debug] " + type + ": " + shortUrl);
console.log("[kuwo-debug] Body: " + preview);

$notify("酷我抓包 | " + type, shortUrl, preview);

$done({body: body});
