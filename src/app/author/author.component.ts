import { Component, OnInit } from "@angular/core";
import { AuthorService } from "../author.service";

@Component({
  selector: "app-author",
  //templateUrl: './author.component.html',
  template: `<h2>{{ getTitle() }}</h2>
    <ul>
      <li *ngFor="let author of authors">{{ author }}</li>
    </ul> `,
  styleUrls: ["./author.component.less"],
})
export class AuthorComponent implements OnInit {
  title = "List of Author(s)";
  authors;
  getTitle() {
    return this.title;
  }
  constructor(service: AuthorService) {
    this.authors = service.getAuthors();
  }

  ngOnInit() {}
}
