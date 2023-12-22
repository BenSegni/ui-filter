import { Pipe, PipeTransform } from '@angular/core';
import { Fruit } from '../data/fruit';
import { Filter } from '../services/global.service';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(filter: Filter, fruit: Fruit): boolean {
        const filterValues = Object.values(filter);
        switch(true) {
            case !filterValues[0].length: return filterValues[1] === fruit.color;
            case !filterValues[1].length: return filterValues[0] === fruit.name;
            case filterValues.length === 2: return filterValues[0] === fruit.name && filterValues[1] === fruit.color;
            default: return false;
        }
    }
}
