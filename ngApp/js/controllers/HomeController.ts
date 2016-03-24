namespace app.controllers {

  export class HomeController {
    public cars: Array<app.i.ICar> = [];

    public openModal(c: app.i.ICar) {
      this.$uibModal.open({
        controller: 'CarModalInstanceController as modal',
        templateUrl: '/templates/partials/carMod.html',
        animation: true,
        resolve: {
          cars: c
        }
      })
    }
    
    constructor(private CarService: app.service.CarService, private $uibModal: ng.ui.bootstrap.IModalService) {
        this.cars = CarService.getAll();
      };
    }
  angular.module('app').controller('HomeController', HomeController);

  export class CarModalInstanceController {
    public cancel() {
      this.$uibModalInstance.dismiss();
}
      constructor(
        private cars: app.i.ICar,
        private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance
      ) {

      };

  }
  angular.module('app').controller('CarModalInstanceController', CarModalInstanceController);
}
