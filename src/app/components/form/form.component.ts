import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/DataService/data.service'
import { Person } from '../../models/Person';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  model: any = {};
  
  constructor(private dataservice:DataService) { }

  ngOnInit() {
  
  }
  options:Array<string>=["Hombre","Mujer"];
  fName:string = "";
  fP:string= "";
  fM:string= "";
  fSex:string= "";
  fAge:string= "";
  fEmail:string= "";
  
  icons:Array<string>=[
    "fas fa-archive",
    "fas fa-ad",
    "fas fa-archway",
    "fas fa-angle-right",
    "fas fa-adjust",
    "fas fa-allergies",
    "fas fa-anchor",
    "fas fa-american-sign-language-interpreting",
    "fas fa-angry",
    "fas fa-arrow-alt-circle-left" 
  ]
  
  
   //data:Array<Person> = [];
   dato:Person[]=[];
   data:Person[] = [];
  onSubmit(){
    
    //let person:Person = new Person(this.fName,this.fP,this.fM,this.fSex,this.fAge,this.fEmail,"dsf");
    //this.data.push(person);
    this.data.push(this.model.fName,this.model.fP,this.model.fM,this.model.fSex,this.model.fAge,this.model.fEmail,this.icons[this.getRandom()]);
    this.dato.push(this.data);
    //this.data[this.cont] = (this.fName,this.fP,this.fM,this.fSex,this.fAge,this.fEmail,"dsf");
    this.dataservice.changeMessage(this.dato);
    this.data = [];
  }

  public getRandom() {
    return Math.floor(Math.random() * 9) + 0;
    
  }
  

}
