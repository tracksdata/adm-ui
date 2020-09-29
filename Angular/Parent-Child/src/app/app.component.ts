import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent-Child';

  msg:string;

  greet(s1){
    console.log('----- greet:: '+s1);
    this.msg=s1;
    
  }
}
