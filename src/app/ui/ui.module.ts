import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const uiComponents = [HeaderComponent, FooterComponent]

@NgModule({
  declarations: uiComponents,
  imports: [
    CommonModule
  ],
  exports: uiComponents
})
export class UiModule { }
