# CalculateurCongesAngular


## Generation of an Angular project compatible with NestJS

1- 
```bash
$ npm install -g @angular/cli
$ ng new angular-app
$ cd angular-app
$ npm install --save cache-manager class-transformer class-validator core-js process @angular/material 
```

2- Also install the libs you want to use in your framework like bootstrap etc


3-To add your nest API also add this line in the package.json script :
```js
"scripts": {
    "update:zg2pro-org": "npm install @your-org/app-api@latest --save"
```
your-org being your subsection in your npm registry, and app-api the artifact id of your nestjs API.

4-Then go to the tsconfig.json and check the following properties :
```js
    "importHelpers": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "allowSyntheticDefaultImports": true,
```

5-Then go to your src/polyfills and add the following lines:
```js
import * as process from 'process';
window['process'] = process;
/** Evergreen browsers require these. **/
// Used for reflect-metadata in JIT. If you use AOT (and only Angular decorators), you can remove.
import 'core-js/es/reflect';
```

6- Also in the main.ts 
 ```js
import 'core-js/es/reflect';
```

7-Import your usual imported modules in your app.module.ts

8- Inject your NestJS services

8.1- If your service doesn't contain NestJs framework injections you can inject it directly:
 ```js
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculatorService]
})
export class AppComponent {
constructor(private calculatorService: CalculatorService){}
}
```

8.2- If your service requires another NestJs framework service (eg the HttpService), you'll have to replace it by the corresponding Angular service.
 ```js
@Injectable()
class WrappedNestService extends NestService {
  constructor(@Inject(HttpClient) protected http) {
    super(http);
  }
}
```

and a:
 ```js
providers: [{ provide: 'HttpService', useClass: HttpClient }
```
Will do the work of injecting HttpClient instead of what was previously injected in the Nest framework