const http = require("http");
const host = '0.0.0.0';
const port = 8000;

const requestListener = function (req, res) {
    var os = require("os");
    var hostname = os.hostname();
    var visitorIP = req.connection.remoteAddress
    var report = process.report.getReport();
    var version = report["header"]["nodejsVersion"];
    var timestamp = Date.now();
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(`{"timestamp": "${timestamp}", "hostname": "${hostname}", "engine": "NodeJS ${version}", "visitor ip": "${visitorIP}" }`);

};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});

