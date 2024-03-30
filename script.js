<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Button Clicker</title>
</head>
<body>
    <h1>Online Button Clicker</h1>
    <button id="clickButton">Click me!</button>
    <p>Number of clicks: <span id="clickCount">0</span></p>

    <script>
        let clickCount = 0;

        document.getElementById("clickButton").addEventListener("click", function() {
            clickCount++;
            document.getElementById("clickCount").textContent = clickCount;
        });
    </script>
</body>
</html>



