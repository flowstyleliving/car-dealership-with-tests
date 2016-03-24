namespace app.service {
  interface ICarResourceClass extends ng.resource.IResource<ICarResourceClass>, app.i.ICar {};

  interface ICarResource extends ng.resource.IResourceClass<ICarResourceClass> {};

  export class CarService {
    private CarResource: ICarResource;

    public getAll(){
      return this.CarResource.query();
    }

    public getOne(id: string) {
      return this.CarResource.get({id: id});
    }

    public remove(id: string) {
      return this.CarResource.delete({id: id}).$promise;
    }

    public add(car: app.i.ICar) {
      return this.CarResource.save(car).$promise;
    }

    public edit(car: app.i.ICar) {
      return this.CarResource.save(car).$promise;
    }

    constructor(private $resource: ng.resource.IResourceService) {
      this.CarResource = <ICarResource>$resource('/api/v1/cars/:id')
    }
  }
  angular.module('app').service('CarService', CarService);
}
