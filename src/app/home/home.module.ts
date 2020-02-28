import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // cada modulo necesita reconocer las directivas como
// ng for, ng if, etc
import {BannerComponent } from './components/banner/banner.component';
import {HomeComponent } from './components/home/home.component';
import {SharedModule} from './../shared/shared.module';


import {HomeRoutingModule} from './home-routing.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [ // todo sistema de routing debe importarse
        HomeRoutingModule,
        SharedModule,
        CommonModule
    ]
})
export class HomeModule {

}
