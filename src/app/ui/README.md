### Crear componente UI

ionic generate component ui/NOMBRE

Ejemplo:

ionic generate component ui/Avatar

Despues en ui.module.ts, en la linea 6, importar el componente

```javascript
    const uiComponents = [HeaderComponent, FooterComponent, /*AQUI*/] //<<-- Agregar cada componente creado
```

Ejemplo
```javascript
    const uiComponents = [HeaderComponent, FooterComponent, AvatarComponent] //<<-- Agregar cada componente creado
```

Nota: Asegurate de que se importe el componente automaticamente

---
