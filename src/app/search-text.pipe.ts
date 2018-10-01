import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(records: any, searchText: any): any {
    if (!searchText) {
      return records;
    }
    return records.filter(re =>
      re.id.toString() === searchText ||
      re.firstName.toLowerCase().indexOf(searchText.toLowerCase()) > -1 ||
      re.lastName.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
  }
}
