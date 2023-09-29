// Importar librerias
import "dotenv/config";
import bot from "@bot-whatsapp/bot";
import QRPortalWeb from "@bot-whatsapp/portal";
import BaileysProvider from "@bot-whatsapp/provider/baileys";
import MockAdapter from "@bot-whatsapp/database/mock";

// Creamos el primer flow, es la bienvenida que da el bot
const flowPrincipal = bot
  .addKeyword(['hola', 'buenas', 'buenos días', 'buenas tardes', 'hi', 'hello'])//AddKeyword es para que el bot entienda cual es la palabra clave con la que el bot reconocera del cliente y responder
  .addAnswer('🌟 ¡Te damos una cálida bienvenida a Fundación Bandera Blanca! 🌟',//addAnswer es el mensaje que le dara el bot al cliente
    'Somos un faro de esperanza para aquellos que más lo necesitan. Estamos aquí para brindarte apoyo en todo momento y para responder a todas tus preguntas. Si deseas hablar con uno de nuestros agentes de la fundación, simplemente selecciona la opción "Hablar con un agente", y uno de nuestros amables miembros se pondrá en contacto contigo enseguida.')
  .addAnswer(
    [
      'Escribe el número de la información que deseas saber',
      '👉 *1* | Ubicaciones',
      '👉 *2* | Trabajo Comunal Universitario (TCU)',
      '👉 *3* | Donación a la Fundación',
      '👉 *4* | COSEVI',
      '👉 *5* | Centro de Atención Integral (CAI)',
      '👉 *6* | Voluntariado',
      '👉 *7* | Garaje',
      '👉 *8* | Contactos de la Fundación',
      '👉 *0* | Hablar con un agente',
    ])


const flowUbicaciones = bot
  .addKeyword(['1'], { sensitive: true })//sensitive TRUE es para que el bot tenga que funcionar con la palabra que le estan diciendo y ninguna otra mas.
  .addAnswer(
    [
      'Escribe el número de la ubicación que deseas saber: ',
      '👉 *1G* Ubicación del Garaje en el Barrio La Cruz',
      '👉 *1F* Ubicación de la Fábrica de Sonrisas en Hatillo',
    ])

const ubicacionGaraje = bot
  .addKeyword(['1G', '1g'], { sensitive: true }).addAnswer(['Estamos ubicados en Barrio La Cruz, 25 metros al norte del puente del Río María Aguirre. Horario de atención: LUNES A SÁBADO DE 9 am a 4:30 pm. En el siguiente enlace le compartimos la ubicación por Waze:  https://waze.com/ul/hd1u0qvdns ',
    'Escribe *MENU* para regresar al menú principal.',], {
    media: 'https://fundacionbanderablancacr.com/wp-content/uploads/2017/10/e2840bd5-1e82-479f-ad90-bff433075372.jpg',//media, es para enviar imagenes, videos o pdf, solo sirve con ENLACES
  })

const ubicacionFundacion = bot
  .addKeyword(['1F', '1f'], { sensitive: true }).addAnswer(['Horario de atención: lunes a viernes de 8 am a 5 pm y sábados de 8 am a 2 pm. Usa Waze para llegar a Fundación Bandera Blanca, Urb. Reina de los Ángeles, Hatillo, San José: https://waze.com/ul/hd1u0qme87 ',
    'Escribe *MENU* para regresar al menú principal.',
  ], {
    media: 'https://fundacionbanderablancacr.com/wp-content/uploads/2021/11/6f9ef5c3-67e3-45d1-9b89-27660f927fc7.jpg',
  })

