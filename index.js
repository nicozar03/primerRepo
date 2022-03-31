const http = require("http");
const host= "localhost";
const port=8000;
const requestListener= function(req, res){
res.writehead(200);
  res.end("My first server!");
};
const server=http.createServer(requestListener);
server.listen(port, host, ()=>{
  console.log(`server is running on https://${host}:${port}`);         
});

