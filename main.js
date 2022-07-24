// 1. Tính tiền thuế
function calcTax(incomeTax_in) {
  var result = 0;
  if (incomeTax_in >= 1e6 && incomeTax_in <= 60e6) {
    result = incomeTax_in * 0.05;
  } else if (incomeTax_in > 60e6 && incomeTax_in <= 120e6) {
    result = 60e6 * 0.05 + (incomeTax_in - 60e6) * 0.1;
  } else if (incomeTax_in > 120e6 && incomeTax_in <= 210e6) {
    result = 60e6 * 0.05 + 60e6 * 0.1 + (incomeTax_in - 120e6) * 0.15;
  } else if (incomeTax_in > 210e6 && incomeTax_in <= 384e6) {
    result =
      60e6 * 0.05 + 60e6 * 0.1 + 90e6 * 0.15 + (incomeTax_in - 210e6) * 0.2;
  } else if (incomeTax_in > 384e6 && incomeTax_in <= 624e6) {
    result =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      (incomeTax_in - 384e6) * 0.25;
  } else if (incomeTax_in > 624e6 && incomeTax_in <= 960e6) {
    result =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      (incomeTax_in - 624e6) * 0.3;
  } else if (incomeTax_in > 960e6) {
    result =
      60e6 * 0.05 +
      60e6 * 0.1 +
      90e6 * 0.15 +
      174e6 * 0.2 +
      240e6 * 0.25 +
      336e6 * 0.3 +
      (incomeTax_in - 960e6) * 0.35;
  } else {
    alert("Số tiền thu nhập không hợp lệ");
  }
  return result;
}
document.getElementById("btnCalcTax").onclick = function () {
  // input
  var name = document.getElementById("name").value;
  var annualIncome = document.getElementById("annualIncome").value * 1;
  var dependentNum = document.getElementById("dependentNum").value * 1;
  var incomeTax = annualIncome - 4e6 - dependentNum * 1.6e6;
  // process
  var tax = calcTax(incomeTax);
  var format = new Intl.NumberFormat("vn-VN").format(tax);
  // output
  var output = "";
  output =
    "Họ tên: " + name + "; Tiền thuế thu nhập cá nhân: " + format + " VND";
  document.getElementById("announceTax").innerHTML = output;
};
