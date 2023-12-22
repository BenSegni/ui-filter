import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'fruit'
})
export class FruitPipe implements PipeTransform {
    public transform(fruit: string, color: string): string {
        const values = [fruit, color];
        const includesAll = (array: string[], values: string[]) => values.every((v: string) => array.includes(v));

        switch (true) {
            case includesAll(values, ['Apple', 'Green']): return '../../assets/img/apple.svg';
            case includesAll(values, ['Apple', 'Red']): return '../../assets/img/red_apple.svg';
            case includesAll(values, ['Banana', 'Yellow']): return '../../assets/img/banana.svg';
            case includesAll(values, ['Lemon', 'Yellow']): return '../../assets/img/lemon.svg';
            case includesAll(values, ['Pear', 'Green']): return '../../assets/img/pear.svg';
            case includesAll(values, ['Cherry', 'Red']): return '../../assets/img/cherry.svg';
            case includesAll(values, ['Strawberry', 'Red']): return '../../assets/img/strawberry.svg';
            case includesAll(values, ['Watermelon', 'Red']): return '../../assets/img/watermelon.svg';
            default: return '../../assets/img/unhappy.webp';
        }
    }

}
