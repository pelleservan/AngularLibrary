import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import loansData from '../../assets/loans.json'

interface Loan {
  id: Number;
  user_name: String;
  start_date: String;
  book_title:String;
  status: String;
}

@Component({
  selector: 'app-loans',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loans.component.html',
  styleUrl: './loans.component.scss'
})
export class LoansComponent {
  loans: Loan[] = loansData;
}
