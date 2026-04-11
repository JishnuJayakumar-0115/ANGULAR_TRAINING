import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false,
})
export class FilterPipe implements PipeTransform {
  transform(items: string[], search: string): string[] {
    if (!items || !search) return items;

    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase()),
    );
  }
}
