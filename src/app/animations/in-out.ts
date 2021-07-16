import { trigger, state, style, animate, transition, group, keyframes } from '@angular/animations';

const enterOpacityTime = '500ms';
const enterTransformTime = '500ms';
const leaveOpacityTime = '500ms';
const leaveTransformTime = '500ms';

export const inOutAnimation = function(time: string = '500ms') {
  return trigger('inOutAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      group([
        animate(`${enterOpacityTime} ease-out`, style({ opacity: 1 })),
        animate(`${enterTransformTime} ease-out`, style({ transform: 'translateY(0px)' }))
      ])
    ]),
    transition(':leave', [
      style({ opacity: 1, transform: 'translateY(0px)' }),
      group([
        animate(`${leaveTransformTime} ease-out`, style({ transform: 'translateY(-40px)' })),
        animate(`${leaveOpacityTime} ease-out`, style({ opacity: 0, })),
      ])
    ])
  ])
}
