import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   countNumber = 0;
   req: any = null;
   rawData: any;
  
  constructor(private ser: CounterService) { }

  title = 'app';

  showList() {
      this.countNumber++;

      if (this.req != null && !this.req.closed) {
        this.req.unsubscribe();
      }

     this.req = this.ser.getLastCounter(this.countNumber).subscribe(
        res => {
          this.rawData = res;
        });
    }

    stopCall() {
      this.req.unsubscribe();
    }
}
