import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateRecordComponent } from './records/create-record/record.component';
import { RecordListComponent } from './records/record-list/record-list.component';
import { FullRecordComponent } from './full-record/full-record.component';
import { ErrorComponent } from './error/error.component';
import { RecordsComponent } from './records/records.component';




const appRoute: Routes = [
  {path: '', redirectTo: 'records', pathMatch:'full'},
  {path: 'records', component : RecordsComponent},
  {path: 'record', component : FullRecordComponent},
  // Error Routes should be always the last route
  {path: '**', component : ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordsComponent,
    CreateRecordComponent,
    RecordListComponent,
    FullRecordComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
