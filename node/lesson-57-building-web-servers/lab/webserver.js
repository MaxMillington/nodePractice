'use strict';

var http = require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');

var PORT = 3000;
var server;

var responseFiles = {};
var fileNames = ['index.html', 'login.html', 'success.html', 'failure.html'];

/**
 * Cache the html files to have fewer async calls later on.
 * Store the files in the object, responseFiles[filename] = contents
 */

fileNames.forEach(function (filename) {
    fs.readFile(filename, function (err, data) {
        if (err) throw err;
        responseFiles[filename] = data;
    });
});

/**
 * Render the html page to the client.  NOTE: the page should already have been
 * cached above.
 *
 * @param response
 * @param filename
 */
function render(response, filename) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(responseFiles[filename]);
}


/**
 * Get the body of the request.  Assumes the method is POST and parses the
 * body to get the FORM data.
 *
 * @param request
 * @param callback -- function(formParams)
 */
function getBody(request, callback) {
    var contents = '';
    request.on('data', function (data) {
        contents += data.toString();
    });
    request.on('end', function () {
        callback(querystring.parse(contents));
    });
}

// create a web (http) server
//    parse the input request url
//    if the input is
//      GET /         -- send the file, 'index.html'
//      GET /login    -- send the file, 'login.html'
//      GET /logout   -- send the file, 'index.html'
//      POST /login   -- if the username and password are not empty, send the file 'success.html',
//                    -- else send the file, 'failure.html'
//

server = http.createServer(function (request, response) {
        var params = {};        // TODO: use url.parse() to get the params
        var method = 'GET';     // TODO: get the real method from the request
        var path = '/';         // TODO: get the real pathname from the params
        var body = {};
        console.log('Method = ' + method + ', path = ' + path);

        if (method === 'GET') {

            switch (path) {
                case '/':
                    render(response, 'index.html');
                    break;

                // TODO: add the other paths for GET

                default:
                    response.writeHead(500);
                    response.end("GET: Unknown path: " + path);
                    break;
            }
        }
        else if (method === 'POST') {
            // NOTE: we must get the FORM parameters from the request body
            getBody(request, function (data) {
                body = data;

                switch (path) {
                    case '/login':
                        // TODO: add the logic for the POST /login
                        // TODO: verify that the body contains a username and a password
                        // TODO: change the rendered file based on the correct input
                        break;
                    default:
                        response.writeHead(500);
                        response.end("POST: Unknown path: " + path);
                        break;
                }
            });

        }
        else {
            response.writeHead(500);
            response.end("ERROR: unknown method, " + method);
        }

    }
)

// on the server 'error' event, display the error on the console
server.on('error', function (err) {
    console.log(err);
});

// tell the server to listen to the port and display a console message when it is ready

server.listen(PORT, function (err) {
    if (err) return console.log(err);
    console.log("Server listening on port, " + PORT);
});
