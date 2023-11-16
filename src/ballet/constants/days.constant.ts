export enum Days {
  'L' = 'Lunes',
  'M' = 'Martes',
  'MI' = 'Miercoles',
  'J' = 'Jueves',
  'V' = 'Viernes',
  'S' = 'Sabado',
  'D' = 'Domingo',
}

export type typeEnumDays = keyof typeof Days;
