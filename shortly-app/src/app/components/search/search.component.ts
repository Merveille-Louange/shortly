import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
heroForm: FormGroup = new FormGroup({});
  ngOnInit(): void {
  this.heroForm = new FormGroup({
    name: new FormControl("", [
      Validators.required,
      Validators.minLength(1),
    ]),
  });

}

get name() { return this.heroForm.get('name'); }

}
