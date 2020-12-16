export class Course{
    client:string;
    article:string;
    prix:number;

    constructor(nomCli:string,nomArt:string,price:number){
            this.article=nomArt;
            this.client=nomCli;
            this.prix=price;
    }
}