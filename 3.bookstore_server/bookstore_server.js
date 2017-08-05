let http = require('http');
let url = require('url');

let books = [
    {
        bookId: 0,
        bookName: '鬼吹灯',
        bookPrice: 150,
        bookCover: 'https://img12.360buyimg.com/n1/jfs/t2848/83/287401256/477501/f19b3084/570ce621N5da1eabb.jpg'
    }
];

http.createServer(function(req, res) {
    let {pathname, query} = url.parse(req.url, true);

    // 只接受 /book 的请求
    if (pathname === '/book') {
        let id = query.id;
        switch (req.method) {
            case 'GET':
                console.log(id);
                if(id) {
                    let tempBook = books.find(item => item.bookId == id);
                    res.end(JSON.stringify(tempBook));
                } else {
                    res.end(JSON.stringify(books));
                }
                break;
            case 'POST':
                var str = '';
                req.on('data', function(data) {
                    str+=data;
                });
                req.on('end', function() {
                    let book = JSON.parse(str);
                    book.bookId = books.length ? books.length : 1;
                    books.push(book);
                    res.end(JSON.stringify(books));
                });
                break;
            case 'PUT':
                var str = '';
                req.on('data', function(data) {
                    str += data;
                });
                req.on('end', function() {
                    let book = JSON.parse(str);
                    books = books.map(item => {
                        if(item.bookId == book.bookId) {
                            return book;
                        } else {
                            return item;
                        }
                    });
                    res.end(JSON.stringify(book));
                });
                break;
            case 'DELETE':
                books = books.filter(item=> item.bookId != id);
                res.end(JSON.stringify({})); // 删除成功返回空对象
                break;
        }
    } else {
        res.statusCode = 500;
        res.end();
    }


}).listen(4000);