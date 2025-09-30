# React Zero to Hero 🚀

Repositorio colaborativo para aprender React desde cero mediante proyectos de dificultad incremental.

## 📋 Proyecto 1: Todo List Básico

Primer mini-proyecto para dominar los conceptos fundamentales de React.

### ✨ Funcionalidades

- ✅ Input para crear nuevas tareas
- ✅ Botón para agregar tareas
- ✅ Visualización de lista de tareas
- ✅ Botón para eliminar tareas
- ✅ Botón para editar tareas
- ✅ Checkmark para marcar tareas como completadas (con tachado)

### 🛠️ Tecnologías

- React 18+
- JavaScript/TypeScript
- CSS3
- Vite (recomendado para desarrollo)

## 📝 Tareas de Desarrollo

### Fase 1: Configuración del Proyecto
- [X] Configurar proyecto React con Vite
- [X] Configurar estructura de carpetas
- [X] Crear componente principal `TodoApp`
- [X] Configurar CSS básico

### Fase 2: Funcionalidad Básica
- [X] Crear estado para almacenar tareas (`useState`)
- [X] Implementar input controlado para nueva tarea
- [X] Implementar función `addTask`
- [X] Renderizar lista de tareas

### Fase 3: Interactividad
- [X] Implementar función `deleteTask`
- [X] Implementar función `toggleComplete` (checkmark)
- [X] Añadir estilos para tareas completadas (line-through)

### Fase 4: Edición
- [X] Implementar modo edición por tarea
- [X] Crear función `editTask`
- [X] Manejar estado de edición (edit mode)

### Fase 5: Mejoras UX
- [ ] Validación de input vacío
- [ ] Confirmación antes de eliminar
- [ ] Contador de tareas pendientes/completadas
- [ ] Responsive design

## 🏗️ Estructura de Datos

```javascript
const task = {
  id: number,
  text: string,
  completed: boolean,
  isEditing: boolean
}
```

## 🎯 Objetivos de Aprendizaje

- Manejo de estado con `useState`
- Renderizado de listas
- Manejo de eventos
- Props y comunicación entre componentes
- Renderizado condicional
- Inmutabilidad en React

## 🤝 Colaboración

### Flujo de Trabajo
1. Crear branch desde `main` para cada funcionalidad
2. Nombrar branches: `feature/nombre-funcionalidad`
3. Hacer commits descriptivos
4. Crear PR para revisión
5. Merge después de aprobación

### Convenciones
- **Commits**: Usar conventional commits (`feat:`, `fix:`, `style:`)
- **Componentes**: PascalCase (`TodoItem.jsx`)
- **Funciones**: camelCase (`addTask`)
- **CSS**: BEM methodology

## 🚀 Comandos

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 📚 Recursos de Referencia

- [Documentación oficial de React](https://react.dev)
- [useState Hook](https://react.dev/reference/react/useState)
- [Handling Events](https://react.dev/learn/responding-to-events)
- [Conditional Rendering](https://react.dev/learn/conditional-rendering)

## 🎓 Próximos Proyectos

- **Proyecto 2**: Todo List con Local Storage
- **Proyecto 3**: Weather App con API
- **Proyecto 4**: E-commerce básico
- **Proyecto 5**: Chat en tiempo real

---

**¡Empecemos a construir!** 💪
