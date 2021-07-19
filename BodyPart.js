import { EventEmitter } from "events";

class BodyPart extends EventEmitter {
    children;

    constructor (...args) {
        super();
        this.children = []

        args.forEach(arg => {
            this.children.push(arg);
        });
    }
}

export {
    BodyPart
}
