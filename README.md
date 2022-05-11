# Objetivo:

Implementar una vista en donde se puedan listar los pedidos que se han hecho en la aplicación (historial).

# La Aplicación actual:

Se compone de 2 vistas, una que muestra los productos que se pueden comprar y otra que muestra los elementos añadidos al carrito.

# Pistas:

- Products
    - Obtener todos los productos a mostrar del servidor

- Cart
    - Hacer que el botón de comprar funcione

- Orders
    - Crear types
    - Crear Orders Slice
    - Añadir slice al RootReducer
    - Crear selector
    - Conectar el componente al store para que las ordenes se muestren

- Navbar
    - Soportar ancho de viewport = 360px

- Utils
    - Implementar la función calcProductsTotal

- Testing
    - Desarrollar un test unitario para la función calcProductsTotal
    - Desarrollar un test de integración para Products/Navbar en donde se pruebe que agregar un producto al cart hace que se muestre un badge al lado del ícono de cart con el número de productos que han sido agregados al cart.
    - Desarrollar un test e2e para comprobar que el nombre de la aplicación en el NavBar y el titulo de la página estén escritos correctamente, el valor debe ser igual a "ManoShop".
