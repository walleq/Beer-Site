class Beer {
    constructor(opt) {
        this.name = opt.name;
        this.tagline = opt.tagline;
        this.first_brewed = opt.first_brewed;
        this.description = opt.description;
    }
}

async function getBeer() {
    try {
        const responce = await fetch(baseURL)
        const data = await responce.json()
        beer = data.map(({ name, tagline, first_brewed, description }) => ({ name:name, tagline:tagline, first_brewed:first_brewed, description:description }))
        console.log(beer);
    } catch (e) {
        console.error(e)
    }
}