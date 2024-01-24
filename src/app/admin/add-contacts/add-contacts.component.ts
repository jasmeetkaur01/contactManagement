import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/shared/contact/contact.service';

@Component({
  selector: 'app-add-contacts',
  templateUrl: './add-contacts.component.html',
  styleUrls: ['./add-contacts.component.css']
})
export class AddContactsComponent {
  constructor(private contactService: ContactService){

  }
  contactData = new Contact()

  submit(){
    // console.log(this.contactData)
    this.contactService.addContacts(this.contactData)
    this.contactData.registeredAt= Date.now()
    this.contactData.status= true
    
  }

}

