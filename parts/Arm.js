import { BodyPart } from "../BodyPart.js";
import { Hand } from "./Hand.js";

class Arm extends BodyPart {
    constructor () {
        super(new Hand());
    }
}

export {
    Arm
}
