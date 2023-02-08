import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-rat-in-a-maze',
  templateUrl: './rat-in-a-maze.component.html',
  styleUrls: ['./rat-in-a-maze.component.css']
})
export class RatInAMazeComponent implements OnInit {

  constructor() { }

  text = "";

  maze:any = [];
  N:number = 30;

  newmaze = [
    [1,0,1,1,1],
    [1,0,1,0,1],
    [1,0,1,1,1],
    [1,1,1,0,1],
    [0,0,0,1,1]
  ];

  ngOnInit(): void {
    this.makeMaze()
  }

  makeMaze(){
    for(let i = 0; i < this.N; i++){
      var row = []
      for(let j = 0; j < this.N; j++){
        let isBlocked: number = Math.round(Math.random()+0.35);
        row.push(isBlocked);
      }
      this.maze.push(row);
    }
  }

  solve(){
    if(!this.solveMaze(this.maze, 0, 0)){
      this.text = "Solution Does not Exist!"
    }else{
      this.solveMaze(this.maze, 0, 0);
    }
    
  }

  solveMaze(maze: any, x:number, y:number):Boolean{
    if(x==this.N-1 && y==this.N-1 && maze[x][y]==1){
      maze[x][y] = 2;
      return true;
    }
    if(x>=0 && x < this.N && y >= 0 && y < this.N && maze[x][y]==1){
      maze[x][y] = 2;
      let path: number = Math.round(Math.random()+0.35);
        if(path==0){
          if(this.solveMaze(maze, x, y+1)) return true;
        if(this.solveMaze(maze, x+1, y)) return true;
        }else{
          if(this.solveMaze(maze, x+1, y)) return true;
        if(this.solveMaze(maze, x, y+1)) return true;
        }
        
      maze[x][y] = 1;
      return false;
    }
    return false;
  }

}
