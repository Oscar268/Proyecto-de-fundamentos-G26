import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/Products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";
/* UI elemnts*/
/* Ocultar Loader*/
loader()

/* Mostrar Menu */
showMenu ()

/* Mostrar Carrito */
showCart ()

/* Products */
const {db, printProducts } = products (await getProducts())

/* Cart */
cart(db, printProducts)
