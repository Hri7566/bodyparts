import { BodyPart } from "../BodyPart.js";
import { Nail } from "./Nail.js";

class Toe extends BodyPart {
    constructor () {
        super(new Nail());
    }
}

export {
    Toe
}
