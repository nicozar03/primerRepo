const http = require("http");
const host= "localhost";
const port=8000;
const requestListener= function(req, res){
  console.log(req.headers);
res.writeHead(200);
  res.end("My first server!");
};
const server=http.createServer(requestListener);
server.listen(port, host, ()=>{
  console.log(`server is running on http://${host}:${port}`);         
});
aaa

