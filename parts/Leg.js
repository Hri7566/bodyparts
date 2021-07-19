import { BodyPart } from "../BodyPart.js";
import { Foot } from "./Foot.js";

class Leg extends BodyPart {
    constructor () {
        super(new Foot());
    }
}

export {
    Leg
}
