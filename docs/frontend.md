# Prompts de diseño por ruta del frontend

Oct 23, 2026 · @Eduardo Quea

Un prompt por cada ruta de Angular, listo para pegar en una IA de diseño y obtener ideas de pantallas coherentes entre sí.

## Cómo usar este archivo

Pega primero el brief global y después los prompts de una pantalla a la vez, siempre en la misma conversación, para que la IA mantenga el mismo estilo.

1. Abre una conversación nueva en la herramienta de diseño con IA que elijas.
2. Pega el **brief global** de la siguiente sección.
3. Pega el prompt de una ruta y pide 2 o 3 variantes.
4. Elige una dirección, ajusta lo que no te guste y pasa a la siguiente ruta.
5. Si la IA cambia el estilo entre pantallas, vuelve a pegar el brief global.

Los prompts están en español; si la herramienta responde mejor en inglés, puedes traducirlos sin cambiar la estructura.

## Brief global de diseño

Este es el prompt base: define el estilo una sola vez para que todas las pantallas se vean como parte del mismo producto. Cambia los valores entre corchetes por los tuyos.

```text
Actúa como diseñador de producto. Vamos a diseñar el frontend de una tienda online llamada [NOMBRE] que vende productos al público en [PAÍS]. Todas las pantallas deben seguir estas reglas:

Estilo: moderno, limpio y minimalista, con mucho espacio en blanco y jerarquía visual clara.
Colores: primario azul índigo (#4F46E5), neutros en escala de grises, éxito en verde, error en rojo y advertencia en ámbar.
Tipografía: Inter o una sans-serif similar; títulos en semibold y texto en regular.
Forma: esquinas redondeadas de 8 a 12 px, sombras suaves y bordes finos.
Espaciado: escala de múltiplos de 4 y 8 px.
Layout: header fijo con logo, buscador, icono de carrito con contador y acceso a login o perfil; contenedor centrado de 1200 px como máximo; pie de página sencillo.
Responsive: mobile-first, con vistas de 360 px (móvil), 768 px (tablet) y 1280 px (escritorio).
Moneda: [soles (S/)], con datos de ejemplo realistas.
Accesibilidad: contraste AA, foco visible y etiquetas en los formularios.

Componentes reutilizables: botón primario y secundario, tarjeta de producto (imagen, nombre, precio, botón), campo de formulario con validación, etiqueta de estado, aviso emergente (toast), esqueleto de carga y estado vacío.

Etiquetas de estado de pedido: PENDIENTE en ámbar, PAGADO en verde, PAGO_FALLIDO en rojo y CANCELADO en gris.

Entrega: para cada pantalla, una versión de escritorio y otra móvil, con sus estados de carga, vacío y error cuando aplique. Devuelve el diseño como HTML con Tailwind CSS para poder pasarlo después a componentes de Angular.

Confirma que entendiste y espera el prompt de la primera pantalla.
```

## Rutas públicas

Son las pantallas que ve cualquier visitante, sin iniciar sesión.

### `/` Inicio

```text
Diseña la pantalla de inicio de la tienda. Incluye: header global; un banner principal con título, subtítulo y botón «Ver catálogo»; una fila de 4 categorías con icono; una cuadrícula de 8 productos destacados con la tarjeta de producto; una franja con 3 beneficios (envío, pago seguro y soporte); y el pie de página. Usa datos de ejemplo realistas. Entrega versión de escritorio (1280 px) y móvil (360 px).
```

### `/catalogo` Listado de productos

```text
Diseña el listado del catálogo. Incluye: barra de búsqueda arriba; filtros por categoría, rango de precio y orden, en una barra lateral en escritorio y en un panel desplegable en móvil; contador de resultados; cuadrícula de 12 tarjetas de producto (4 columnas en escritorio, 2 en móvil); y paginación. Muestra también los estados de carga (esqueletos), sin resultados y error con botón «Reintentar».
```

### `/catalogo/:id` Detalle de producto

```text
Diseña el detalle de un producto. Incluye: migas de pan; imagen grande con 4 miniaturas; nombre, precio y disponibilidad; descripción; selector de cantidad con botones + y −; botón primario «Agregar al carrito» y aviso emergente de confirmación; y una sección «Productos relacionados» con 4 tarjetas. Muestra también los estados de carga y producto no encontrado.
```

### `/carrito` Carrito de compras

