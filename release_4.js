// Optimize the solver function for better time complexity

var st = "";
var board = [
[0, 0 ,0 ,2 ,6 ,0 ,7, 0, 1],
[6 ,8 ,0 ,0 ,7 ,0 ,0 ,9 ,0],
[1 ,9 ,0 ,0 ,0 ,4 ,5 ,0 ,0],
[8 ,2 ,0 ,1 ,0 ,0 ,0 ,4 ,0],
[0 ,0 ,4 ,6 ,0 ,2 ,9 ,0 ,0],
[0 ,5 ,0 ,0 ,0 ,3 ,0 ,2 ,8],
[0 ,0 ,9 ,3 ,0 ,0 ,0 ,7 ,4],
[0 ,4 ,0 ,0 ,5 ,0 ,0 ,3 ,6],
[7 ,0 ,3 ,0 ,1 ,8 ,0 ,0 ,0]];

console.log("Sample Input:\n")
print(board,"\n")

function rows(board , row, val)
{
	for( var i=0 ; i<board[row].length ;i++)
	{
		if(board[row][i] === val)
			return false
	}
	return true;
}

function cols(board, col,val)
{
	for(var i=0 ; i<board.length ; i++)
	{
		if(board[i][col] === val)
			return false
	}
	return true;
}

function squ(board , row, col, val)
{
  var r1 = Math.floor(row/3)*3;
  var c1 = Math.floor(col/3)*3;
  for(r=0 ; r<3;r++)
  {
  	for(c=0 ; c<3;c++)
  	{
  		if(board[r1+r][c1+c] === val)
  		{
  			return false
  		}
  	}
  }
  return true;
}

function checkAll(board , row, col, val)
{
	if(rows(board,row,val)&&cols(board,col,val)&&squ(board,row,col,val))
	{
		return true
	}
	return false
}

function solve()
{
	for( var i =0 ; i<board.length ; i++)
	{
		for( var j=0 ;j<board[i].length; j++)
		{
			if(board[i][j] === 0 )
			{
				for(var z =1 ; z<10 ; z++)
				{
					if(checkAll(board,i,j,z))
					{
		 				board[i][j] = z;
						if(solve())
						{
							return true;
						}
						else
						{
							board[i][j] = 0;
						}
					}
				}
				return false;
			}
		}
	}
	return true;
}
function print()
{
	str = ""
	for(var a=0 ; a<board.length; a++)
	{
		for(var b=0 ; b<board[a].length; b++)
		{
         str = str + board[a][b] + " ";
		}
		console.log(str);
		str = "";
	}
}
solve();
console.log("\nsample Output:\n")
print();