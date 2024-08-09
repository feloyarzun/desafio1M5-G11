"use strict";

var _cliente = _interopRequireDefault(require("./cliente.mjs"));
var _impuesto = _interopRequireDefault(require("./impuesto.mjs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var impuesto1 = new _impuesto["default"](100000, 20000);
var cliente1 = new _cliente["default"]('Felipe Oyarzun', impuesto1);
console.log("Impuesto anual que debe pagar ".concat(cliente1.nombre, " es: $").concat(cliente1.calcularImpuesto()));