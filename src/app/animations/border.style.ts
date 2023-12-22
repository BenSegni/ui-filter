import { AnimationStyleMetadata, style } from "@angular/animations";

const borderStyle = (color: string) : AnimationStyleMetadata => style({ 'border-color': color, 'background-color': 'white', 'border-width': '.125rem',});
const start = 'black';
const end = 'hotpink' ;

export const borderStyles: AnimationStyleMetadata[] = [
    borderStyle(start),
    borderStyle(end),
    borderStyle(start),
    borderStyle(end),
    borderStyle(start),
    borderStyle(end),
]