import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[]=[];
  private contactsSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>([]);

  constructor(private toastr:ToastrService, private spinner: NgxSpinnerService, private router: Router) { }
  addContacts(contact: Contact){
      
      this.spinner.show()
      .then(()=>{
        this.contacts.push(contact);
        this.contactsSubject.next([...this.contacts]);
        this.toastr.success("Contact Added")
        this.spinner.hide()
        this.router.navigateByUrl("/admin/manage-contacts")
      })
      .catch((err:any)=>{
        this.toastr.error(err, "Error Occurred")
      })
  }

  getContacts():Observable<Contact[]>{
    return this.contactsSubject.asObservable();

  }

  deleteContact(id: any) {
    this.spinner.show()
      .then(() => {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        this.contactsSubject.next([...this.contacts]);
        
        this.toastr.success("Contact Deleted");
        this.spinner.hide();
      })
      .catch((err: any) => {
        this.toastr.error(err, "Error Occurred");
      });
  }
  
  getContactById(contactId: string): Observable<Contact> {
    const contact = this.contacts.find((c) => c.id === contactId);
    return new Observable((observer) => {
      if (contact) {
        observer.next(contact);
      } else {
        observer.error('Contact not found');
      }
      observer.complete();
    });
  }


  
  updateContact(contactId: string, updatedContact: Contact): Observable<void> {
    return new Observable((observer) => {
      const index = this.contacts.findIndex((c) => c.id === contactId);

      if (index !== -1) {
        
        this.contacts[index] = { ...this.contacts[index], ...updatedContact };
        this.contactsSubject.next([...this.contacts]);
        this.toastr.success('Contact Updated');
        this.spinner.hide();
        observer.next();
      } else {
        this.toastr.error('Contact not found', 'Error Occurred');
        observer.error('Contact not found');
      }

      observer.complete();
    });
  }

}
