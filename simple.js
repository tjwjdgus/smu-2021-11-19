var http = require('http');
var app = http.createServer(function(request,response){
    console.log('request');
    response.end(`
    <h1><a href="index.html">WEB</a></h1>
    <ul>
        <li><a href="html.html">html</a></li>
        <li><a href="nodejs.html">nodejs</a></li>
        <li><a href="mysql.html">mysql</a></li>
    </ul>
    <h2>Welcome</h2>
    Hello Nodejs  
    `);
});
app.listen(8080);