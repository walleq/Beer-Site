const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://api.punkapi.com/v2/beers'

//function fetchTodos() {
// console.log('Fetch todo started ...')
// return delay(2000)
//  .then(() => fetch(url)
//)
// .then(responce => responce.json()) 
//}
//fetchTodos()
// .then(data => {
//      console.log('Data', data)
//})
//.catch(e => console.log(e))//

async function fetchAsyncTodos() {
    console.log('Fetch todo started ...')
    try {
        await delay(2000)
        const responce = await fetch(url)
        const data = await responce.json()
        console.log('Data', data)
    } catch (e) {
        console.error(e)
    }
}

fetchAsyncTodos()