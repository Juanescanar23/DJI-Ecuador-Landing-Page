# DJI Ecuador Landing Page

Landing page oficial para el lanzamiento y captación de leads de DJI Ecuador.

## Autoría

- Proyecto creado por **Jectstore**.
- **Autor intelectual:** Jectstore.

## Descripción

Este proyecto está desarrollado con Next.js y presenta:

- Hero principal con carrusel de productos.
- Secciones de productos, categorías y beneficios.
- Formulario de registro.
- Endpoint interno para recibir leads y reenviarlos por webhook.

## Tecnologías

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- pnpm

## Requisitos

- Node.js `>= 20.9.0` (recomendado Node 22)
- pnpm

Nota: los scripts del proyecto detectan automáticamente Node válido o intentan usar `node@22` de Homebrew.

## Instalación local

1. Instalar dependencias:

```bash
pnpm install
```

2. Crear variables de entorno locales:

```bash
cp .env.example .env.local
```

3. Levantar en desarrollo:

```bash
pnpm dev
```

4. Abrir en navegador:

```text
http://127.0.0.1:3000
```

## Variables de entorno

Archivo: `.env.local`

- `LEAD_WEBHOOK_URL=` URL opcional para reenviar los leads recibidos por `POST /api/leads`.

## Scripts disponibles

```bash
pnpm dev          # Desarrollo en 127.0.0.1:3000
pnpm dev:network  # Desarrollo en 0.0.0.0:3000
pnpm lint         # Lint del proyecto
pnpm build        # Build de producción
pnpm start        # Servidor de producción
```

## Estructura principal

- `app/page.tsx`: composición de la landing.
- `app/layout.tsx`: layout global, metadatos y SEO.
- `app/globals.css`: estilos globales y tokens visuales.
- `components/`: secciones y componentes reutilizables.
- `app/api/leads/route.ts`: endpoint de captura de leads.

## Licencia y uso

Este repositorio corresponde al trabajo de Jectstore para DJI Ecuador.  
Para uso comercial, redistribución o derivaciones, revisar permisos con el titular intelectual.
