







var puzzle = [
    [5,3,0,0,7,0,0,0,0,],
    [6,0,0,1,9,5,0,0,0,],
    [0,9,8,0,0,0,0,6,0,],
    [8,0,0,0,6,0,0,0,3,],
    [4,0,0,8,0,3,0,0,1,],
    [7,0,0,0,2,0,0,0,6,],
    [0,6,0,0,0,0,2,8,0,],
    [0,0,0,4,1,9,0,0,5,],
    [0,0,0,0,8,0,0,7,9,],

];
function sudokusolution(puzzle){
    var notrequirenumbers={};
    for(var row=0;row<puzzle.length;row++){
        for(var column=0;column<puzzle.length;column++){
          if(puzzle[row][column]===0){
              notrequirenumbers={};
                for (var i=0;i<9;i++){
                    if(puzzle[i][column]>0){
                     notrequirenumbers[puzzle[i][column]]= true;
                        if(puzzle[row][i]>0){
                            notrequirenumbers[puzzle[row][i]]=true;
                        }
                        for(var innerrowbox =Math.floor(row/3)*3;innerrowbox<Math.floor(row/3)*3+3;innerrowbox++){
                            for(var innercolumnbox =Math.floor(column/3)*3;innercolumnbox<Math.floor(column/3)*3+3;innercolumnbox++){
                                if(puzzle[innerrowbox][innercolumnbox]){
				    notrequirenumbers[puzzle[innerrowbox][innercolumnbox]]=true;
                                }
                            }

                        }
                        console.log(notrequirenumbers);
                    
                    }
                }
            }
        }
           
    }
}


