import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Fotos, FotosRelations} from '../models';

export class FotosRepository extends DefaultCrudRepository<
  Fotos,
  typeof Fotos.prototype.id,
  FotosRelations
> {
  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource,
  ) {
    super(Fotos, dataSource);
  }
}
