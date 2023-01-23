import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CreateRecordComponent } from './records/create-record/create-record.component';
import { RecordListTableComponent } from './records/records-list-table/records-list-table.component';
import { FullRecordViewComponent } from './full-record-view/full-record-view.component';
import { ErrorComponent } from './error/error.component';
import { RecordsComponent } from './records/records.component';




const appRoute: Routes = [
  {path: '', redirectTo: 'records', pathMatch:'full'},
  {path: 'records', component : RecordsComponent},
  // All route that has ":id" will serve as the ID param of this link or route
  {path: 'record/:id', component : FullRecordViewComponent},
  // Error Routes should be always the last route
  {path: '**', component : ErrorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecordsComponent,
    CreateRecordComponent,
    RecordListTableComponent,
    FullRecordViewComponent,
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
