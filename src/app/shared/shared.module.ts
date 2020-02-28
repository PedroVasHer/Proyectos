import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExponentialPipe } from './pipes/exponentials/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ // esto le dice a los pipe y directivas que se cran en shared que tambien pueden ser usados
    // por otros componentes
    ExponentialPipe,
    HighlightDirective,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
