# Rotiseria Chiqui - Menú Digital

Portfolio web de Rotiseria chiqui desarrollado completamente en vanilla HTML, CSS y JavaScript. Este proyecto es una copia fiel del sitio original, optimizada para trabajar en Cursor.

## 📁 Estructura del Proyecto

```
green-bar-resistencia/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   └── main.js             # Funcionalidades JavaScript
├── images/
│   ├── logo.png            # Logo de Green Bar
│   ├── hero-image.jpg      # Imagen principal
│   ├── about-image.jpg     # Imagen sección nosotros
│   ├── placeholder.jpg      # Imagen placeholder
│   ├── ensalada-*.jpg      # Imágenes de ensaladas
│   ├── bowl-*.jpg          # Imágenes de bowls
│   ├── smoothie-*.jpg      # Imágenes de smoothies
│   └── *.jpg               # Imágenes de postres
└── README.md               # Este archivo
```

## 🚀 Cómo Abrir en Cursor

### Opción 1: Abrir directamente
1. Abre Cursor
2. Selecciona "Open Folder" o "Abrir Carpeta"
3. Navega a la carpeta del proyecto
4. Haz doble clic en `index.html` para abrirlo en el navegador

### Opción 2: Usar Live Server (Recomendado)
1. Instala la extensión "Live Server" en Cursor
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"
4. El sitio se abrirá automáticamente en tu navegador

### Opción 3: Servidor local manual
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx http-server

# Luego abre http://localhost:8000 en tu navegador
```

## 🎯 Funcionalidades Implementadas

### ✅ Navegación
- Menú hamburguesa responsive
- Smooth scroll entre secciones
- Header fijo con efecto blur
- Navegación activa según scroll

### ✅ Menú Interactivo
- Filtrado por categorías (Todos, Ensaladas, Bowls, Smoothies, Postres)
- Modal con detalles de cada plato
- Animaciones de carga
- Lazy loading de imágenes

### ✅ Formulario de Contacto
- Validación de campos requeridos
- Validación de email
- Notificaciones de éxito/error
- Simulación de envío (sin backend)

### ✅ Animaciones
- Scroll animations con Intersection Observer
- Animaciones CSS con transiciones suaves
- Efectos hover en elementos interactivos
- Animaciones de entrada para elementos del menú

### ✅ Responsive Design
- Breakpoints: 320px, 768px, 1280px
- Diseño mobile-first
- Grid responsive para el menú
- Navegación adaptativa

## 🎨 Características del Diseño

### Paleta de Colores
- Verde principal: `#4CAF50`
- Verde secundario: `#45a049`
- Grises: `#333`, `#666`, `#f8f9fa`
- Acentos: `#8BC34A`, `#FF9800`

### Tipografía
- Fuente principal: Poppins (Google Fonts)
- Pesos: 300, 400, 500, 600, 700

### Iconos
- Font Awesome 6.0.0 (CDN)
- Iconos SVG personalizados para el logo

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, Animaciones, Variables CSS
- **JavaScript ES6+**: Vanilla JS, Intersection Observer API, Fetch API
- **Sin dependencias externas**: Solo Google Fonts y Font Awesome

## 📱 Testing Responsive

### Breakpoints Verificados
- **320px**: Móvil pequeño
- **768px**: Tablet
- **1280px**: Desktop

### Elementos a Probar
1. **Navegación móvil**: Menú hamburguesa
2. **Grid del menú**: Adaptación a diferentes pantallas
3. **Modal**: Funcionamiento en móvil
4. **Formulario**: Campos y validaciones
5. **Imágenes**: Carga y lazy loading

## 🐛 Notas sobre Cambios Menores

### Imágenes
- Se crearon imágenes SVG placeholder para simular el contenido real
- Todas las imágenes tienen fallback a `placeholder.jpg`
- Las imágenes están optimizadas para web

### Formulario de Contacto
- **IMPORTANTE**: El formulario simula el envío pero no tiene backend
- Para implementar envío real, necesitarás:
  - Servidor backend (Node.js, PHP, Python, etc.)
  - Configuración de email (SMTP, SendGrid, etc.)
  - Validación del lado del servidor

### Datos del Menú
- Los datos están hardcodeados en `main.js`
- Para un sitio real, considera usar una API o CMS
- Los precios están en pesos argentinos

## 🧪 Pruebas Críticas

### ✅ Funcionalidades que Funcionan
- [x] Navegación entre secciones
- [x] Filtrado del menú por categorías
- [x] Modal de detalles de platos
- [x] Formulario de contacto (validación)
- [x] Animaciones de scroll
- [x] Responsive design
- [x] Menú móvil

### ⚠️ Limitaciones Actuales
- Formulario no envía emails reales
- Imágenes son placeholders SVG
- No hay persistencia de datos
- No hay autenticación de usuarios

## 🚀 Próximos Pasos para Producción

1. **Backend**: Implementar API para menú y formulario
2. **CMS**: Integrar sistema de gestión de contenido
3. **Imágenes**: Reemplazar placeholders con fotos reales
4. **SEO**: Agregar meta tags y structured data
5. **Analytics**: Integrar Google Analytics
6. **PWA**: Convertir en Progressive Web App

## 📞 Soporte

Si encuentras algún problema o tienes preguntas:

1. Verifica que todas las imágenes estén en la carpeta `images/`
2. Asegúrate de que el servidor local esté funcionando
3. Revisa la consola del navegador para errores JavaScript
4. Verifica que las rutas de archivos sean correctas

## 📄 Licencia

Todos los derechos reservados.

---

**Desarrollado con ❤️ usando HTML, CSS y JavaScript vanilla**

