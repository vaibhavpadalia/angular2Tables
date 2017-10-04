import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  records: Array<any>;
  constructor() {
    this.records = [
      {
        id: 1,
        lastName: "doe",
        firstName: "john",
        email: "john.doe@example.com",
        isActive: "yes",
        dateCreated: "2007-08-30 23:23:13",
        dateUpdated: "2008-08-08 12:28:24"
      },
      {
        id: 2,
        lastName: "feraro",
        firstName: "richard",
        email: "richardferaro@localhost.local",
        isActive: "yes",
        dateCreated: "2010-05-10 15:25:47",
        dateUpdated: "2010-05-10 15:25:48"
      },
      {
        id: 3,
        lastName: "dela cruz",
        firstName: "Juan",
        email: "juan@localhost.com",
        isActive: "yes",
        dateCreated: "2010-08-17 12:13:05",
        dateUpdated: "2010-08-17 12:13:05"
      },
      {
        id: 4,
        lastName: "dela cruzx",
        firstName: "Juan",
        email: "juanx@localhost.com",
        isActive: "yes",
        dateCreated: "2010-08-17 12:19:40",
        dateUpdated: "2010-08-17 12:19:40"
      },
      {
        id: 5,
        lastName: "dela Cruz",
        firstName: "Juan",
        email: "sample@localhost.local",
        isActive: "yes",
        dateCreated: "2010-08-17 12:34:48",
        dateUpdated: "2010-08-17 12:34:48"
      }
    ];
   }

  ngOnInit() {
  }
  sortTable(n: number) {
  let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("table1");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (dir === "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      } else if (dir === "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount++;
    }
    else {
      if (switchcount === 0 && dir === "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
search() {
  let input, filter, table, tr, td, i;
  input = document.getElementById("enter");
  filter = input.value.toUpperCase();
  table = document.getElementById("table1");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
}
