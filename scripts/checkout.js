import { renderCheckoutHeader } from './checkout/checkoutHeader.js';
import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { loadProducts, loadProductsFetch} from '../data/products.js';
import { loadCart, loadCartFetch } from '../data/cart.js';
//import '../data/cart-class.js';
//import '../data/car.js';
//import '../data/backend-practice.js'

async function loadPage() {
 try {
   // throw 'error1';

   await Promise.all([
    loadProductsFetch(),
    loadCartFetch()
   ]);
   

 } catch (error) {
    console.log('Unexpected error. Please try again later');
 }
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
Promise.all([
    loadProductsFetch(),

    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })

]).then((value) => {
    console.log(value);
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*

new Promise((resolve) => {
    loadProducts(() => {
        resolve('value');
    });
}).then((value1) => {
    console.log(value1);
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    });
}).then(() => {
    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
});

*/

/*
loadProducts(() => {
    loadCart(() => {
        renderCheckoutHeader();
        renderOrderSummary();
        renderPaymentSummary();
    });
 });
 */
