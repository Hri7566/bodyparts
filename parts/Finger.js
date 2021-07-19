import { BodyPart } from "../BodyPart.js";
import { Nail } from "./Nail.js";

class Finger extends BodyPart {
    constructor () {
        super(new Nail());
    }
}

export {
    Finger
}
