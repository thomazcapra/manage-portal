import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  form = new FormGroup({
    // Identification
    name: new FormControl(),
    maritalStatus: new FormControl(),
    gender: new FormControl(),
    disabledPerson: new FormControl(),
    country: new FormControl(),
    naturalness: new FormControl(),
    birthdate: new FormControl(),
    image: new FormControl(),
    address: new FormControl(),
    city: new FormControl(),
    postalCode: new FormControl(),
    location: new FormControl(),
    district: new FormControl(),
    county: new FormControl(),

    // Professional Information
    department: new FormControl(),
    qualification: new FormControl(),
    category: new FormControl(),
    manager: new FormControl(),

    // Tax Data
    taxNumber: new FormControl(),
    benefitNumber: new FormControl(),
    irsTable: new FormControl(),
    fiscalAddress: new FormControl(),
    dependentsNumber: new FormControl(),
    disabledDependentsNumber: new FormControl(),

    // Portal Information
    email: new FormControl(),
    password: new FormControl(),
    passwordConfirmation: new FormControl(),

    // Documents

    identificationNumber: new FormControl(),


  });

  constructor() {}

  ngOnInit() {}
}
