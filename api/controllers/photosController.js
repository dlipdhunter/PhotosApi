var fs = require('fs');
var photosDirectoryPath = 'content/photos/';
var supportedFileFormat = '.png';
var contentType = 'image/png';

exports.getPhoto = function (req, res) {
    if (req.query.searchString != null && req.query.searchString != '') {
        fs.readFile(photosDirectoryPath + req.query.searchString + supportedFileFormat, function(err, data){
            if(err){
                console.log(err);
                res.writeHead(404);
                res.end('photo not found!');
            }
            else{
                var photo = data;
                res.writeHead(200, {'Content-Type': contentType});
                res.end(photo, 'binary');
            }
        });
    }
    else {
        res.writeHead(404);
          res.end('photo not found!');
    }
};

exports.getPhotoNames = function(req, res){
    fs.readdir(photosDirectoryPath, (err, files) => {
            if(err){
                console.log(err);
                res.writeHead(404);
                res.end('unable to serve photos now. try again later.');
            }
            else{
                var result = '';
                if(files.length > 0){
                    var result = 'Photos available are \n';
                    files.forEach(function(fileName) {
                        result += fileName + '\n';
                    }, this);
                }
                else{
                    result = 'No photos available!';
                }
                
                res.end(result);
            }
        });  
};