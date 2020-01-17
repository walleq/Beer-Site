class Beer {
    constructor({ name, tagline, first_brewed, description }) {
        this.name = name;
        this.tagline = tagline;
        this.first_brewed = first_brewed;
        this.description = description;
    }
}

async function parseBeer() {
    try {
        const responce = await fetch(baseURL)
        const data = await responce.json()
        beer = data.map((opt) => new Beer(opt))
        console.log(beer);
    } catch (e) {
        console.error(e)
    }
}

/* пробежаться по массиву и построить дом
25 div */