import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home.component';

import { AppRoutingModule } from './app-routing.module';

import {EntityService} from './entity.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatListModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatSidenavModule} from '@angular/material';
import { UsersComponent, UsersComponentDialog } from './users/users.component';
import { RunsComponent } from './runs/runs.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersComponent,
    UsersComponentDialog,
    RunsComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule
  ],
  entryComponents: [
    UsersComponentDialog
  ],
  providers: [
    EntityService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
