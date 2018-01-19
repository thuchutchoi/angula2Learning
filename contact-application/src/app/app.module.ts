/*
*tells Angular how to compile and run module code. 
It identifies the module’s own components, directives and pipes, 
making some of them public so external components can use them. 
It may add service providers to the application dependency injectors. 
And there are many more options covered here
*
*/

/*
*Mỗi ứng dụng Angular đều có ít nhất một Module đó là root Module, 
là nơi để khởi chạy ứng dụng. Module có thể chứa các components, pipes, directives, services, …
*
*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { ContactListComponent } from './container/contact-list/contact-list.component';
import { DumpComponentComponent } from './dump-component/dump-component.component';
import { GridEmploysComponent } from './grid-employs/grid-employs.component';
import {EmployeeService} from './grid-employs/app.service';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    DumpComponentComponent,
    GridEmploysComponent,
    LoginComponent,
    AppComponent,
    ContactListComponent
  ],
  imports: [BrowserModule,FormsModule,HttpModule],
  providers: [EmployeeService,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
