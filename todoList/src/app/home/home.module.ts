import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
//import { TodoService } from '../services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  //  AngularFireModule.initializeApp(environment.firebase),
  //  AngularFireDatabaseModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
