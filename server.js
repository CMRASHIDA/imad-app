var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
     'article-1':{
        title:'article-1',
        heading:'article-1',
        date:'aug 15,2017',
        content:`
            <p>
                 This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.vThis is the content of article-1.
            </p>
            <p>
                 This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.This is the content of article-1.vThis is the content of article-1.
            </p>
            `
            },
     'article-2':{
        title:'article-2',
        heading:'article-2',
        date:'aug 15,2017',
        content:`
            <p>
                 This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.vThis is the content of article-2.
            </p>
            <p>
                 This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.This is the content of article-2.vThis is the content of article-2.
            </p>
            `
            },
     'article-3':{
        title:'article-3',
        heading:'article-3',
        date:'aug 15,2017',
        content:`
            <p>
                 This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.vThis is the content of article-3.
            </p>
            <p>
                 This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.This is the content of article-3.vThis is the content of article-3.
            </p>
            `
            
    }
};
function createTemplate(data)
{
var title=data.title;
var heading=data.heading;
var content=data.content;
var date=data.date;
var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
        <div>
            <a href>Home</a>
        </div>
            <hr/>
            ${heading}
    
        <div>
            ${content}
        </div>
        <div>
            ${date}
        </div>
        </div>    
    </body>
</html>
`;
return htmltemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'ui','index.html'));
});

app.get('/:articleName',function(req, res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
