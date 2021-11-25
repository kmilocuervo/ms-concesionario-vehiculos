import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {
    foreignKeys: {
      fk_foto_id_vehiculo: {
        name: 'fk_foto_id_vehiculo',
        entity: 'Vehiculo',
        entityKey: 'id',
        foreignKey: 'idVehiculo',
      }
    },
  },
})
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
