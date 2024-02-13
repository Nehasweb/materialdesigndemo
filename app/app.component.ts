import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TypeaheadModule, MatButtonModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent 
{
  title = 'materialdesign';
selected : any;
states : any ;
myOptions: any;

  constructor(public obj : FormBuilder)
  {}
  
  ContactForm = this.obj.group(
    {
      
      Name :['',Validators.required],
      Phone : ['',[Validators.required, Validators.maxLength(0-9)]],
      Email :['',Validators.required],
      City : ['',Validators.required],
      States :['',Validators.required],
      Zipcode :['',[Validators.required, Validators.minLength(5)]],
      Comments : ['',[Validators.required, Validators.minLength(30)]],
      
    }
  );
  
}
