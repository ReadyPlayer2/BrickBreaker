import Paddle from "./paddle.js";
import InputHandler from "./input.js";
import Ball from "./ball.js"
import {buildLevel, level1} from "./levels.js"

export default class Game {

    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
    }

    start() {
        this.paddle = new Paddle(this);
        this.ball = new Ball(this);

        let bricks = buildLevel(this, level1);

        this.gameObjects = [
            this.ball,
            this.paddle,
            ...bricks
        ]

        new InputHandler(this.paddle);
    }

    update(dt) {
        this.gameObjects.forEach(obect => obect.update(dt));

        this.gameObjects = this.gameObjects.filter(object => !object.markedForDeletion);
    }

    draw(ctx) {
        this.gameObjects.forEach((object) => object.draw(ctx));
    }
}