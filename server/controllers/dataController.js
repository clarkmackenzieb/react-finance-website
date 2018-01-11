const dallasInfo = require("./dallas");

// $sgetCope.ruralAptOne = budgetService.dallasInfo.prices[22].average_price;

// $scope.cityAptOne = budgetService.dallasInfo.prices[21].average_price;

// $scope.ruralAptThree = budgetService.dallasInfo.prices[24].average_price;

// $scope.cityAptThree = budgetService.dallasInfo.prices[23].average_price;

// $scope.avgutil = budgetService.dallasInfo.prices[25].average_price;

// $scope.internet = budgetService.dallasInfo.prices[33].average_price;

// $scope.gas = budgetService.dallasInfo.prices[19].average_price * 3.8 * 12 * 4;

module.exports = {
  getRent: (req, res) => {
    console.log(req.body);
  },
  getCentralOne: (req, res) => {
    res.status(200).json(dallasInfo.prices[21].average_price);
  },
  getCentralThree: (req, res) => {
    res.status(200).json(dallasInfo.prices[23].average_price);
  },
  getOuterOne: (req, res) => {
    res.status(200).json(dallasInfo.prices[22].average_price);
  },
  getOuterThree: (req, res) => {
    res.status(200).json(dallasInfo.prices[24].average_price);
  },
  getAvgUtil: (req, res) => {
    res.status(200).json(dallasInfo.prices[25].average_price);
  },
  getInternet: (req, res) => {
    res.status(200).json(dallasInfo.prices[33].average_price);
  },
  getGas: (req, res) => {
    res.status(200).json(dallasInfo.prices[19].average_price * 3.8 * 12 * 4);
  }
};
