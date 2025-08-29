# Guía de Imágenes para Premium Bathrooms

## 📸 Imágenes Requeridas

### ✅ Imágenes de Marca (COMPLETADO)
- ✅ `logo.png` (200x60) - **COMPLETADO: logoprimebath.png**
- `logo-white.png` (200x60) - Para fondos oscuros (opcional)
- `favicon.ico` (32x32) - **CONFIGURADO: usa logoprimebath.png**
- `apple-touch-icon.png` (180x180) - **CONFIGURADO: usa logoprimebath.png**
- `icon-192x192.png` (192x192) - **CONFIGURADO: usa logoprimebath.png**
- `icon-512x512.png` (512x512) - **CONFIGURADO: usa logoprimebath.png**

### 🏠 Imágenes de Proyectos (Portfolio)
Necesitas agregar imágenes reales de proyectos de remodelación de baños en la carpeta `/public/projects/`:

#### Proyecto 1: Modern Master Bathroom Remodeling
- `projects/modern-master-before.jpg` (600x400)
- `projects/modern-master-after.jpg` (600x400)
- `projects/modern-master-1.jpg` (800x600)
- `projects/modern-master-2.jpg` (800x600)
- `projects/modern-master-3.jpg` (800x600)
- `projects/modern-master-4.jpg` (800x600)

#### Proyecto 2: Tub-to-Shower Conversion
- `projects/tub-shower-before.jpg` (600x400)
- `projects/tub-shower-after.jpg` (600x400)
- `projects/tub-shower-1.jpg` (800x600)
- `projects/tub-shower-2.jpg` (800x600)
- `projects/tub-shower-3.jpg` (800x600)

#### Proyecto 3: Luxury Guest Bathroom
- `projects/luxury-guest-before.jpg` (600x400)
- `projects/luxury-guest-after.jpg` (600x400)
- `projects/luxury-guest-1.jpg` (800x600)
- `projects/luxury-guest-2.jpg` (800x600)
- `projects/luxury-guest-3.jpg` (800x600)
- `projects/luxury-guest-4.jpg` (800x600)

#### Proyecto 4: Contemporary Powder Room
- `projects/powder-room-before.jpg` (600x400)
- `projects/powder-room-after.jpg` (600x400)
- `projects/powder-room-1.jpg` (800x600)
- `projects/powder-room-2.jpg` (800x600)

#### Proyecto 5: Spa-Inspired Master Suite
- `projects/spa-master-before.jpg` (600x400)
- `projects/spa-master-after.jpg` (600x400)
- `projects/spa-master-1.jpg` (800x600)
- `projects/spa-master-2.jpg` (800x600)
- `projects/spa-master-3.jpg` (800x600)
- `projects/spa-master-4.jpg` (800x600)
- `projects/spa-master-5.jpg` (800x600)

#### Proyecto 6: Accessible Bathroom Design
- `projects/accessible-before.jpg` (600x400)
- `projects/accessible-after.jpg` (600x400)
- `projects/accessible-1.jpg` (800x600)
- `projects/accessible-2.jpg` (800x600)
- `projects/accessible-3.jpg` (800x600)

### 🎨 Imágenes de Materiales
- `materials/premium-tiles.jpg` (400x300)
- `materials/waterproofing.jpg` (400x300)
- `materials/fixtures.jpg` (400x300)
- `materials/smart-tech.jpg` (400x300)

### 👥 Imágenes de Testimonios
- `testimonials/client-1.jpg` (100x100)
- `testimonials/client-2.jpg` (100x100)
- `testimonials/client-3.jpg` (100x100)
- `testimonials/client-4.jpg` (100x100)
- `testimonials/client-5.jpg` (100x100)
- `testimonials/client-6.jpg` (100x100)

### 📱 Imágenes para Redes Sociales
- `og-image.jpg` (1200x630) - Imagen principal para redes sociales

## 📋 Especificaciones Técnicas

### Formatos Recomendados
- **JPEG** para fotografías de proyectos
- **PNG** para logos y elementos con transparencia
- **WebP** para mejor compresión (opcional)

### Optimización
- **Comprimir imágenes** antes de subir
- **Usar dimensiones exactas** especificadas
- **Mantener calidad alta** pero archivos ligeros
- **Agregar alt text** descriptivo

### Estructura de Carpetas
```
public/
├── logoprimebath.png          ✅ COMPLETADO
├── projects/
│   ├── modern-master-*.jpg
│   ├── tub-shower-*.jpg
│   ├── luxury-guest-*.jpg
│   ├── powder-room-*.jpg
│   ├── spa-master-*.jpg
│   └── accessible-*.jpg
├── materials/
│   ├── premium-tiles.jpg
│   ├── waterproofing.jpg
│   ├── fixtures.jpg
│   └── smart-tech.jpg
├── testimonials/
│   ├── client-1.jpg
│   ├── client-2.jpg
│   └── ...
└── og-image.jpg
```

## 🔄 Actualización de Código

Una vez que tengas las imágenes, necesitarás actualizar las URLs en los componentes:

1. **Projects.tsx** - Actualizar rutas de imágenes de proyectos
2. **Materials.tsx** - Actualizar imágenes de materiales
3. **Testimonials.tsx** - Actualizar fotos de clientes
4. **Layout.tsx** - Actualizar og-image

## 💡 Consejos para Imágenes

1. **Before/After**: Asegúrate de que las imágenes "antes" y "después" sean del mismo ángulo
2. **Calidad**: Usa imágenes de alta resolución pero optimizadas
3. **Consistencia**: Mantén un estilo visual consistente en todas las imágenes
4. **Diversidad**: Incluye diferentes estilos y tamaños de baños
5. **Profesionalismo**: Las imágenes deben reflejar la calidad premium del servicio

## ✅ Estado Actual

- **Logo**: ✅ Completado y configurado
- **Favicon**: ✅ Configurado para usar el logo
- **PWA Icons**: ✅ Configurado para usar el logo
- **Proyectos**: ⏳ Pendiente de agregar imágenes
- **Materiales**: ⏳ Pendiente de agregar imágenes
- **Testimonios**: ⏳ Pendiente de agregar imágenes
- **OG Image**: ⏳ Pendiente de crear
