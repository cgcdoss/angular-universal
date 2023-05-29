import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  public counter$ = new BehaviorSubject(0);
  public double$ = this.counter$.asObservable().pipe(
    map(value => value * 2),
  );

}
