import Cliente from './cliente.mjs';
import Impuesto from './impuesto.mjs';

const impuesto1 = new Impuesto(100000, 20000);
const cliente1 = new Cliente('Felipe Oyarzun', impuesto1);

console.log(`Impuesto anual que debe pagar ${cliente1.nombre} es: $${cliente1.calcularImpuesto()}`);