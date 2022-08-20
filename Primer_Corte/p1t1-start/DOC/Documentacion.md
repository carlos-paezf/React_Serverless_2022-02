# Documentación

## Scaffolding

Una vez creado el proyecto con el comando `pnpm create react-app my-app --template typescript`, procedí a eliminar el directorio `node_modules` y el archivo `package-lock.json`, para luego hacer la instalación de las librerías procurando ocupar un menor espacio con el siguiente comando: `pnpm i`.

Otros archivos que serán eliminados del scaffolding serán los siguientes (Inicialmente los eliminados por que no nos centraremos en ellos):

- `App.test.tsx`
- `App.css`

## Bootstrap - Estilos CSS

Para evitar la creación de estilos CSS, vamos a usar Bootstrap en su versión 5.2. Podemos usarla al copiar el CDN dentro del archivo `public/index.html`:

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        ...
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">

        <title>Aplicación Inicial</title>
    </head>

    <body>...</body>

</html>
```

También podemos hacer uso de la instalación de su módulo mediante el siguiente comando:

```txt
pnpm i bootstrap@5.2.0
```

Para este último paso hacemos las siguientes importaciones dentro de `index.tsx`:

```tsx
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
```

Para usar iconos, vamos a usar el siguiente comando:

```txt
pnpm i @fortawesome/fontawesome-free
```

Luego hacemos la importación de los mismos, dentro del archivo `index.tsx`:

```tsx
import "@fortawesome/fontawesome-free/css/all.min.css"
```
