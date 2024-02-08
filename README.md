Front-end app for a public library

Visit : https://angular-library-sigma.vercel.app/

# AngularLibrary

## Content
<!-- vscode-markdown-toc -->
* 1. [ Subject](#1-subject)
* 2. [ Modalities](#2-modalities)
	* 2.1. [Technicalstack](#21-technicalstack)
	* 2.2. [Deliverables](#22-deliverables)
* 3. [GetProject](#3-getproject)
	* 3.1. [ Clone](#31-clone)
	* 3.2. [ Launch](#32-launch)
* 4. [Front-End](#4-front-end)
* 5. [Components](#5-components)
* 6. [Structure](#6-structure)
* 7. [Data](#7-data)
	* 7.1. [Library](#71-library)
	* 7.2. [Members](#72-members)
	* 7.3. [Loans](#73-loans)
* 8. [Usage of data](#8-usage-of-data)
	* 8.1. [Interfaces](#81-interfaces)
		* 8.1.1. [Books `library.components.ts`](#811-books-librarycomponentsts)
		* 8.1.2. [Members `members.components.ts`](#812-members-memberscomponentsts)
		* 8.1.3. [Loans](#813-loans)
	* 8.2. [Class](#82-class)
		* 8.2.1. [Books `library.components.ts`](#821-books-librarycomponentsts)
		* 8.2.2. [Members `members.components.ts`](#822-members-memberscomponentsts)
		* 8.2.3. [Loans `members.components.ts`](#823-loans-memberscomponentsts)
	* 8.3. [Front](#83-front)
		* 8.3.1. [Books `library.components.html`](#831-books-librarycomponentshtml)
		* 8.3.2. [Members `members.components.html`](#832-members-memberscomponentshtml)
		* 8.3.3. [Loans `loans.components.html`](#833-loans-loanscomponentshtml)
	* 8.4. [Preview](#84-preview)
		* 8.4.1. [Books `http://localhost:4200/library`](#841-books-httplocalhost4200library)
		* 8.4.2. [Members `http://localhost:4200/members`](#842-members-httplocalhost4200members)
		* 8.4.3. [Loans `http://localhost:4200/loans`](#843-loans-httplocalhost4200loans)
* 9. [Moredetails](#9-moredetails)
	* 9.1. [Books](#91-books)
	* 9.2. [Members](#92-members)
	* 9.3. [Loans](#93-loans)
* 10. [Contact](#10-contact)
	* 10.1. [Front-end :](#101-front-end)
	* 10.2. [Back-end :](#102-back-end)
* 11. [Routes](#11-routes)
	* 11.1. [Routes `./angular-library/src/app/app.component.ts` :](#111-routes-angular-librarysrcappappcomponentts)
	* 11.2. [Header `./angular-library/src/app/core/header/header.component.html` :](#112-header-angular-librarysrcappcoreheaderheadercomponenthtml)

<!-- vscode-markdown-toc-config
	numbering=true
	autoSave=true
	/vscode-markdown-toc-config -->
<!-- /vscode-markdown-toc -->

##  1. <a name='Subject'></a> Subject

The project is to develop a front-end app for a public library that displays a navigation bar with :
  - Link to books list.
  - Link to members list.
  - Link to loans list.
  - Contact form.

List are loaded from static json files stored in the backend.
Each list enables a click to a detail screen, showing the details of :
- Book.
- Member.
- Loan.

Contact form enables to enter an email and a message, with a button to send the message (an alert or a modal will be displayed with the content entered).

##  2. <a name='Modalities'></a> Modalities

Project has to be done individually or by pair.  

###  2.1. <a name='Technicalstack'></a>Technicalstack

Front-end will be built using Angular.

An additional CSS lib can be used for a better design, but it is not mandatory.

###  2.2. <a name='Deliverables'></a>Deliverables

The expected deliverable will be a Git repo or a zip of your source code, with all your source files.

Send the URL of the Git repo or the zip to your teacher thanks to Mootse.

Please send it for date 05/02 at 00:00

##  3. <a name='GetProject'></a>GetProject

###  3.1. <a name='Clone'></a> Clone

To clone this project locally onto your machine, run the following command in your terminal:

```bash
git clone https://github.com/pelleservan/AngularLibrary.git
```

Make sure you have __Node.js__ and __npm__ installed on your system. If not, you can download and install them from the official Node.js website.

Once the repository is cloned, you can navigate to the project directory using the following command:

```bash
cd my-angular-project
```

###  3.2. <a name='Launch'></a> Launch
To launch the application, follow these steps:

1. Install all project dependencies by running the following command:
```bash
npm install
```
2. Once all dependencies are installed, start the application by running the following command:
```bash
ng serve
```

3. Open your web browser and navigate to the following URL: http://localhost:4200/.

##  4. <a name='Front-End'></a>Front-End

Using Bootstrap framework for front-end managment.

##  5. <a name='Components'></a>Components
We developed header to structure our project :
1. Commons : 
    - Header
    - Footer
2. Home
3. Library
4. Members
5. Loans
6. Contact

##  6. <a name='Structure'></a>Structure

From the previous component we can define the following structure :

```bash
├── README.md
├── angular-library
│   ├── README.md
│   ├── angular.json
│   ├── package-lock.json
│   ├── package.json
│   ├── server.ts
│   ├── src
│   │   ├── app
│   │   │   ├── contact-form
│   │   │   ├── core
│   │   │   │   ├── footer
│   │   │   │   └── header
│   │   │   ├── home
│   │   │   ├── library
│   │   │   ├── loans
│   │   │   └── members
│   │   ├── assets
│   │   │   ├── books.json
│   │   │   ├── fonts
│   │   │   ├── images
│   │   │   ├── loans.json
│   │   │   ├── members.json
│   │   ├── index.html
│   │   ├── main.server.ts
│   │   ├── main.ts
│   │   └── styles.scss
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   └── tsconfig.spec.json
└── package-lock.json
```

##  7. <a name='Data'></a>Data

All the data stored in  `./angular-library/src/assets`.

###  7.1. <a name='Library'></a>Library

Use JSON file from `https://github.com/benoitvallon/100-best-books.git`:
1. JSON file `./books.json` :
```json
{
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "imageLink": "images/things-fall-apart.jpg",
    "language": "English",
    "link": "https://en.wikipedia.org/wiki/Things_Fall_Apart\n",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  }
```
2. Book cover `./static/images` :

![./angular-library/src/assets/images/a-Dolls-house.jpg](./angular-library/src/assets/images/a-Dolls-house.jpg)

We will use this dataset to display a liste of books with some details. We can get more details with a click on details as is present below :

###  7.2. <a name='Members'></a>Members

Use a JSON file written by ChatGPT with a given template :
1. Members `./angular-library/src/assets/members.json` :
```json
{
    "id": 1,
    "name": "Jean Dupont",
    "adress": "123 rue de la Bibliothèque",
    "city": "Paris",
    "postal_code": "75001",
    "email": "jean.dupont@example.com",
    "phone": "01 23 45 67 89"
  },
```

We will use this dataset to display a table of members with some details. We can get more details with a click on details as is present below :

###  7.3. <a name='Loans'></a>Loans

Use a JSON file writen by ChatGPT with a given template :
1. Loans `./angular-library/src/assets/loans.json` :
```json
{
    "id": 1,
    "user_name": "Alice Smith",
    "start_date": "2024-01-29",
    "book_title": "The Great Gatsby",
    "status": "ongoing"
  }
```

We will use this dataset to display a table of loans with some details. We can get more details with a click on details as is present below :

##  8. <a name='Usageofdata'></a>Usage of data

###  8.1. <a name='Interfaces'></a>Interfaces

To use data stored in `assets` we defind a interface in relevent components to load data from JSON.
####  8.1.1. <a name='Bookslibrary.components.ts:'></a>Books `library.components.ts` :
```ts
interface Book {
  author: String;
  country: String;
  imageLink: String;
  language: String;
  link: String;
  pages: Number;
  title: String;
  year: Number;
}
```
####  8.1.2. <a name='Membersmembers.components.ts:'></a>Members `members.components.ts` :
```ts
interface Member {
  id: Number;
  name: String;
  adress: String;
  city: String;
  postal_code: String;
  email: String;
  phone: String;
}
```
####  8.1.3. <a name='Loans-1'></a>Loans
```ts
interface Loan {
  id: Number;
  user_name: String;
  start_date: String;
  book_title:String;
  status: String;
}
```

###  8.2. <a name='Class'></a>Class

To be use by the front we define tables of this interface in our class afeter imported the json files :

####  8.2.1. <a name='Bookslibrary.components.ts:-1'></a>Books `library.components.ts` :
```ts
import membersData from '../../assets/members.json';

export class MembersComponent {
  members: Member[] = membersData;
}
```
####  8.2.2. <a name='Membersmembers.components.ts:-1'></a>Members `members.components.ts` :
```ts
import membersData from '../../members/members.json';

export class MembersComponent {
  members: Member[] = membersData;
}
```
####  8.2.3. <a name='Loansmembers.components.ts:'></a>Loans `members.components.ts` :
```ts
import membersData from '../../assets/loans.json';

export class LoansComponent {
  loans: Loan[] = loansData;
}
```

###  8.3. <a name='Front'></a>Front

Now we can use the data in front.
####  8.3.1. <a name='Bookslibrary.components.html:'></a>Books `library.components.html` :
```html
<div class="card box-shadow h-100">
  <img class="card-img-top" src="{{ book.imageLink }}" alt="{{ book.title }}">
  <div class="card-body">
    <h5 class="card-title">{{ book.title }}</h5>
    <p class="card-text">Author: {{ book.author }}</p>
  </div>
  <details>
    <summary>Details</summary>
      <p class="card-text">Country: {{ book.country }}</p>
      <p class="card-text">Year: {{ book.year }}</p>
      <p class="card-text">Language: {{ book.language }}</p>
      <p class="card-text">Pages: {{ book.pages }}</p>
      <p class="card-text">Link: <a href="{{ book.link }}" target="_blank">{{ book.link }}</a></p>
  </details>
</div>
```
####  8.3.2. <a name='Membersmembers.components.html:'></a>Members `members.components.html` :
```html
<table class="table table-bordered">
  <thead>
    <tr class="table-header">
      <th>Name</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let member of members; let i = index">
      <tr [ngClass]="i % 2 === 0 ? 'table-row-even' : 'table-row-odd'">
        <td>{{ member.name }}</td>
        <td>{{ member.email }}</td>
        <td>{{ member.phone }}</td>
        <td>
          <details>
            <summary>Details</summary>
            <p class="">Address: {{ member.adress }}, {{ member.city }}, {{ member.postal_code }}</p>
          </details>
        </td>
      </tr>
    </ng-container>
  </tbody>
</table>
```
####  8.3.3. <a name='Loansloans.components.html:'></a>Loans `loans.components.html` :
```html
<table class="table table-bordered">
  <thead>
    <tr class="table-header">
      <th>Member</th>
      <th>Book</th>
      <th>Status</th>
      <th>Details</th>
    </tr>
  </thead>
  <tbody>
    <ng-container *ngFor="let loan of loans; let i = index">
      <tr [ngClass]="i % 2 === 0 ? 'table-row-even' : 'table-row-odd'">
        <td>{{ loan.user_name }}</td>
        <td>{{ loan.book_title }}</td>
        <td>
          <span class="status-badge" [ngClass]="{ 'status-ongoing': loan.status === 'ongoing', 'status-done': loan.status === 'done' }"></span>
          {{ loan.status }}
        </td>
        <td>
          <details>
            <summary>Details</summary>
            <p class="">Start date: {{ loan.start_date }}</p>
          </details>
        </td>
      </tr>
    </ng-container>
  </tbody>
</table>
```

###  8.4. <a name='Preview'></a>Preview
Thanks to this we can get the following 
####  8.4.1. <a name='Bookshttp:localhost:4200library:'></a>Books `http://localhost:4200/library` :

![./angular-library/src/assets/snip/books.png](./angular-library/src/assets/snip/books.png)

####  8.4.2. <a name='Membershttp:localhost:4200members:'></a>Members `http://localhost:4200/members` :

![./angular-library/src/assets/snip/members.png](./angular-library/src/assets/snip/members.png)

####  8.4.3. <a name='Loanshttp:localhost:4200loans:'></a>Loans `http://localhost:4200/loans` :

![./angular-library/src/assets/snip/loans.png](./angular-library/src/assets/snip/loans.png)

##  9. <a name='Moredetails'></a>Moredetails

To get more details about the different topics we can click on on `Details` button. To link this section to data we defind 

###  9.1. <a name='Books'></a>Books

![./angular-library/src/assets/snip/books_details.png](./angular-library/src/assets/snip/books_details.png)

###  9.2. <a name='Members-1'></a>Members

![./angular-library/src/assets/snip/members_details.png](./angular-library/src/assets/snip/members_details.png)

###  9.3. <a name='Loans-1'></a>Loans

![./angular-library/src/assets/snip/loans_details.png](./angular-library/src/assets/snip/loans_details.png)

##  10. <a name='Contact'></a>Contact

###  10.1. <a name='Front-end:'></a>Front-end :

```html
<h1 class=""><span>&lt;</span>Contact<span>/&gt;</span></h1>
  <div class="container">
    <form (ngSubmit)="submitForm()">
        <div class="form-group">
          <label for="email"><span>#</span> Email</label>
          <input type="email" class="form-control" id="email" name="email" [(ngModel)]="email">
        </div>
        <div class="form-group">
          <label for="message"><span>#</span> Message</label>
          <textarea class="form-control" id="message" name="message" rows="5" [(ngModel)]="message"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
    </form>
  </div>
```

###  10.2. <a name='Back-end:'></a>Back-end :

```ts
export class ContactFormComponent {
    email:string =  '';
    message:string = '';

  submitForm(): void {
    alert(`Email: ${this.email}\nMessage: ${this.message}`);
  }
}
```

### 10.3. Result

![./angular-library/src/assets/snip/Enregistrement-de-l’écran-2024-02-08-à-13.46.01.gif](./angular-library/src/assets/snip/Enregistrement-de-l’écran-2024-02-08-à-13.46.01.gif)


##  11. <a name='Routes'></a>Routes
To get acces to this content we define a `header` for a better navigation and routes in `app.component`

###  11.1. <a name='Routes.angular-librarysrcappapp.component.ts:'></a>Routes `./angular-library/src/app/app.component.ts` :
```ts
import { LibraryComponent } from './library/library.component';
import { MembersComponent } from './members/members.component';
import { LoansComponent } from './loans/loans.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'library', component: LibraryComponent },
  { path: 'members', component: MembersComponent },
  { path: 'loans', component: LoansComponent },
];
```

###  11.2. <a name='Header.angular-librarysrcappcoreheaderheader.component.html:'></a>Header `./angular-library/src/app/core/header/header.component.html` :
```html
<header>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div>
      <a class="navbar-brand" href="/home">{{ title }}</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="/library">Books</a>
          <a class="nav-link active" href="/members">Members</a>
          <a class="nav-link active" href="/loans">Loans</a>
          <a class="nav-link active" href="/contact-form">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</header>
```

