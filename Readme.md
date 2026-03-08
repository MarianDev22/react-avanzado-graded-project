#Marketplace Ads - React Avanzado

Este proyecto es una plataforma de anuncios (marketplace) construida con
Next.js 15 y Prisma, enfocada en la implementación de patrones avanzados
de React como Server Actions, gestión de estados con `useActionState` y
el manejo robusto de errores mediante "Matrioshkas".

------------------------------------------------------------------------

## Funcionalidades Implementadas

###Gestión de Anuncios:

Creación de anuncios con validación mediante Zod.

Borrado de anuncios con verificación de autoría (solo el dueño puede
borrar).

Visualización dinámica mediante `AdCard` con diseño responsivo.

###Arquitectura de Datos:

Modelado de base de datos con Prisma ORM (User y Ad).

Sistema de Seed para poblar la base de datos con datos de prueba

###Gestión de Errores (Patrón Matrioshka):

`loading.tsx`: Estados de carga granulares.

`error.tsx`: Captura de errores inesperados y fallos de permisos.

`not-found.tsx`: Manejo de rutas y recursos inexistentes.

`global-error.tsx`: Último escudo para errores críticos en el layout
raíz.

###UI/UX:

Navegación fluida Botones con estados de carga (useFormStatus).

Componentes estilizados con Tailwind CSS.

##Tecnologías Utilizadas Framework: Next.js 16 (App Router).

Base de Datos: PostgreSQL (vía Prisma).

Validación: Zod.

Estilos: Tailwind CSS.

-   Notas de Seguridad y Pendientes Actualmente, el proyecto se
    encuentra en una fase funcional pero con puntos de mejora
    identificados:

-   Seguridad de Passwords: El sistema de login actual guarda las
    contraseñas en texto plano por simplicidad durante el desarrollo del
    Bootcamp. Falta implementar el hasheado de passwords con bcrypt
    antes de pasar a un entorno de producción.

-   Gestión de Imágenes: Se utilizan URLs externas de Unsplash. Queda
    pendiente la implementación de subida de archivos (upload) a un
    servidor

-   Filtros: La lógica de filtrado por categoría está comentada en los
    esquemas pero requiere integración final en la UI.
