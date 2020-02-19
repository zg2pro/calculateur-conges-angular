import { Component, Inject  } from '@angular/core';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { AppService as CalculatorService } from '@zg2pro-org/calculateur-conges-api/dist/app.service';
import { CalculationInput } from '@zg2pro-org/calculateur-conges-api/dist/calculation-input';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent {
  startDate = new Date(2019, 9, 1);
  endDate = new Date(2020, 9, 1);

  result = 0;

  constructor(private calculatorService: CalculatorService) { }

  watchMethod() {
    console.log(this.startDate);
    let ci = new CalculationInput();
    ci.endDate = this.endDate.toDateString();
    ci.startDate = this.startDate.toDateString();
    ci.unpaidWeeks = 0;
    ci.extraUnpaidDays = 0;
    ci.businessOpenOnSaturdays = false;
    this.calculatorService.calculation(ci);
  }
}
