import { Component, OnInit } from '@angular/core';
import { DataService} from '../../services/DataService/data.service'
import { Person } from '../../models/Person';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private dataservice:DataService) { }
  data:Person[];
  
  ngOnInit() {
    
    this.dataservice.currentMessage.subscribe(message => this.data = message);
    
    console.log(this.data);
  }
  
}
