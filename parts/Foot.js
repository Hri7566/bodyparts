import { BodyPart } from "../BodyPart.js";
import { Nail } from "./Nail.js";
import { Toe } from "./Toe.js";

class Foot extends BodyPart {
    constructor () {
        super(new Toe(), new Toe(), new Toe(), new Toe(), new Toe(), new Toe(), new Toe(), new Toe(), new Toe(), new Toe());
    }
}

export {
    Foot
}
