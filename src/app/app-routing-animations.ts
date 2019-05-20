import { transition, trigger, query, style, animate, group } from '@angular/animations';

const styles = {transform: 'translateX(0)', position: 'absolute', top: 0, right: 0, width: '100%', opacity: '1'};
const animateBack = [
    query(':enter, :leave', style(styles), { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(-150%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(150%)', opacity: '0' }))
        ], { optional: true }),
    ])
]
const animateNext = [
    query(':enter, :leave', style(styles), { optional: true }),
    group([
        query(':enter', [
            style({ transform: 'translateX(150%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', opacity: '1' }))
        ], { optional: true }),
        query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-150%)', opacity: '0' }))
        ], { optional: true }),
    ])
]

export const slideInAnimation =
trigger('routeAnimations', [
    transition('jewelryType => jewelryMaterial', animateNext),

    transition('jewelryMaterial => jewelryType', animateBack),
    transition('jewelryMaterial => jewelryPiece', animateNext),

    transition('jewelryPiece => jewelryMaterial', animateBack),
    transition('jewelryPiece => jewelryCondition', animateNext),

    transition('jewelryCondition => jewelryPiece', animateBack),
    transition('jewelryCondition => jewelryIndication', animateNext),

    transition('jewelryIndication => jewelryCondition', animateBack),
    transition('jewelryIndication => jewelryFinalization', animateNext),

    transition('jewelryFinalization => jewelryIndication', animateBack),
    transition('jewelryFinalization => jewelryOverview', animateNext),

    transition('jewelryOverview => jewelryFinalization', animateBack),
    transition('jewelryOverview => jewelryCompletion', animateNext),
]);
