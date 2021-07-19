import { Leg } from "./parts/Leg.js";

class Body {
    children;

    constructor () {
        this.children = [];
        this.children.push(new Leg(), new Leg());
    }
}

let body = new Body();
console.log(JSON.stringify(body.children, null, 2));
