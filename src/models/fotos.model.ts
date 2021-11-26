import {Entity, model, property} from '@loopback/repository';

@model()
export class Fotos extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
  })
  idVehiculo?: number;

  constructor(data?: Partial<Fotos>) {
    super(data);
  }
}

export interface FotosRelations {
  // describe navigational properties here
}

export type FotosWithRelations = Fotos & FotosRelations;
