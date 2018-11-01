import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/services/giphy.service';
import { Student } from 'src/interfaces/student';
import { StudentService } from 'src/services/user/student.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent implements OnInit {
  title = 'app';
  ListOfSrc: string[] = [];
  names: Array<string> = [];
  student: Student;
  ages = [16, 20, 25];
  constructor(public gif: GiphyService, public studentService: StudentService) {

  }
  ngOnInit() {
    this.gif.getGifs().subscribe( res => {
      this.ListOfSrc = res;
    });
  }

  getMovie() {
    this.gif.getMovie().subscribe(x => console.log(x));
  }

  public getStudent(value: string) {
     this.student = this.studentService.listNames.filter(e => e.name.toUpperCase() === value.toUpperCase())[0];
  }


public getGender(value: string) {
    return this.getStudentBygender(value);
  }

public getStudentBygender(gender) {
  this.names = [];
  if ( gender === 'man') {
      const namesM = this.studentService.listNames.filter(e => e.sexe === 'man').map(e => this.names.push(e.name));
  } else if (gender === 'female') {
    const namesF = this.studentService.listNames.filter(e => e.sexe === 'female').map(e => this.names.push(e.name));
}  else {
  this.names = [];
}
}


public filterFunction(value) {
  let filter, span;
  const div = document.getElementById('myDropdown');
  filter = value.toUpperCase();
  span = div.getElementsByTagName('span');
  for (let i = 0; i < span.length; i++) {
    span[i]['innerHTML'].toUpperCase().startsWith(filter) ? span[i].style.display = 'block' : span[i].style.display = 'none';
  }
}




}
