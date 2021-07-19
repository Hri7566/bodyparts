import { BodyPart } from "../BodyPart.js";
import { Finger } from "./Finger.js";

class Hand extends BodyPart {
    constructor () {
        super(new Finger(), new Finger(), new Finger(), new Finger(), new Finger(), new Finger(), new Finger(), new Finger(), new Finger(), new Finger());
    }
}

export {
    Hand
}
