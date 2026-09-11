# Implementación de componentes standalone con signals y nuevo control flow syntax

En el dominio de la banca digital, se requiere desarrollar un componente standalone que maneje la visualización y actualización de saldos de cuentas en tiempo real. El componente debe utilizar signals para reaccionar a cambios en el estado de las cuentas y el nuevo control flow syntax para gestionar la lógica de presentación. Los actores involucrados son el 'sistema de cuentas', el 'usuario' y el'servicio de notificaciones'. El componente debe asegurar que los saldos se actualicen de manera idempotente y que los usuarios reciban notificaciones en tiempo real sobre cambios significativos en sus saldos.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | Angular 21 con RxJS 7 |
| **Nivel** | junior-l1 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición del componente standalone

**Objetivo:** Establecer la estructura y las responsabilidades del componente standalone que manejará la visualización de saldos.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Identificar las propiedades y eventos que el componente debe manejar.
- Definir cómo el componente se integrará con el 'sistema de cuentas' para recibir actualizaciones de saldo.

**Entregable:** Especificación del componente standalone con sus propiedades, eventos y métodos.

<details>
<summary>Pistas de conocimiento</summary>

- Considera cómo el componente se comunicará con otros sistemas.
- Piensa en la idempotencia de las actualizaciones de saldo.

</details>

### Fase 2: Implementación de signals para reactividad

**Objetivo:** Incorporar signals en el componente para reaccionar a cambios en el estado de las cuentas.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Implementar signals para escuchar cambios en los saldos y actualizar la UI en consecuencia.
- Asegurar que los cambios en los saldos se manejen de manera idempotente.

**Entregable:** Componente con signals implementados para reaccionar a cambios en los saldos.

<details>
<summary>Pistas de conocimiento</summary>

- Reflexiona sobre cómo manejar los edge cases donde los cambios en los saldos podrían fallar.
- Considera la latencia aceptable para las actualizaciones de saldo en tiempo real.

</details>

### Fase 3: Aplicación del nuevo control flow syntax

**Objetivo:** Utilizar el nuevo control flow syntax para gestionar la lógica de presentación del componente.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Aplicar el nuevo control flow syntax para manejar la lógica de presentación del componente.
- Asegurar que la UI se actualice correctamente en respuesta a cambios en los saldos.

**Entregable:** Componente con el nuevo control flow syntax implementado para gestionar la lógica de presentación.

<details>
<summary>Pistas de conocimiento</summary>

- Piensa en cómo el nuevo control flow syntax puede simplificar la lógica de tu componente.
- Considera cómo este enfoque afecta la mantenibilidad del código.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué es un componente standalone y cómo se diferencia de un componente regular en Angular?
- **paraQueSirve**: ¿Para qué sirve utilizar signals en un componente de Angular?
- **comoSeUsa**: ¿Cómo se aplica el nuevo control flow syntax en un componente de Angular?
- **erroresComunes**: ¿Cuáles son los errores comunes al implementar signals en un componente de Angular?
- **queDecisionesImplica**: ¿Qué decisiones de diseño implica la elección de usar signals y el nuevo control flow syntax en un componente de Angular?

## Criterios de Evaluacion

- Definición clara del componente standalone con sus propiedades y eventos.
- Implementación correcta de signals para reaccionar a cambios en los saldos.
- Aplicación efectiva del nuevo control flow syntax para gestionar la lógica de presentación.
- Manejo idempotente de las actualizaciones de saldo.
- Consideración de edge cases y latencia aceptable para las actualizaciones de saldo.

## Como trabajar con un asistente de IA

- **AGENTS.md** — instrucciones nativas del repo (Cursor, Codex, Copilot, Gemini, Claude Code). Abrí el proyecto y el agente las carga solo.
- **PROMPT_MEJORA.md** — el mismo prompt, para copiar y pegar en un chat (claude.ai, ChatGPT, etc.).

---

*Reto generado automaticamente por Challenge Generator - Pragma*
