import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { Store } from '@ngrx/store';
import { CustomerState } from '../store/reducer/customer.reducer';
import * as CustomerActions from '../store/action/customer.actions';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.scss']
})
export class CustomerAddComponent implements OnInit {

  constructor(private store: Store<CustomerState>) {

  }

  addCustomer(customerName: string): void {
    const customer = new Customer();
    customer.name = customerName;
    this.store.dispatch(CustomerActions.addCustomer(customer));
  }

  ngOnInit(): void {
  }

}
