import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  getAuthors(){
    return ["Dennis Ritchie", "Brian Kernighan"];
  }
  constructor() { }
}
