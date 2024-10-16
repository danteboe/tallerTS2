export class Serie{
    id: number;
    name: string;
    producer: string;
    rating: number;
    description: string;
    url: string;
    image: string;

    constructor(id: number, name: string, producer: string, rating: number, description: string, url: string, image: string){
        this.id = id;
        this.name = name;
        this.producer = producer;
        this.rating = rating;
        this.description = description;
        this.url = url;
        this.image = image;
    }
}