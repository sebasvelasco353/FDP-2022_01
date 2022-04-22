var url = 'https://swapi.dev/api/people';


run();
const readOneAuthor = (id) => {
    if(!id) throw new Error('Debes ingresar un id')

    return new Promise((resolve, reject) => {
      request.get(`${url}${id}`, (err, res, body) => {
        if(res.statusCode === 200){
          resolve(JSON.parse(body));
        } else reject({message: 'Error', statusCode: res.statusCode, body: JSON.parse(body)});
      })
    })
  }
const autorLeido = await readOneAuthor(id)
console.log(autorLeido)