import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/operators';
import { Student } from 'src/interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private API_KEY_GIPHY = 'NwN9H5yVM8wIc2nUG8rLXXlBq1BBjaDB';
private data = [];
private API_KEY = '8644d9a9';
private API_URL = '//www.omdbapi.com';

private __listNames: Array<Student> =
[
  {name: 'Laurent', sexe: 'man', age: 22},
  {name: 'Brigitte', sexe: 'female', age: 19},
  {name: 'Marc', sexe: 'man', age: 19},
  {name: 'Lola', sexe: 'female', age: 16},
  {name: 'Xavier', sexe: 'man', age: 25} ,
  {name: 'Idris', sexe: 'man', age: 21},
  {name: 'Laurine', sexe: 'female', age: 14},
  {name: 'Patrick', sexe: 'man', age: 17},
  {name: 'Sabrina', sexe: 'female', age: 20}
];

get listNames () {
 return this.__listNames;
}

constructor(private http: HttpClient) { }



}
