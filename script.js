<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slappy Bird</title>
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
                    alert("Game Over!");
                    location.reload(); // 새로고침하여 재시작
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

        document.addEventListener("keydown", function(event) {
            if (event.code === "Space") {
                bird.jump();
            }
        });

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bird.update();
            bird.draw();

            requestAnimationFrame(gameLoop);
        }

        gameLoop();
    </script>
</body>
</html>
