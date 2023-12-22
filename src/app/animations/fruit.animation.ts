import { AnimationTriggerMetadata, animate, keyframes, transition, trigger } from "@angular/animations";
import { borderStyles } from "./border.style";

export function fruitAnimation(): AnimationTriggerMetadata {
    return trigger('filteredFruit', [
        transition('* => true', [
            animate(
                '5000ms',
                keyframes(borderStyles)
            )
        ])
    ])
}