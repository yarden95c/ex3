$("nav").load("Menu.html");
function drawMaze() {
    maze = [[0, 1, 0, 0, 1], [1, 1, 0, 1, 0], [0, 1, 0, 1, 1], [1, 0, 0, 0, 0],[1, 1, 0, 1, 0],];
    var myCanvas = document.getElementById("mazeCanvas");
    myCanvas.style.cssFloat = "right";
    myCanvas.style.marginBottom = "50px"
    var context = mazeCanvas.getContext("2d");
    var rows = maze.length;
    var cols = maze[0].length;
    var cellWidth = mazeCanvas.width / cols;
    var cellHeight = mazeCanvas.height / rows;
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < cols; j++) {
            if (maze[i][j] == 1) {
                context.fillRect(cellWidth * j, cellHeight * i,
                    cellWidth, cellHeight);
            }
        }
    }
    return myCanvas;
}
this.drawMaze();
document.getElementById("searchAlgoeithm").style.display = "inline - block";
