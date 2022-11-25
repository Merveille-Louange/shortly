import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [NavComponent, FooterComponent],
  exports: [NavComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SkeletonModule { }
