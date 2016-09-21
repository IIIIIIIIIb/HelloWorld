 var i : number = 0;
 var j : number = 0;
 var n : number = 5;
 var f : number = 0;
 
 var space = "";
 var star = "";

 function drawPyramid(n : number) : void{
     for(i = 0 ; i < n; i++){
         for(j = 0; j < n - i; j++){
             space = space + " ";
         }
         for(j = 0; j < 2 * i + 1; j++){
             star = star + "*";
         }
         console.log(space + star);
         space = ""
         star = ""
     }
 }

 f = getf(n);
 drawPyramid(f);

 function getf(f : number) : number{
     return f;
 }


