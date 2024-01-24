import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact/contact.model';
import { ContactService } from 'src/app/shared/contact/contact.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-manage-contacts',
  templateUrl: './manage-contacts.component.html',
  styleUrls: ['./manage-contacts.component.css']
})
export class ManageContactsComponent implements OnInit{
  contacts: Contact[]=[]

  constructor(private contact: ContactService){}
  ngOnInit(): void {
    this.getContacts()
  }
  getContacts(){
    this.contact.getContacts().subscribe((contacts)=>{
      this.contacts = contacts;
    });
  }
  addContact(){
    
  }
  deleteContact(id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.contact.deleteContact(id); 
        Swal.fire(
          'Deleted!',
          'Your contact has been deleted.',
          'success'
        );
      }
    });
  }
  
}
