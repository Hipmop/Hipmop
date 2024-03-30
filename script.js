<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flappy Bird</title>
    <style>
        canvas {
            border: 1px solid black;
            display: block;
            margin: 0 auto;
        }
    </style>
</head>
<body>
    <canvas id="canvas" width="480" height="320"></canvas>
    <script>
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        const bird = {
            x: 50,
            y: canvas.height / 2,
            radius: 20,
            velocityY: 0,
            gravity: 0.5,
            jumpStrength: -10,

            jump: function() {
                this.velocityY = this.jumpStrength;
            },

            update: function() {
                this.velocityY += this.gravity;
                this.y += this.velocityY;

                // 캔버스를 벗어나면 게임 오버
                if (this.y > canvas.height || this.y < 0) {
                    reset();
                }
            },

            draw: function() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = "red";
                ctx.fill();
                ctx.closePath();
            }
        };

        const pipe = {
            width: 50,
            gap: 120,
            height: 200,
            x: canvas.width,
            speed: 2,
            draw: function() {
                ctx.fillStyle = "green";
                ctx.fillRect(this.x, 0, this.width, this.height);
                ctx.fillRect(this.x, this.height + this.gap, this.width, canvas.height - this.height - this.gap);
            },

            update: function() {
                this.x -= this.speed;
                if (this.x + this.width < 0) {
                    this.x = canvas.width;
                }
            }
        };

        function reset() {
            bird.y = canvas.height / 2;
            pipe.x = canvas.width;
        }

        document.addEventListener("keydown", function(event) {
            if (event.code === "Space") {
                bird.jump();
            }
        });

        function collisionDetection() {
            if (bird.x + bird.radius > pipe.x && bird.x - bird.radius < pipe.x + pipe.width &&
                (bird.y - bird.radius < pipe.height || bird.y + bird.radius > pipe.height + pipe.gap)) {
                reset();
            }
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bird.update();
            bird.draw();
            pipe.update();
            pipe.draw();
            collisionDetection();

            requestAnimationFrame(gameLoop);
        }

        gameLoop();
    </script>
</body>
</html>





