import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {
  public id;
  public fname;
  public lname;
  public email;
  public active;
  public doc;
  public dou;
  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.fname = this.route.snapshot.params['firstName'];
    this.lname = this.route.snapshot.params['lastName'];
    this.email = this.route.snapshot.params['email'];
    this.active = this.route.snapshot.params['isActive'];
    this.doc = this.route.snapshot.params['dateCreated'];
    this.dou = this.route.snapshot.params['dateUpdated'];
  }

}
