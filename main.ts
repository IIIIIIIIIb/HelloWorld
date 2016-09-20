 var i : number = 0;
 var j : number = 0;
 var line : number = 0;
 
 var space = "";
 var star = "";
 var sp = " ";
 var st = "*";

 drawPyramid();

 function drawPyramid() : void{
     for(i = 0 ; i < 7; i++){
         for(j = 0; j < 7 - i; j++){
             space = space + sp;
         }
         for(j = 0; j < 2 * i + 1; j++){
             star = star + st;
         }
         console.log(space + star);
         space = ""
         star = ""
     }
 }

 function getLine(line : number) : number{
     return line;
 }
