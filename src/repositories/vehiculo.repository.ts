import {Getter, inject} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasManyRepositoryFactory} from '@loopback/repository';
import {MysqlDataSource} from '../datasources';
import {Vehiculo, VehiculoRelations, Marca, Proveedor, Categoria, Fotos} from '../models';
import {CategoriaRepository} from './categoria.repository';
import {FotosRepository} from './fotos.repository';
import {MarcaRepository} from './marca.repository';
import {ProveedorRepository} from './proveedor.repository';

export class VehiculoRepository extends DefaultCrudRepository<
  Vehiculo,
  typeof Vehiculo.prototype.id,
  VehiculoRelations
> {

  public readonly vehiculopertenecemarca: BelongsToAccessor<Marca, typeof Vehiculo.prototype.id>;

  public readonly vehiculoperteneceproveedor: BelongsToAccessor<Proveedor, typeof Vehiculo.prototype.id>;

  public readonly vehiculopertenececategoria: BelongsToAccessor<Categoria, typeof Vehiculo.prototype.id>;

  public readonly vehiculotienefotos: HasManyRepositoryFactory<Fotos, typeof Vehiculo.prototype.id>;

  constructor(
    @inject('datasources.mysql') dataSource: MysqlDataSource, @repository.getter('MarcaRepository') protected marcaRepositoryGetter: Getter<MarcaRepository>, @repository.getter('ProveedorRepository') protected proveedorRepositoryGetter: Getter<ProveedorRepository>, @repository.getter('CategoriaRepository') protected categoriaRepositoryGetter: Getter<CategoriaRepository>, @repository.getter('FotosRepository') protected fotosRepositoryGetter: Getter<FotosRepository>,
  ) {
    super(Vehiculo, dataSource);
    this.vehiculotienefotos = this.createHasManyRepositoryFactoryFor('vehiculotienefotos', fotosRepositoryGetter,);
    this.registerInclusionResolver('vehiculotienefotos', this.vehiculotienefotos.inclusionResolver);
    this.vehiculopertenececategoria = this.createBelongsToAccessorFor('vehiculopertenececategoria', categoriaRepositoryGetter,);
    this.registerInclusionResolver('vehiculopertenececategoria', this.vehiculopertenececategoria.inclusionResolver);
    this.vehiculoperteneceproveedor = this.createBelongsToAccessorFor('vehiculoperteneceproveedor', proveedorRepositoryGetter,);
    this.registerInclusionResolver('vehiculoperteneceproveedor', this.vehiculoperteneceproveedor.inclusionResolver);
    this.vehiculopertenecemarca = this.createBelongsToAccessorFor('vehiculopertenecemarca', marcaRepositoryGetter,);
    this.registerInclusionResolver('vehiculopertenecemarca', this.vehiculopertenecemarca.inclusionResolver);



  }
}
