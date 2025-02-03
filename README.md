# Padel Shope

Este proyecto es una tienda en línea de palas de pádel, desarrollada con React y Vite. Proporciona una configuración mínima para que React funcione en Vite con HMR y algunas reglas de ESLint.

## Funcionalidades Principales

- **Visualización de Productos**: Muestra una colección de palas de pádel con sus detalles.
- **Carrito de Compras**: Permite agregar, eliminar y modificar la cantidad de productos en el carrito.
- **Persistencia del Carrito**: El contenido del carrito se guarda en `localStorage` para mantener el estado entre sesiones.
- **Interfaz de Usuario**: Utiliza Bootstrap para el diseño y estilos personalizados.

## Estructura del Proyecto

```plaintext
01-padelShope/
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── public/
│   ├── .DS_Store
│   └── img/
├── README.md
├── src/
│   ├── App.jsx
│   ├── assets/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── Pala.jsx
│   ├── data/
│   │   └── db.js
│   ├── index.css
│   └── main.jsx
└── vite.config.js
```

