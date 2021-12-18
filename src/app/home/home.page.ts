import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import * as HighCharts from 'highcharts';

export interface FoodItem {
  name: string;
  carbs: number;
  protein: number;
  fats: number;
  calories: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }

  // refresh(ev) {
  //   setTimeout(() => {
  //     ev.detail.complete();
  //   }, 3000);
  // }

  public foodItems: FoodItem[] = [
    {
      name: 'Banana',
      carbs: 120,
      protein: 0,
      fats: 10,
      calories: 150
    },
    {
      name: "Mango",
      carbs: 22,
      protein: 344,
      fats: 5,
      calories: 250
    },
    {
      name: 'Apple',
      carbs: 200,
      protein: 210,
      fats: 30,
      calories: 445
    },
    {
      name: 'Orange ',
      carbs: 200,
      protein: 210,
      fats: 30,
      calories: 445
    }
  ];

  public saveArray: any = [];
  result: any;
  eventValue: any;

  calorieGoal: any = 0.5;

  calorieCount: any;

  OnChange(event) {
    // debugger
    this.eventValue = event.target.value;
    this.result = this.foodItems.filter(f => f.name == this.eventValue);
    this.saveArray.push(
      this.result[0]
    );
    console.log(event.target.value);
    console.log(this.saveArray);
    console.log("savedArray " + JSON.stringify(this.saveArray));

    // for (let i = 0; i < this.saveArray.length; i++) {
    //   this.calorieCount = this.calorieCount + this.saveArray[i].calories;
    // }

    

    this.saveArray.forEach(element => {
       this.calorieCount = element || 0;
       this.calorieCount = this.calorieCount + element.calories;
    });

    console.log("calories count " + this.calorieCount);

  }

  delete(saveArray, index) {
    this.saveArray.splice(index, 1)
  }


  ionViewDidEnter() {
    this.plotSimpleBarChart();
  }

  plotSimpleBarChart() {


    this.saveArray.forEach(element => {
       this.calorieCount = element.calories;
    });
     

    let myChart = HighCharts.chart('highcharts', {
      chart: {
        type: 'bar'
      },
      title: {
        text: 'Diet Tracker'
      },
      xAxis: {
        categories: ['Apples', 'Bananas', 'Oranges']
      },
      yAxis: {
        title: {
          text: 'Calories eaten'
        }
      },
      series: [
        {
          name: 'User',
          type: undefined,
          data: [300, 7, 3]
        }]
    });
  }

}
