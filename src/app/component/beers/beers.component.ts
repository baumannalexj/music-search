import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {from, Observable, asyncScheduler} from 'rxjs';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  private id: string;

  constructor(private router: Router,
              private route: ActivatedRoute) {

    this.route
      .params
      .subscribe(params => {
        this.id = params["id"] || '';
      });


  }

  ngOnInit() {
    let drinkSubscriber = this.getDrinks()
      .flatMap(drinks => drinks)
      .subscribe(drink => {
        console.log("inside drink");
        console.log(drink.price); //TODO not working yet
      });

  }


  getDrinks() {
    let stella = {
      "name": "stella",
      "price": 9.99
    };

    let millerLite = {
      "name": "miller lite",
      "price": 2.99
    };


    let beerList = [];
    beerList[0] = stella;
    beerList[1] = millerLite;

    let beers = from(beerList, asyncScheduler);
    var sodaList = [
      {"name": "jarritos", "price": 1.99},
      {"name": "coke", "price": 2.99}
    ];

    let sodas = from(sodaList, asyncScheduler);

    return Observable.create(observer => {

      observer.next(beers);
      observer.next(sodas);
      observer.complete();

    });
  };

}
