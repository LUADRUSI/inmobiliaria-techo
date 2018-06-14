import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetUsersComponent } from "./get-users/get-users.component";
import { PostUsersComponent } from "./post-users/post-user.component";
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule, MatCheckboxModule, MatIconModule, MatInputModule, MatMenuModule, MatCardModule } from "@angular/material";
import { MatListModule } from "@angular/material/list";
import { MatTabsModule} from "@angular/material/tabs";




@NgModule({
  declarations: [
    AppComponent,
    GetUsersComponent,
    PostUsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatMenuModule,
    MatCardModule,
    MatTabsModule,
    MatInputModule,
    MatListModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
