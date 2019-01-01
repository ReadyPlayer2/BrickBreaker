export default class InputHandler {
    constructor(paddle) {
        document.addEventListener("keydown", (event) => {

            // Handle key press controls
            switch (event.keyCode) {
                case 37:
                    // LEFT
                    paddle.moveLeft();
                    break;

                case 39:
                    // RIGHT
                    paddle.moveRight();
                    break;
            }
        });

        document.addEventListener("keyup", (event) => {
            // Handle key release controls
            switch (event.keyCode) {
                case 37:
                    // LEFT
                    if (paddle.speed < 0) {
                        paddle.stop();
                    }
                    break;

                case 39:
                    // RIGHT
                    if (paddle.speed > 0) {
                        paddle.stop();
                    }
                    break;
            }
        })
    }
}