const flowTCU = bot
  .addKeyword(['2'], { sensitive: true })
  .addAnswer(['¡Saludos! Permíteme presentarme, soy Michelle, una de las coordinadoras de TCU en la Fundación Bandera Blanca 🏳️. En primer lugar, quiero darte una cálida bienvenida y expresarte nuestro sincero agradecimiento por unirte a este apasionante proyecto. Estoy aquí para brindarte asistencia en cualquier momento, resolver tus dudas y apoyarte en todo lo que necesites. ¡Una vez más, bienvenid@!  '])
  .addAnswer([
    'Horario de atención: ',
    '- En el Barrio La Cruz, en “El Garaje”: Estamos disponibles de Lunes a Sábado, de 9 am a 4:30 pm. ',
    '- En Hatillo, en la “Fábrica de Sonrisas”: Nuestro equipo te atenderá de Lunes a Viernes de 8 am a 5 pm, y los Sábados de 8 am a 2 pm. ',
    '- Además, para el Programa de Jóvenes, nos reunimos los martes y jueves de 5 pm a 7:30 pm, y los sábados de 12 m. a 2 pm. ',
  ])
  .addAnswer(
    [
      'Escribe la palabra clave para ver la información del TCU que deseas saber: ',
      '👉 *InfoTCU* Información para Realizar el TCU en la Fundación.',
      '👉 *FirmasTCU* Firma de Bitácoras o Cartas relacionadas con el TCU.',
      '👉 *FinTCU* Finalización del TCU.',
      '👉 *EncuestaTCU* Encuesta de Satisfacción al Finalizar el TCU.',
    ],
    {
      delay: 2000,//DELAY, son los segundos que tardara el bot en responder el mensaje, en este caso 2000 son 2 SEGUNDOS.
    })


const infoTCU = bot
  .addKeyword(['InfoTCU', 'infotcu', 'Infotcu', 'infoTCU'], { sensitive: true })
  .addAnswer(
    [
      '¡Hola! 🙌 ¡Te damos la bienvenida a la Fundación Bandera Blanca! ¡Nos alegra que desees realizar tu TCU con nosotros! Es importante que sigas los siguientes pasos: ',
      'Paso 1: Conoce la fundación👉 https://drive.google.com/file/d/1o5wFKr9sXzhDOYeAV6jguyqH5kdflRoL/view?usp=sharing',
      '',
      'Paso 2: Infórmate sobre las tareas y proyecto que puedes realizar para tu TCU 👉 https://trello.com/b/bEVoKKxi/metas-2023',
      'EXTRA: Ingresa al link de preguntas frecuentes para evacuar dudas. https://drive.google.com/file/d/1K689stnB4EzfkuxWB-SMW73r1mNf4-Z6/view?usp=sharing',
      '',
      'Paso 3: Para agendar la inducción, ingresa al siguiente enlace 👉 https://chat.whatsapp.com/JPZihukl9kx37vpU8auf9n en el que debes compartir tu información (Nombre completo, número de cédula, Universidad de procedencia, carrera, día que puedes recibir la inducción y modalidad en que la vas a recibir.)',
      '',
      'Horario de inducciones: Sábado a las 10:00 am de forma virtual y presencial. Si vas a llevar la inducción de forma presencial, esta se lleva a cabo en nuestra sede de Hatillo https://waze.com/ul/hd1u0qme85 contamos únicamente con 3 espacios de parqueo.',
      'Escribe *MENU* para regresar al menú principal.',
    ])




const firmasTCU = bot
  .addKeyword(['FirmasTCU', 'firmastuc', 'firmasTCU', 'Firmastcu'], { sensitive: true })
  .addAnswer(
    [
      '¡¡¡Hola!!! Si necesitas firma de cartas o bien de bitácoras, puedes escribir al siguiente enlace 📱 https://wa.me/message/GKWMDJ3IUW2CH1 ',
      '',
      '✅ La secretaria con mucho gusto se la va a hacer llegar en un plazo de 48 horas.',
      '✅ Los documentos deben venir llenos y en PDF.',
      '✅ La carta o documentos deben venir completamente llenos, ya que se devolverán documentos que no estén debidamente llenados.',
      '',
      'Datos para tener en cuenta: ',
      'Nombre de la supervisora: Berlín Castro Altamirano',
      'Cédula: 1-1211-0040',
      'Puesto: Coordinadora de proyectos',
      'Correo: fundacionbanderablanca@gmail.com',
      'Escribe *MENU* para regresar al menú principal.',
    ])