```text
Diseña el carrito de compras. Incluye: lista de ítems con imagen, nombre, precio unitario, cantidad editable, subtotal y botón de quitar; un resumen lateral con subtotal, envío y total, y el botón primario «Comprar». En móvil, el resumen queda fijo en la parte inferior. Muestra el estado de carrito vacío con un mensaje y un botón «Ir al catálogo», y el aviso que pide iniciar sesión cuando el visitante pulsa «Comprar» sin cuenta.
```

## Autenticación y error

Pantallas simples y centradas, con pocos elementos.

### `/login` Inicio de sesión

```text
Diseña la pantalla de inicio de sesión. Una tarjeta centrada con el logo, un título, campos de correo y contraseña (con botón para mostrar u ocultar), botón primario «Iniciar sesión» y enlace «Crear cuenta». Muestra la validación en línea, el mensaje de error de credenciales incorrectas y el botón en estado de carga. En escritorio, usa un panel con imagen o ilustración a un lado de la tarjeta.
```

### `/registro` Crear cuenta

```text
Diseña la pantalla de registro. Una tarjeta centrada con campos de nombre, correo, contraseña y confirmar contraseña, un indicador de fortaleza de la contraseña, una casilla para aceptar los términos, el botón primario «Crear cuenta» y un enlace «Ya tengo cuenta». Muestra la validación en línea y el error de «correo ya registrado».
```

### `**` Página no encontrada (404)

```text
Diseña la página 404. Un mensaje corto «Página no encontrada», una ilustración simple y el botón «Volver al catálogo». Mantén el header y el pie de página globales.
```

## Rutas protegidas

Solo se ven con la sesión iniciada; son las pantallas con más estados, así que pide siempre los casos de carga, vacío y error.

### `/checkout` Finalizar compra

```text
Diseña la pantalla de checkout en dos columnas. A la izquierda, tres pasos en formato de acordeón o stepper: 1) dirección de entrega, 2) método de pago simulado y 3) revisión. A la derecha, un resumen fijo del pedido con ítems, subtotal, envío y total. Botón primario «Confirmar pedido» con indicador de progreso. Muestra también la pantalla de éxito con el número de pedido y el botón «Ver mi pedido», y el estado de error de pago con opción de reintentar. En móvil, el resumen pasa arriba en forma colapsable.
```

### `/pedidos` Historial de pedidos

```text
Diseña el historial de pedidos. Incluye: título, chips para filtrar por estado y una tabla en escritorio (número, fecha, total, etiqueta de estado y botón «Ver detalle») que se convierte en tarjetas en móvil. Usa las etiquetas de estado del brief global. Muestra el estado vacío («Aún no tienes pedidos» con botón al catálogo), la carga y la paginación.
```

### `/pedidos/:id` Detalle y seguimiento

```text
Diseña el detalle de un pedido. Incluye: cabecera con número, fecha y etiqueta de estado; una línea de tiempo vertical con los estados PENDIENTE, PAGADO y, según el caso, PAGO_FALLIDO o CANCELADO, resaltando el estado actual; la lista de productos con cantidad y precio; el resumen con la dirección y el total; y el botón secundario «Cancelar pedido», visible solo cuando el estado es PENDIENTE. Añade un indicador discreto de «Actualizando estado…» mientras el pedido está pendiente. Muestra una variante por cada estado.
```

### `/perfil` Mi cuenta

```text
Diseña la pantalla de perfil. Incluye: datos de la cuenta con el nombre editable y el correo en solo lectura; una sección para cambiar la contraseña; y el botón «Cerrar sesión». Opcional: una lista de direcciones guardadas con opciones de agregar, editar y eliminar. Muestra los avisos de guardado correcto y de error.
```

## Cómo iterar con la IA

El primer resultado rara vez es el final; estos pasos te llevan de una idea suelta a un diseño que puedas programar.

- **Empieza por el catálogo:** es la pantalla que más define el estilo; cuando te guste, copia su descripción (colores, tarjeta, botones) y agrégala al brief global.
- **Pide variantes:** «dame 3 propuestas distintas del header» y elige una antes de seguir.
- **Cambia una cosa a la vez:** por ejemplo, «mismo diseño, pero con tarjetas más grandes», para no perder lo que ya funciona.
- **Pide siempre los estados:** carga, vacío y error; son los que más se olvidan al programar.
- **Revisa la coherencia:** compara header, botones y etiquetas de estado entre pantallas; si difieren, pide a la IA que los unifique.
- **Piensa en Angular:** pide la salida dividida en componentes (header, tarjeta de producto, etiqueta de estado) para convertirlos en componentes reutilizables.
- **Guarda tus decisiones:** anota los colores, la tipografía y el espaciado finales en un archivo del repo (por ejemplo, `frontend/DESIGN.md`) para no depender del chat.
