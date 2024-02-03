import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LibraryComponent } from './library/library.component';
import { MembersComponent } from './members/members.component';
import { LoansComponent } from './loans/loans.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'members', component: MembersComponent },
  { path: 'loans', component: LoansComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'home', component: HomeComponent},
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule, CommonModule]
})
export class AppRoutingModule { }
