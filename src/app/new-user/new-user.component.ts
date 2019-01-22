import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AvatarDialogComponent } from "../avatar-dialog/avatar-dialog.component";
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from "@angular/router";



@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  exampleForm: FormGroup;
  avatarLink: string = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
  cat: string; 

  validation_messages = {
   'category': [
     { type: 'required', message: 'Name is required.' }
   ],
   'name': [
     { type: 'required', message: 'Surname is required.' }
   ],
   'questions': [
     { type: 'required', message: 'Age is required.' },
   ],
   'facts': [
    { type: 'required', message: 'Age is required.' },
  ]
 };

 


  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public firebaseService: FirebaseService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.createForm();
    this.getData();
    this.cat = this.route.snapshot.queryParamMap.get("cat")
  this.route.queryParamMap.subscribe(queryParams => {
    this.cat = queryParams.get("cat")
  })
  }

  createForm() {
    this.exampleForm = this.fb.group({
      category: ['', ],
      name: ['', Validators.required ],
      questions: ['', Validators.required ],
      facts: ['', Validators.required ],
    });
  }

  

  openDialog() {
    const dialogRef = this.dialog.open(AvatarDialogComponent, {
      height: '400px',
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.avatarLink = result.link;
      }
    });
  }

  resetFields(){
    this.avatarLink = "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg";
    this.exampleForm = this.fb.group({
      category: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      questions: new FormControl('', Validators.required),
      facts: new FormControl('', Validators.required),
    });
  }

  onSubmit(value){
    value['category'] = this.cat;
    this.firebaseService.createUser(value, this.avatarLink)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/thanks']);
      }
    )
  }

  ageValue: number = 0;
  searchValue: string = "";
  items: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  getData(){
    this.firebaseService.getParameters()
    .subscribe(result => {
      this.items = result;
      this.age_filtered_items = result;
      this.name_filtered_items = result;
    })
  }

  viewDetails(item){
    this.router.navigate(['/details/'+ item.payload.doc.id])
  }

  capitalizeFirstLetter(value){
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

  searchByName(){
    let value = this.searchValue.toLowerCase();
    this.firebaseService.searchUsers(value)
    .subscribe(result => {
      this.name_filtered_items = result;
      this.items = this.combineLists(result, this.age_filtered_items);
    })
  }

  rangeChange(event){
    this.firebaseService.searchUsersByAge(event.value)
    .subscribe(result =>{
      this.age_filtered_items = result;
      this.items = this.combineLists(result, this.name_filtered_items);
    })
  }

  combineLists(a, b){
    let result = [];

    a.filter(x => {
      return b.filter(x2 =>{
        if(x2.payload.doc.id == x.payload.doc.id){
          result.push(x2);
        }
      });
    });
    return result;
  }

}
