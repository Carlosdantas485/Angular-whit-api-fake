import { Component, OnInit } from '@angular/core';
import { CarService } from './services/car.service';
import { ICar } from './models/car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private carService: CarService){}
  
  getCars(){
    this.carService.getCars()
      .then(cars => console.log(cars))
      .catch(error => console.log(error))
  }
  ngOnInit() {
    
  }



}