import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  dish={
    id: 0,
    featured: true,
    name: 'Veg Pulao',
    image: '/assets/images/pulao.jpg',
    label: 'Hot',
    price: '150',
    description: 'An easy one pot Indian rice pilaf cooked with mild spices and veggies. ' +
    'Pulao or pulav is one of the most common rice dishes that is often made in most Indian homes',
    comments: [
      {
        rating: 5,
        comment: 'One of the best dishes in this restaurant',
        author: 'Akshay Gaikwad',
        date: '2012-10-16T17:57:28.556094Z'
      },
      {
        rating: 4,
        comment: 'Very delicious. I wish to come here again',
        author: 'Narendra Yadav',
        date: '2014-09-05T17:57:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Eat it, just eat it!',
        author: 'Vinod Mankare',
        date: '2015-02-13T17:57:28.556094Z'
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }

}
