
var http = require('http');
var fs = require('fs');
var url = require('url');
//basic web server

//chooses file based on url

//listens to port 8080


//reads the correct file and returns the output

http.createServer(function(req, res){
    let u = url.parse(req.url,true);
    if(u.path==='/'){
        fs.readFile('index.html',function(err,data){
            if(err){
                res.writeHead(404);
                return res.end();
            }

            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
                return;
            }
        })
    }




    else if(u.path==='/about'){
        fs.readFile('about.html',function(err,data){
            if(err){
                res.writeHead(404);
                return res.end();
            }

            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
                return;
            }
        })
    }





    
    else if(u.path==='/contact-me'){
        fs.readFile('contact-me.html',function(err,data){
            if(err){
                res.writeHead(404);
                return res.end();
            }

            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
                return;
            }
        })
    }



    else{
        fs.readFile('404.html',function(err,data){
            if(err){
                res.writeHead(404);
                return res.end();
            }

            else{
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.write(data);
                res.end();
                return;
            }
        })
    }

}).listen(8080)
