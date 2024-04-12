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

        // 이미지 로드 부분
        const birdImage = new Image();
        birdImage.src = 'https://www.google.com/search?q=%ED%94%8C%EB%A0%88%ED%94%BC+%EB%B2%84%EB%93%9C&tbm=isch&ved=2ahUKEwjC25zSuLuFAxU7evUHHfCWDi0Q2-cCegQIABAK&oq=%ED%94%8C%EB%A0%88%ED%94%BC+%EB%B2%84%EB%93%9C&gs_lp=EhJtb2JpbGUtZ3dzLXdpei1pbWciEO2UjOugiO2UvCDrsoTrk5wyBxAAGIAEGA1IiRhQtgJYzRZwA3gAkAECmAG5AaABlhCqAQQwLjEyuAEDyAEA-AEBqAIFwgIEECMYJ8ICBBAAGAPCAggQABiABBixA8ICBxAjGOoCGCfCAgcQABiABBgYwgIIEAAYgAQYogSIBgE&sclient=mobile-gws-wiz-img&ei=WoMYZsLGDLv01e8P8K266AI&bih=647&biw=360&client=ms-android-samsung-ss&prmd=ivsnmbz#imgrc=rP6bIwtlGIclPM'; // 

        const bird = {
            x: 50,
            y: canvas.height / 2,
            radius: 20,
            velocityY: 0,
            gravity: 0.03,
            jumpStrength: -1.5,

            jump: function() {
                this.velocityY = this.jumpStrength;
            },

            update: function() {
                this.velocityY += this.gravity;
                this.y += this.velocityY;

                if (this.y > canvas.height || this.y < 0) {
                    reset();
                }
            },

            // 공을 그리는 대신 이미지를 사용
            draw: function() {
                ctx.drawImage(birdImage, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
            }
        };

        const pipes = [];

        const pipe = {
            width: 50,
            gap: 120,
            minPipeHeight: 50,
            maxPipeHeight: 250,
            speed: 2,
            interval: 2000,
            lastPipeTime: 0,

            draw: function(x, height) {
                ctx.fillStyle = "green";
                ctx.fillRect(x, 0, this.width, height);
                ctx.fillRect(x, height + this.gap, this.width, canvas.height - height - this.gap);
            },

            update: function() {
                if (Date.now() - this.lastPipeTime > this.interval) {
                    const newX = canvas.width;
                    const randomHeight = Math.floor(Math.random() * (this.maxPipeHeight - this.minPipeHeight + 1)) + this.minPipeHeight;
                    pipes.push({ x: newX, height: randomHeight });
                    this.lastPipeTime = Date.now();
                }

                pipes.forEach(p => {
                    p.x -= this.speed;
                });

                if (pipes.length > 0 && pipes[0].x + this.width < 0) {
                    pipes.shift();
                }
            }
        };

        let score = 0;

        function reset() {
            bird.y = canvas.height / 2;
            bird.velocityY = 0;
            pipes.length = 0;
            score = 0;
        }

        document.addEventListener("touchstart", function(event) {
            bird.jump();
        });

        function collisionDetection() {
            pipes.forEach(p => {
                if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + pipe.width &&
                    (bird.y - bird.radius < p.height || bird.y + bird.radius > p.height + pipe.gap)) {
                    reset();
                }
            });
        }

        function gameLoop() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bird.update();
            bird.draw();
            pipe.update();
            pipes.forEach(p => pipe.draw(p.x, p.height));
            collisionDetection();

            pipes.forEach(p => {
                if (p.x + pipe.width < bird.x && !p.passed) {
                    score++;
                    p.passed = true;
                }
            });

            drawScore();

            requestAnimationFrame(gameLoop);
        }

        function drawScore() {
            ctx.fillStyle = "black";
            ctx.font = "20px Arial";
            ctx.fillText("Score: " + score, 10, 30);
        }

        gameLoop();
    </script>
</body>
</html>