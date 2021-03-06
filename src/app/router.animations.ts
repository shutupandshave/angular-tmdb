import {trigger, state, animate, style, transition} from '@angular/animations';

export function routerTransition() {
    return slideToLeft();
}

/**
 * This function make an animation that change the page in form of slide
 * in left direction.
 */
export function slideToLeft() {
    return trigger('routerTransition', [
        state('void', style({position: 'absolute', width: '100%'}) ),
        state('*', style({position: 'absolute', width: '100%'}) ),
        transition(':enter', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [  // before 2.1: transition('* => void', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}