const http= require("http");
http.createServer((req,res)=>{
    res.write("<h1>this is   frfffff    jjjjjj       kkkkkk    mmmmm     lllll Nodejs!!!");
    res.end();

}).listen(9000);