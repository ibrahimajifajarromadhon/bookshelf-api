const {addBookHandler, getAllBooksHandler, getBookByIdHandler, updateBookByIdHandler, deleteBookByIdHandler} = require('./handler');

const routes = [
    //route menambahkan buku
    {
        method: 'POST',
        path: '/books',
        handler: addBookHandler
    },
    //route mendapatkan semua buku
    {
        method: 'GET',
        path: '/books',
        handler: getAllBooksHandler
    },
    //route mendapatkan buku berdasarkan id
    {
        method: 'GET',
        path: '/books/{bookId}',
        handler: getBookByIdHandler
    },
    //route mengubah buku berdasarkan id
    {
        method: 'PUT',
        path: '/books/{bookId}',
        handler: updateBookByIdHandler
    },
    //route menghapus buku berdasarkan id
    {
        method: 'DELETE',
        path: '/books/{bookId}',
        handler: deleteBookByIdHandler
    }
];

module.exports = routes;