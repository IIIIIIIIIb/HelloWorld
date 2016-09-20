var i = 0;
var j = 0;
var line = 0;
var space = "";
var star = "";
var sp = " ";
var st = "*";
drawPyramid();
function drawPyramid() {
    for (i = 0; i < 7; i++) {
        for (j = 0; j < 7 - i; j++) {
            space = space + sp;
        }
        for (j = 0; j < 2 * i + 1; j++) {
            star = star + st;
        }
        console.log(space + star);
        space = "";
        star = "";
    }
}
function getLine(line) {
    return line;
}
