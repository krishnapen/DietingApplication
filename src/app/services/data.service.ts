import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

export interface FoodItem {
  name: string;
  carbs: number;
  protein: number;
  fats: number;
  calories: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

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

  // public messages: Message[] = [
  //   {
  //     fromName: 'Matt Chorsey',
  //     subject: 'New event: Trip to Vegas',
  //     date: '9:32 AM',
  //     id: 0,
  //     read: false
  //   },
  //   {
  //     fromName: 'Lauren Ruthford',
  //     subject: 'Long time no chat',
  //     date: '6:12 AM',
  //     id: 1,
  //     read: false
  //   },
  //   {
  //     fromName: 'Jordan Firth',
  //     subject: 'Report Results',
  //     date: '4:55 AM',
  //     id: 2,
  //     read: false
  //   },
  //   {
  //     fromName: 'Bill Thomas',
  //     subject: 'The situation',
  //     date: 'Yesterday',
  //     id: 3,
  //     read: false
  //   },
  //   {
  //     fromName: 'Joanne Pollan',
  //     subject: 'Updated invitation: Swim lessons',
  //     date: 'Yesterday',
  //     id: 4,
  //     read: false
  //   },
  //   {
  //     fromName: 'Andrea Cornerston',
  //     subject: 'Last minute ask',
  //     date: 'Yesterday',
  //     id: 5,
  //     read: false
  //   },
  //   {
  //     fromName: 'Moe Chamont',
  //     subject: 'Family Calendar - Version 1',
  //     date: 'Last Week',
  //     id: 6,
  //     read: false
  //   },
  //   {
  //     fromName: 'Kelly Richardson',
  //     subject: 'Placeholder Headhots',
  //     date: 'Last Week',
  //     id: 7,
  //     read: false
  //   }
  // ];

  constructor() { }

  // public getMessages(): Message[] {
  //   return this.messages;
  // }

  // public getMessageById(id: number): Message {
  //   return this.messages[id];
  // }
}
