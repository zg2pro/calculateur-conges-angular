import {Component, Inject, Injectable, InjectionToken} from '@angular/core';
import { CalculatorService } from '@zg2pro-org/calculateur-conges-api/dist/calculator/calculator.service';
import { SelfService } from '@zg2pro-org/calculateur-conges-api/dist/calculator/self.service';
import { CalculatorInput } from '@zg2pro-org/calculateur-conges-api/dist/calculator/calculator-input';
import moment from 'moment';
import {HttpClient} from '@angular/common/http';


@Injectable()
class WrappedSelfService extends SelfService {
  constructor(@Inject(HttpClient) protected http) {
    super(http);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: 'HttpService', useClass: HttpClient },
    CalculatorService, WrappedSelfService]
})
export class AppComponent {
  startDate = moment('2019-09-01', 'YYYY-MM-DD');
  endDate = moment('2020-09-01', 'YYYY-MM-DD');

  ci = new CalculatorInput();

  result = 0;

  constructor(private calculatorService: CalculatorService, private selfService: WrappedSelfService) {
    Object.assign(this.ci,  {
      startDate: '01-09-2019',
      endDate: '01-09-2020',
      unpaidWeeks: 0,
      extraUnpaidDays: 0,
      businessOpenOnSaturdays: false
    });
  }

  watchMethod() {
    console.log(this.startDate);
    this.ci.endDate = this.endDate.format('DD-MM-YYYY');
    this.ci.startDate =  this.startDate.format('DD-MM-YYYY');
    this.result = this.calculatorService.calculation(this.ci);
    //this.selfService.calculation(this.ci).subscribe((data: any) => this.result = data);
  }
}
