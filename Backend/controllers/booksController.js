var book = require('../schemas/book');

exports.getbooks = {
  auth: {
  mode:'required',
  strategy:'session',
  scope: ['admin', 'regular']
},
  handler: function(request, reply){
    var books = book.find({});
    reply(books);
  }
}

exports.getbooksdet = {
  auth: {
  mode:'required',
  strategy:'session',
  scope: ['admin', 'regular']
},
  handler: function(request, reply){
    var books = book.find({account : request.params.account});
    reply(books);
  }
}

exports.createbook = {
  auth: {
  mode:'required',
  strategy:'session',
  scope: ['admin']
},
  handler: function(request, reply){
    var newbook = new book({
      titulo: request.payload.titulo,
      account: request.payload.account,
      editorial: request.payload.editorial,
      ano: request.payload.ano,
      autor: request.payload.autor
    });
    newbook.save();
    console.log('book saved');
    return reply('ok');
  }
}

exports.updatebook = {
  auth: {
  mode:'required',
  strategy:'session',
  scope: ['admin']
},
  handler: function(request, reply){
    book.findOneAndUpdate(
      {account : request.params.account},
        {titulo : request.payload.titulo,
        autor : request.payload.autor,
        editorial: request.payload.editorial,
        ano: request.payload.ano},
        function(err, books){
      books.save(function(err){
        if(err){
          console.log("Shit");
        }
      });
    });
    reply("ok");
  }
}

exports.deletebook = {
  auth: {
  mode:'required',
  strategy:'session',
  scope: ['admin']
},
  handler: function(request, reply){
    book.findOneAndRemove(
      {account : request.params.account},function(err, books){
    books.save(function(err){
      if(err){
        console.log("Shit");
      }
    })
    reply("ok");
  });
}
}
