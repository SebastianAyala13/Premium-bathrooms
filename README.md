# Premium Bathrooms - Página Web Profesional

Una página web moderna y profesional para una empresa de remodelación de baños, enfocada en generar leads a través de un formulario atractivo y funcional.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante y profesional con animaciones fluidas
- **Responsive**: Optimizado para todos los dispositivos
- **Formulario de Lead Generation**: Con validación en tiempo real
- **Animaciones**: Efectos visuales con Framer Motion
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de estilos
- **Framer Motion** - Animaciones
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Lucide React** - Iconos

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globales
├── components/
│   ├── Header.tsx         # Navegación
│   ├── Hero.tsx          # Sección hero
│   ├── Services.tsx      # Servicios
│   ├── Gallery.tsx       # Galería de trabajos
│   ├── Testimonials.tsx  # Testimonios
│   ├── LeadForm.tsx      # Formulario de contacto
│   └── Footer.tsx        # Footer
└── utils/                # Utilidades (futuro)
```

## 🎨 Componentes Principales

### Header
- Navegación sticky con animaciones
- Menú responsive para móviles
- Logo y CTA principal

### Hero
- Sección principal con título animado
- Botones de llamada a la acción
- Indicadores de confianza

### Services
- Grid de servicios con tarjetas animadas
- Beneficios de la empresa
- Precios aproximados

### Gallery
- Carrusel de proyectos before/after
- Filtros por categoría
- Modal para vista completa

### Testimonials
- Carrusel automático de testimonios
- Calificaciones con estrellas
- Información de clientes

### LeadForm
- Formulario completo con validación
- Versión flotante que aparece al hacer scroll
- Mensajes de éxito/error

### Footer
- Información de contacto
- Enlaces a redes sociales
- Enlaces legales

## 🚀 Instalación y Uso

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd premium-bathrooms
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Iniciar en producción**
   ```bash
   npm start
   ```

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🎯 Funcionalidades del Formulario

- Validación en tiempo real
- Campos requeridos: nombre, email, teléfono, servicio, presupuesto, timeline
- Mensaje opcional
- Animaciones de loading y éxito
- Almacenamiento temporal en localStorage

## 🔧 Configuración

### Variables de Entorno
Crear archivo `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://tu-dominio.com
NEXT_PUBLIC_CONTACT_EMAIL=info@premiumbathrooms.com
NEXT_PUBLIC_PHONE_NUMBER=(555) 123-4567
```

### Personalización
- **Colores**: Editar `tailwind.config.js`
- **Contenido**: Modificar textos en los componentes
- **Imágenes**: Reemplazar URLs en la galería
- **Formulario**: Configurar endpoint de envío en `LeadForm.tsx`

## 📈 SEO y Performance

- Meta tags optimizados
- Open Graph tags
- Estructura semántica HTML
- Lazy loading de imágenes
- Optimización de fuentes
- Core Web Vitals optimizados

## 🚀 Deployment

### Vercel (Recomendado)
1. Conectar repositorio a Vercel
2. Configurar variables de entorno
3. Deploy automático

### Otros Proveedores
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📞 Soporte

Para soporte técnico o consultas:
- Email: soporte@premiumbathrooms.com
- Teléfono: (555) 123-4567

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

---

**Desarrollado con ❤️ para Premium Bathrooms**
