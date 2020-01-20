class Beer {
    constructor({ id, name, tagline, first_brewed, description, image_url }) {
        this.id = id;
        this.name = name;
        this.tagline = tagline;
        this.first_brewed = first_brewed;
        this.description = description;
        this.image_url = image_url;
    }
};


/* class HttpModule {
    constructor(baseURL)
    async parseBeer() {
      try {
        const responce = await fetch(baseURL)
        const data = await responce.json()
        beer = data.map((opt) => new Beer(opt))
        console.log(beer);
      } catch (e) {
        console.error(e)
      }
    }
  }
 */