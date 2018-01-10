const axios = require("axios");
const querystring = require("querystring");

let taxInfo = "";

module.exports = {
  computeTax: (req, res) => {
    const { income, statePick, filing } = req.body;
    console.log("BODY", req.body);

    filingStatusCheck = status => {
      switch (status) {
        case 1:
          return "single";
        case 2:
          return "married";
        case 3:
          return "married_separately";
        case 4:
          return "head_of_household";
        default:
          return null;
      }
    };

    let updatedFiling = filingStatusCheck(filing);
    console.log(updatedFiling);
    axios({
      method: "POST",
      url: "https://stylinandy-taxee.p.mashape.com/v2/calculate/2017",
      headers: {
        "X-Mashape-Key": "siUhfG7l6Cmshp5zpz1znHyZTqlIp1n1EpFjsnBDPl9hA438Rf",
        "content-type": "application/x-www-form-urlencoded",
        authorization:
          "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJBUElfS0VZX01BTkFHRVIiLCJodHRwOi8vdGF4ZWUuaW8vdXNlcl9pZCI6IjU5Yjk0OTMzMTE1MWFhNzQzZWNhN2ZkNiIsImh0dHA6Ly90YXhlZS5pby9zY29wZXMiOlsiYXBpIl0sImlhdCI6MTUwNTMxNTEyM30.kXAq6QoztJaOXYVNmrRaOxtwcKzDSmHPavhPPQxCQAc"
      },
      data: querystring.stringify({
        filing_status: updatedFiling,
        pay_rate: income,
        state: statePick
      })
    })
      .then(response => {
        taxInfo = response.data;
        res.status(200).send(response.data);
      })
      .catch(err => console.log(err));
  },
  getTaxes: (req, res) => {
    res.status(200).send(taxInfo);
  }
};

// "pay_rate": $scope.payRate,
// "state": ($scope.state).toUpperCase(),
// "filing_status": whatTheHeck($scope.filingStatus),
