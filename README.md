### CHATBOT Whatsapp (Baileys Provider)

<p align="center">
  <img width="300" src="https://i.imgur.com/Oauef6t.png">
</p>

**Con esta librería, puedes construir flujos automatizados de conversación de manera agnóstica al proveedor de WhatsApp,** configurar respuestas automatizadas para preguntas frecuentes, recibir y responder mensajes de manera automatizada, y hacer un seguimiento de las interacciones con los clientes.  Además, puedes configurar fácilmente disparadores que te ayudaran a expandir las funcionalidades sin límites. **[Ver documentación](https://bot-whatsapp.netlify.app/)**

```
npm install
npm start
```

---

# Documentación del Código

Este documento proporciona una descripción general de la estructura y funcionalidad del código que forma parte del proyecto de Fundación Bandera Blanca.

## Aplicaciones Necesarias

Para trabajar en este proyecto, necesitarás tener las siguientes aplicaciones instaladas en tu sistema:

- **Git Bash**: Para gestionar el control de versiones y trabajar con el repositorio del proyecto.

- **Node.js**: El entorno de ejecución de JavaScript necesario para ejecutar el código del bot de WhatsApp y las dependencias del proyecto.

- **Visual Studio Code**: Un entorno de desarrollo integrado (IDE) que facilita la escritura y edición de código.

Asegúrate de tener estas aplicaciones instaladas y configuradas correctamente en tu sistema antes de comenzar a trabajar en el proyecto.

## Estructura del Proyecto

El proyecto se compone de varios flujos de conversación configurados para un bot de WhatsApp. Cada flujo aborda un conjunto específico de interacciones con el usuario.

- `flowPrincipal`: El flujo principal de bienvenida y menú principal del bot.
- `flowUbicaciones`: Información sobre las ubicaciones de la Fundación.
- `flowTCU`: Información sobre el Trabajo Comunal Universitario (TCU).
- `ubicacionFundacion`: Detalles de la ubicación principal de la Fundación.
- `ubicacionGaraje`: Detalles de la ubicación del Garaje.
- `infoTCU`: Información detallada sobre el TCU.
- `firmasTCU`: Instrucciones para obtener firmas relacionadas con el TCU.
- `finTCU`: Mensaje de agradecimiento y carta de finalización del TCU.
- `encuestaTCU`: Enlace a una encuesta de satisfacción después del TCU.
- `flowFundacion`: Información sobre la Fundación Bandera Blanca.
- `donarFundacion`: Información sobre cómo donar a la Fundación.
- `donarSinpe`: Instrucciones para donaciones a través de SINPE Móvil.
- `flowCosevi`: Información sobre el Trabajo Comunal COSEVI.
- `flowCAI`: Información sobre el Centro de Atención Integral (CAI).
- `flowVoluntariado`: Información sobre cómo participar como voluntario.
- `flowGaraje`: Información sobre El Garaje y su ubicación.
- `flowContactos`: Información de contacto para distintos grupos de edad.
- `flowAgente`: Flujo para que los usuarios se comuniquen con un agente.

## Configuración

El código utiliza varias librerías externas, que se importan al principio del archivo.

- `dotenv/config`: Para gestionar variables de entorno.
- `@bot-whatsapp/bot`: Para crear y configurar el bot de WhatsApp.
- `@bot-whatsapp/portal`: Para manejar la generación de códigos QR.
- `@bot-whatsapp/provider/baileys`: Proveedor de servicios para la comunicación de WhatsApp.
- `@bot-whatsapp/database/mock`: Base de datos de simulación para el bot.

## Uso

El código principal se organiza en flujos de conversación que se configuran utilizando métodos como `addKeyword` y `addAnswer`. Cada flujo aborda un conjunto específico de interacciones con el usuario.

Los flujos también pueden contener respuestas que incluyen texto y enlaces multimedia.

## Ejecución

Para ejecutar el bot, se llama a la función `main()`, que configura y lanza el bot con los flujos, el proveedor de servicios y la base de datos.

## Contribución

Este proyecto es de código abierto, y las contribuciones son bienvenidas. Si deseas contribuir al desarrollo del proyecto, sigue las mejores prácticas de desarrollo y envía tus contribuciones a través de solicitudes de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.