const finTCU = bot
  .addKeyword(['FinTCU', 'fintuc', 'finTCU', 'Fintcu'], { sensitive: true })
  .addAnswer(
    [
      'Queremos agradecerte por la ayuda que le brindaste a la fundación, te deseamos muchos éxitos en tu carrera y en tu vida.  Siempre tendrás las puertas de la fundación abiertas para cuando desees ir a colaborar.',
      '',
      'En el siguiente enlace encontrarás la carta de finalización 📱https://drive.google.com/drive/folders/1i58VYVr-fNnjUHGITFhfv_cYT_PARxFc?usp=sharing',
      '',
      'Si tienes dudas o si en cualquier momento necesitas algo, estaré para servirte.  Nuevamente muchos éxitos 🤩 Gracias por haber formado parte de la familia de Fundación Bandera Blanca 🏳️ ',
      '',
      'Escribe *MENU* para regresar al menú principal.',
    ])


const encuestaTCU = bot
  .addKeyword(['EncuestaTCU', 'encuestatuc', 'encuestaTCU', 'Encuestatcu'], { sensitive: true })
  .addAnswer(
    [
      'Deseamos conocer su opinión referente a cómo fue su trabajo comunal con nosotros, en el siguiente enlace encontrarás una encuesta de satisfacción donde nos podrás ayudar a mejorar.',
      '',
      '📱https://forms.gle/p3RJeTsFteXBC5G38',
      '',
      'Te agradeceríamos mucho tus comentarios.',
      'Que tengas un excelente día ✨',
      'Escribe *MENU* para regresar al menú principal.',
    ])


const flowFundacion = bot
  .addKeyword(['3'], { sensitive: true })
  .addAnswer([
    'Fundación Bandera Blanca FBB de Costa Rica 🏳️😃 es una entidad privada de utilidad pública sin fines de lucro creada en el 2005, que surgió con el objeto de brindar ayuda a familias con personas menores de edad en condición de vulnerabilidad y riesgo social, mediante la evangelización y el desarrollo de actividades educativas, benéficas y artísticas; para el bienestar social. 🏳️😃',
  ])
  .addAnswer(
    [
      'Escribe la palabra clave para ver la información que deseas saber: ',
      '👉 *DonarFundacion* Donadores Externos de la Fundación',
      '👉 *DonarSinpe* Donación por medio de Sinpe Móvil',
    ],
    {
      delay: 2000,
    })


const donarFundacion = bot
  .addKeyword(['DonarFundacion', 'donarfundacion', 'Donarfundacion', 'donarFundacion'], { sensitive: true })
  .addAnswer(
    [
      '¡Sé parte del impacto positivo con Fundación Bandera Blanca! Únete a nuestra causa y dona ropa, calzado y artículos para el hogar en buen estado, en nuestra sede principal de recolección de donaciones.',
      '📍Nos ubicamos en el barrio La Cruz, San José https://waze.com/ul/hd1u0qvdns ',
      '🕣 Horario de atención: Lunes a Sábado de 9 am a 4:00 pm.',
      '✅ También contamos con voluntarios transportistas, ellos están listos para recoger tu donación en tu dirección. Simplemente comparte tu ubicación con nosotros para coordinar la recogida. Para más detalles y contactarnos, envía un mensaje por WhatsApp al 2214-4400 o visita (https://api.whatsapp.com/send?phone=50622144400).',
      'Tu continuo apoyo hace posible que cumplamos los sueños de niños y niñas. ¡Gracias por marcar la diferencia junto a nosotros! 🙌🏻👚👖👗 ',
      'Escribe *MENU* para regresar al menú principal.',
    ], {
    media: 'https://fundacionbanderablancacr.com/wp-content/uploads/2020/09/96215205_2801558716619876_2451009918816223232_o-1024x768.jpg',
  })


