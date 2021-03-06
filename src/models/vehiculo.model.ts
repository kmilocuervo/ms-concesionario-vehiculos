import {belongsTo, Entity, hasMany, model, property} from '@loopback/repository';
import {Categoria} from './categoria.model';
import {Fotos} from './fotos.model';
import {Marca} from './marca.model';
import {Proveedor} from './proveedor.model';

@model()
export class Vehiculo extends Entity {
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
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  modelo: string;

  @property({
    type: 'string',
    required: true,
  })
  serie_chasis: string;

  @property({
    type: 'string',
    required: true,
  })
  serie_motor: string;

  @property({
    type: 'string',
    required: true,
  })
  precio: string;

  @property({
    type: 'string',
    required: true,
  })
  descuento: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estado: boolean;

  @belongsTo(() => Marca, {name: 'vehiculopertenecemarca'})
  idMarca: number;

  @belongsTo(() => Proveedor, {name: 'vehiculoperteneceproveedor'})
  idProveedor: number;

  @belongsTo(() => Categoria, {name: 'vehiculopertenececategoria'})
  idCategoria: number;

  @hasMany(() => Fotos, {keyTo: 'idVehiculo'})
  vehiculotienefotos: Fotos[];

  constructor(data?: Partial<Vehiculo>) {
    super(data);
  }
}

export interface VehiculoRelations {
  // describe navigational properties here
}

export type VehiculoWithRelations = Vehiculo & VehiculoRelations;
