import { Component, Inject  } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AppService as CalculatorService } from '@zg2pro-org/calculateur-conges-api/dist/app.service';
import { CalculationInput } from '@zg2pro-org/calculateur-conges-api/dist/calculation-input';
import moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent {
  startDate = moment('2019-09-01', 'YYYY-MM-DD');
  endDate = moment('2020-09-01', 'YYYY-MM-DD');

  result = 0;

  constructor(private calculatorService: CalculatorService) { }

  watchMethod() {
    console.log(this.startDate);
    let ci = new CalculationInput();
    ci.endDate = this.endDate.format('DD-MM-YYYY');
    ci.startDate =  this.startDate.format('DD-MM-YYYY');
    ci.unpaidWeeks = 0;
    ci.extraUnpaidDays = 0;
    ci.businessOpenOnSaturdays = false;
    this.result = this.calculatorService.calculation(ci);
  }
}