const donarSinpe = bot
  .addKeyword(['DonarSinpe', 'donarsinpe', 'Donarsinpe', 'donarSinpe'], { sensitive: true })
  .addAnswer(
    [
      '¡Gracias por tu interés en apoyar! Puedes hacer una diferencia en las vidas de familias y niños marginados de San José. ¡Tu generosidad crea un cambio real! 🙏🌟',
      '',
      'Para realizar la donación, escribe en el detalle Donación y asegúrate de que la cuenta SINPE Móvil sea "FUNDACIÓN BANDERA BLANCA FBB DE COSTA RICA" con el número al cual donar: 8856-7474.',
      'Escribe *MENU* para regresar al menú principal.',
    ], {
    media: 'https://fundacionbanderablancacr.com/wp-content/uploads/2019/08/FBB-camp-3.jpg',
  })


const flowCosevi = bot
  .addKeyword(['4'], { sensitive: true })
  .addAnswer(
    [
      '¡Hola! 🙌🏻 ¡Nos alegra que desees realizar tu Trabajo Comunal COSEVI con nosotros! 🤩 Para poder continuar con el proceso de Trabajo comunitario en la Fundación, es importante que sigas los siguientes pasos:',
      'Paso 1:  Conoce la fundación 👉 https://drive.google.com/file/d/1o5wFKr9sXzhDOYeAV6jguyqH5kdflRoL/view?usp=sharing',
      '',
      'Paso 2: Revisa los documentos que necesitas para el inicio del trabajo comunitario 👉 https://drive.google.com/drive/folders/1aucG4ACkw4j2PTht43zZFiQ386KVCW48?usp=share_link',
      '',
      'El horario de las inducciones es el día: Sábado a las 10:00 am de forma presencial y virtual. Si vas a llevar la inducción de forma presencial, únicamente contamos con 3 espacios de parqueo.',
      '',
      'En caso de dudas, contacta al encargado de Trabajo Comunal COSEVI en el siguiente link https://wa.me/50688101471 con David Castro Altamirano',
    ])

  .addAnswer(
    [
      'Escribe *MENU* para regresar al menú principal.',
    ])

const flowCAI = bot
  .addKeyword(['5'], { sensitive: true })
  .addAnswer(
    [
      '¡Hola 👋🏽, Fundación Bandera Blanca agradece mucho su interés! 😊 ✨ 🏳️',
      '',
      'Antes de continuar con el proceso, te presento los requisitos inmediatos: ',
      '',
      '⃣  Debes tener un subsidio aprobado del IMAS para Red de Cuido. (Si no lo tienes, solicita la información aquí.)  ',
      '',
      '⃣ Debes solicitar en la Fundación la carta de aprobación de cupo y la certificación de red de cuido.',
      '',
      '⃣ Estar atent@ al proceso de ingreso a la Fundación, la Trabajadora Social l@ contactará para solicitar la documentación respectiva.',
      '',
      '🏫 Importante:  Si deseas información para cambiar a tu hij@ de alternativa de cuido, solicita los requisitos por este medio.',
      '',
      '📍 También, puedes contactarnos a los siguientes números telefónicos: ',
      '☎️ Oficinas: 2214 4400.',
      '☎️Dirección Académica: Tiffany https://wa.me/qr/QAJKCUDTS2KMC1',
      '☎️Trabajadora Social: Jennifer',
      'https://wa.me/message/7UNHE42M45Q7A1 ',
    ])
  .addAnswer([
    'Escribe *MENU* para regresar al menú principal.',
  ])

const flowVoluntariado = bot
  .addKeyword(['6'], { sensitive: true })
  .addAnswer(
    [
      '¡Hola! ¡Te damos la bienvenida a la Fundación Bandera Blanca! ¡Nos alegra que desees realizar tu Voluntariado con nosotros!',
      '',
      'Para poder continuar con el proceso de Voluntariado, es importante que sigas los siguientes pasos: ',
      '',
      'Paso 1: Conoce la fundación https://drive.google.com/file/d/1o5wFKr9sXzhDOYeAV6jguyqH5kdflRoL/view?usp=sharing',
      '',
      'Los documentos que solicitamos son:',
      'Fotos de tu cédula por ambos lados',
      'Hoja de delincuencia',
      'Carta de recomendación',
      '',
      'Paso 2: Debes coordinar una entrevista con nuestro Coordinador de Voluntariado, David Castro, al 8810-1471 o bien ingresando en el siguiente enlace https://api.whatsapp.com/send?phone=50688101471.',
      '',
      'Escribe *MENU* para regresar al menú principal.',
    ])


