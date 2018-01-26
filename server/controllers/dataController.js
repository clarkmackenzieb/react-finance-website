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
    let { type } = req.body.headers;
    switch (type) {
      case "City Center, 3 Bedroom":
        res.status(200).json({ rent: dallasInfo.dallasInfo.prices[23].average_price });
        break;
      case "City Center, 1 Bedroom":
        res.status(200).json({ rent: dallasInfo.dallasInfo.prices[21].average_price });
        break;
      case "Outer City, 1 Bedroom":
        res.status(200).json({ rent: dallasInfo.dallasInfo.prices[22].average_price });
        break;
      case "Outer City, 3 Bedroom":
        res.status(200).json({ rent: dallasInfo.dallasInfo.prices[24].average_price });
        break;
      default:
        res.status(200).json({ rent: 0 })

    }
  },
  getAvgPrices: (req, res) => {
    res.status(200).json({
      util: dallasInfo.dallasInfo.prices[25].average_price,
      internet: dallasInfo.dallasInfo.prices[33].average_price,
      gas: dallasInfo.dallasInfo.prices[19].average_price * 3.8 * 12 * 4
    })
  }
};
