// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { Contact } from 'src/app/models/contact/contact.model';
// import { ContactService } from 'src/app/shared/contact/contact.service';

// @Component({
//   selector: 'app-update-contacts',
//   templateUrl: './update-contacts.component.html',
//   styleUrls: ['./update-contacts.component.css']
// })
// export class UpdateContactsComponent implements OnInit {
//   contactId!:string;
//   contactData: Contact = new Contact()

//   constructor(private route: ActivatedRoute, private contactService:ContactService) {}

//   ngOnInit(): void {
//     // Get the contactId from the route parameter
//     this.contactId = this.route.snapshot.paramMap.get('id')??'';

//     // Fetch the existing contact data based on the contactId
//     this.fetchContactData();
//   }

//   fetchContactData() {
//     // Call your service method to fetch the contact data based on the contactId
//     // Update the 'contactData' property with the fetched data
//     this.contactService.getContactById(this.contactId).subscribe((data) => {
//       this.contactData = data;
//     });
//   }
//   submit(){
//           console.log('Contact updated successfully');

//   }
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/shared/contact/contact.service';

@Component({
  selector: 'app-update-contacts',
  templateUrl: './update-contacts.component.html',
  styleUrls: ['./update-contacts.component.css']
})
export class UpdateContactsComponent implements OnInit{
  // contactData = new Contact()

  // submit(){
  //   console.log(this.contactData)
  // }
  contactId!: string;
  contactData: Contact = { id: '', name: '', email: '', contact: '' };

  constructor(private route: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit(): void {
    // Get the contactId from the route parameter
    this.contactId = this.route.snapshot.paramMap.get('id') || '';

    // Fetch the existing contact data based on the contactId
    this.fetchContactData();
  }

  fetchContactData() {
    // Call your service method to fetch the contact data based on the contactId
    this.contactService.getContactById(this.contactId).subscribe(
      (data) => {
        this.contactData = data;
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }

  submit() {
    // Call your service method to update the contact data
    this.contactService.updateContact(this.contactId, this.contactData).subscribe(
      () => {
        console.log('Contact updated successfully');
        // You can add navigation logic here if needed, for example:
        // this.router.navigate(['/admin/manage-contacts']);
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., show an error message to the user
      }
    );
  }

}
