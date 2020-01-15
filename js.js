const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

const url = 'https://api.punkapi.com/v2/beers'

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

/* // 1) вытягивать все пиво
2) по отдельности
3) разделить по страницам
4) кэширование */