# Configuración de ESLint 📋

Documentación de las reglas de ESLint configuradas para mantener el código TypeScript y React limpio y ordenado.

## 🎯 Objetivo

Establecer estándares de código consistentes que mejoren la legibilidad, mantenibilidad y colaboración en el proyecto.

## 📦 Dependencias

- `@eslint/js` - Configuración base de ESLint
- `typescript-eslint` - Soporte para TypeScript
- `eslint-plugin-react-hooks` - Reglas para React Hooks
- `eslint-plugin-react-refresh` - Reglas para React Fast Refresh

## 🔧 Reglas Configuradas

### Trailing Commas (Comas finales)
```javascript
'@typescript-eslint/comma-dangle': ['warn', 'always-multiline']
```
- **Propósito**: Forzar comas finales en objetos y arrays multilínea
- **Beneficio**: Diffs más limpios en Git y facilita agregar/quitar elementos

**Ejemplos:**
```typescript
// ✅ Correcto
const config = {
  name: 'Todo App',
  version: '1.0.0',
  dependencies: ['react', 'typescript'], // <- Comma final requerida
}

// ❌ Incorrecto
const config = {
  name: 'Todo App',
  version: '1.0.0',
  dependencies: ['react', 'typescript'] // <- Falta comma final
}
```

### Formateo de Objetos y Arrays

#### Espaciado en llaves de objetos
```javascript
'object-curly-spacing': ['warn', 'always']
```
```typescript
// ✅ Correcto
const user = { name: 'Manu', age: 25 }

// ❌ Incorrecto
const user = {name: 'Manu', age: 25}
```

#### Espaciado en corchetes de arrays
```javascript
'array-bracket-spacing': ['warn', 'never']
```
```typescript
// ✅ Correcto
const numbers = [1, 2, 3, 4]

// ❌ Incorrecto
const numbers = [ 1, 2, 3, 4 ]
```

#### Saltos de línea en objetos
```javascript
'object-curly-newline': ['warn', { multiline: true, consistent: true }]
```
```typescript
// ✅ Correcto - Objeto simple en una línea
const point = { x: 10, y: 20 }

// ✅ Correcto - Objeto complejo con saltos de línea
const config = {
  apiUrl: 'https://api.example.com',
  timeout: 5000,
  retries: 3,
}
```

### Ordenamiento de Imports
```javascript
'sort-imports': ['warn', {
  ignoreCase: false,
  ignoreDeclarationSort: true,
  ignoreMemberSort: false,
  memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
}]
```

**Orden de miembros en imports:**
```typescript
// ✅ Correcto
import React, { Component, useState } from 'react'
import { createContext, useCallback, useEffect } from 'react'

// ❌ Incorrecto
import React, { useState, Component } from 'react'
```

### Reglas de TypeScript

#### Variables no utilizadas
```javascript
'@typescript-eslint/no-unused-vars': ['warn', { 
  argsIgnorePattern: '^_',
  varsIgnorePattern: '^_'
}]
```
- Permite variables que empiecen con `_` para indicar que no se usan intencionalmente

#### Uso de `any`
```javascript
'@typescript-eslint/no-explicit-any': 'warn'
```
- Desalienta el uso de `any`, promoviendo tipado específico

### Reglas de React

#### Dependencias de Hooks
```javascript
'react-hooks/exhaustive-deps': 'warn'
```
- Asegura que las dependencias de `useEffect`, `useMemo`, etc. estén completas

#### Componentes exportables
```javascript
'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
```
- Optimiza Hot Reload limitando las exportaciones a componentes

### Formateo General

#### Indentación
```javascript
'indent': ['warn', 2]
```
- 2 espacios para indentación

#### Comillas
```javascript
'quotes': ['warn', 'single']
```
- Comillas simples obligatorias

#### Punto y coma
```javascript
'semi': ['warn', 'never']
```
- Sin punto y coma al final de las líneas

#### Líneas vacías
```javascript
'no-multiple-empty-lines': ['warn', { max: 1 }]
'eol-last': ['warn', 'always']
'no-trailing-spaces': 'warn'
```
- Máximo 1 línea vacía consecutiva
- Línea vacía al final del archivo
- Sin espacios al final de las líneas

## 🚀 Comandos de Verificación

```bash
# Ejecutar ESLint
npm run lint

# Ejecutar ESLint con auto-fix
npm run lint -- --fix

# Verificar archivos específicos
npx eslint src/components/TodoItem.tsx
```

## 💡 Configuración del Editor

### VS Code
Agrega a tu `.vscode/settings.json`:
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": [
    "javascript",
    "typescript",
    "javascriptreact",
    "typescriptreact"
  ]
}
```

### Extensiones recomendadas
- ESLint (ms-vscode.vscode-eslint)
- TypeScript Hero (rbbit.typescript-hero)

## 🔍 Solución de Problemas

### Error: "Parsing error: Cannot read file"
- Verifica que `tsconfig.json` exista y esté bien configurado
- Asegúrate de que los paths en `parserOptions.project` sean correctos

### Warnings sobre dependencias faltantes
- Ejecuta `npm install` para instalar todas las dependencias
- Verifica que las versiones sean compatibles

## 📚 Referencias

- [ESLint Official Docs](https://eslint.org/docs/)
- [TypeScript ESLint](https://typescript-eslint.io/)
- [React Hooks ESLint Plugin](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

---

*Configuración actualizada: Enero 2025*