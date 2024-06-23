import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
[x: string]: any;
  title = 'demo-app';
  name = '';
  colorR ='';
  getVal(val: string){
    this.name = val;
    console.warn(this.name);
  }

  getColor(colorVal: string){
    console.log(colorVal)
    this.colorR = colorVal;
  }
  
  data = ['muthaahr', 'shaik', 'Aman', 'Sidra', 'Arsiya']

  getValues(value: string){
    console.log(value);
  }


}