const flowGaraje = bot
  .addKeyword(['7'], { sensitive: true })
  .addAnswer(['El Garaje es una tiendita y centro de donaciones fundada por Fundación Bandera Blanca que se dedica a la venta de productos de segunda mano de buena calidad a precios súper cómodos, cuyos ingresos se destinan al alimento de personas menores de edad en riesgo social.'], {
    media: 'https://fundacionbanderablancacr.com/wp-content/uploads/2020/09/104899955_270613561020058_7972181251358207982_n.mp4',
  })
  .addAnswer(['Estamos ubicados en Barrio La Cruz, a 25 metros al norte del puente del Río María Aguirre. Horario de atención: LUNES A SÁBADO DE 9 am a 4:30 pm. En el siguiente enlace te compartimos la ubicación por Waze:  https://waze.com/ul/hd1u0qvdns ',
    'Escribe *MENU* para regresar al menú principal.',], {
    media: 'https://fundacionbanderablancacr.com/wp-content/uploads/2017/10/e2840bd5-1e82-479f-ad90-bff433075372.jpg',
  })


const flowContactos = bot
  .addKeyword(['8'], { sensitive: true })
  .addAnswer(
    [
      'Saludos cordiales, esperamos que se encuentren muy bien. ',
      'Agradecemos mucho su interés por querer formar parte del proyecto de Fundación Bandera Blanca. 😊🏳️✨',
      'Si requiere agendar cupo y saber qué tipo de actividades puede realizar con los niños, niñas y adolescentes de la Fundación, puede contactar a las siguientes personas que se distribuyen por grupo de edad:',
      '',
      'Bebés y Milly, contactar a Teacher Gabriela y Kennia al teléfono: https://api.whatsapp.com/send?phone=50670203887',
      '',
      'Primaria, contactar a Teacher Tiffany al teléfono: https://api.whatsapp.com/send?phone=50670656459',
      '',
      'Adolescentes, contactar a Teacher Jennifer al teléfono: https://api.whatsapp.com/send?phone=50671296360',
      '',
      'Agradecemos mucho tus esfuerzos, en caso de alguna duda o consulta quedamos atentos.',
      '',
      'Escribe *MENU* para regresar al menú principal',
    ])


const regresarMenu = bot
  .addKeyword(['MENU', 'menu', 'Menú', 'menú']).addAnswer("🤝 ¡Excelente! En este momento regresaremos al menu inicial 🤝.", null, async (_, { gotoFlow }) => {
    return gotoFlow(flowPrincipal);
  });



const flowAgente = bot
  .addKeyword(["0", "agente", 'Agente'], { sensitive: true })
  .addAnswer(
    ["Perfecto, Me dirias tu nombre y apellido?"],
    { capture: true },
    async (ctx, { provider }) => {
      const mobile = "50622144400";
      const nombre = ctx.body;
      const telefono = ctx.from;
      await provider.sendText(
        mobile + "@s.whatsapp.net",
        "☎️Atender a Usuario" + " " + nombre + " " + "y su numero telefonico es +" + telefono
      );
    }
  )
  .addAnswer(
    "En unos momentos te contactamos... Gracias!!!"
  );


const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = bot.createFlow([
    flowPrincipal,
    flowUbicaciones,
    flowTCU,
    ubicacionFundacion,
    ubicacionGaraje,
    infoTCU,
    firmasTCU,
    finTCU,
    encuestaTCU,
    flowFundacion,
    donarFundacion,
    donarSinpe,
    regresarMenu,
    flowCosevi,
    flowCAI,
    flowVoluntariado,
    flowGaraje,
    flowContactos,
    flowAgente
  ]);
  const adapterProvider = bot.createProvider(BaileysProvider);

  bot.createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};



main()