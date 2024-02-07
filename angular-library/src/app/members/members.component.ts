import { Component } from '@angular/core';
import membersData from '../../assets/members.json';
import { CommonModule } from '@angular/common';

interface Member {
  id: Number;
  name: String;
  adress: String;
  city: String;
  postal_code: String;
  email: String;
  phone: String;
}

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  members: Member[] = membersData;
}
