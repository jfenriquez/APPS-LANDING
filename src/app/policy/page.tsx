"use client";
import React from "react";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import GoogleTranslate from "@/components/GoogleTranslate";
import { Container } from "@tsparticles/engine";
import { useRouter } from "next/navigation";

const Page = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container: Container = {} as Container) => {
    console.log(container);
    return Promise.resolve();
  };
  const router = useRouter();

  return (
    <div className="relative min-h-screen">
      <GoogleTranslate />
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 -z-10"
          particlesLoaded={particlesLoaded}
          options={{
            fullScreen: false,
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "attract",
                },
                resize: { enable: true },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800, // ✅ Usa width en lugar de area
                  height: 800, // Opcional, pero recomendable
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-8">
        <button className="btn btn-primary" onClick={() => router.back()}>
          ← Volver
        </button>
        <div className="bg-black/50 text-white p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-3xl font-bold mb-6">
            Términos y Condiciones de Uso y Política de Privacidad de la
            Aplicación
          </h1>

          <div className="space-y-6">
            <h2>Última actualización: 06 de Marzo de 2025</h2>
            <p>
              Estos <strong>Términos y Condiciones</strong> regulan la descarga,
              acceso y uso de las diferentes aplicaciones móviles (en adelante,
              las <code>APPS</code>), que posee <strong>DEV_JF</strong> y que
              están disponibles para los usuarios de forma gratuita en{" "}
              <strong>Google Play (Android)</strong> y{" "}
              <strong>Apple Store (iOS)</strong>.
            </p>
            <p>
              El usuario adquiere esta condición descargando y utilizando la
              aplicación de su elección. Al acceder a la aplicación(s), el
              usuario reconoce haber aceptado y consentido sin reservas estos
              términos de uso y política de privacidad.
            </p>

            <h3>1. Responsable de las aplicaciones</h3>
            <p>
              <strong>DEV_JF</strong>, ubicado en{" "}
              <strong>Bogotá, Colombia</strong> y correo electrónico:{" "}
              <a href="mailto:johnrnriquezmunoz@gmail.com">
                johnrnriquezmunoz@gmail.com
              </a>
              , es el propietario y responsable de las <code>APPS</code>.
            </p>

            <h3>2. Objeto</h3>
            <p>
              Las <code>APPS</code> se han desarrollado con el objetivo de
              proporcionar a los usuarios, de manera sencilla y rápida y con la
              frecuencia que elijan, acceso, a través de sus dispositivos
              móviles, a frases motivacionales, Lista de Compras, Gestor de
              Gastos, afirmaciones diarias, chistes, vocabulario, curiosidades y
              otra información de interés general (en adelante, el{" "}
              <code>contenido</code>).
            </p>

            <h3>3. Dispositivos compatibles</h3>
            <p>
              Todas las aplicaciones están o estarán disponibles de forma
              gratuita en <strong>Google Play (Android)</strong> y{" "}
              <strong>Apple Store (iOS)</strong>. El usuario reconoce y acepta
              cumplir con todos los términos y condiciones aplicables con
              respecto a la obtención, descarga y actualización de las{" "}
              <code>APLICACIONES</code> que las tiendas de aplicaciones
              referidas determinan respectivamente.
            </p>

            <h3>4. Compartiendo su información</h3>
            <p>
              No compartimos su información personal con terceros, excepto en
              las siguientes circunstancias:
            </p>
            <ul>
              <li>
                <strong>Cumplimiento legal:</strong> Podemos compartir su
                información cuando sea necesario para cumplir con las leyes,
                regulaciones o solicitudes gubernamentales.
              </li>
              <li>
                <strong>Proveedores de servicios:</strong> Compartimos
                información con proveedores de servicios externos que nos ayudan
                a operar la aplicación, como servicios de alojamiento o análisis
                de datos, siempre bajo estrictas medidas de confidencialidad y
                seguridad. Los cuales podrán ser abonados a través de las
                diferentes opciones de pago ofrecidas por GOOGLE PLAY STORE o
                APPLE STORE en función de la tienda de aplicaciones que el
                usuario haya elegido para descargar la aplicación. Los términos
                de uso de estas tiendas de aplicaciones están disponibles en los
                siguientes sitios web: Google Play Store
                (https://play.google.com/intl/es-419_es/about/play-terms/index.html);
                App Store
                (https://www.apple.com/legal/internet-services/itunes/es/terms.html).
              </li>
            </ul>

            <h3>5. Método de uso</h3>
            <p>
              Al iniciar la aplicación, el usuario accederá a una pantalla
              principal donde podrá visualizar, según la aplicación elegida.
              Pueden compartirlos o seleccionarlos como favoritos.
            </p>
            <p>
              Además, la aplicación seleccionada podrá enviar notificaciones al
              dispositivo móvil con el contenido elegido por el usuario.
            </p>

            <h4>5.1 Configuración general</h4>
            <p>
              Los usuarios podrán acceder a un apartado de configuración dentro
              de la aplicación, donde tendrán la posibilidad de gestionar y
              actualizar sus datos proporcionados al iniciar el uso de la{" "}
              <code>APP</code>. En este espacio, además, podrán acceder a los
              términos de uso y la política de privacidad.
            </p>

            <h4>5.2 Menú</h4>
            <p>
              Los usuarios podrán acceder a un menú dentro de la aplicación,
              donde tendrán la opción de seleccionar, añadir y filtrar según el
              contenido de su interés. Además, podrán visualizar el contenido
              marcado como favorito y gestionar aquel que hayan creado dentro de
              la aplicación.
            </p>

            <h4>5.3 Temas</h4>
            <p>
              También pueden acceder a través del icono situado en la parte
              superior de la pantalla principal, <code>temas</code>, donde
              pueden personalizar los colores, los fondos, etc.
            </p>

            <h3>6. Derechos de propiedad intelectual e industrial</h3>
            <p>
              Los derechos de propiedad intelectual e industrial sobre las{" "}
              <code>APPS</code> son propiedad de <strong>DEV_JF</strong>, que
              tiene derechos exclusivos para explotarlos en cualquier forma y,
              en particular, los derechos de reproducción, distribución,
              comunicación pública y transformación.
            </p>
            <p>
              Los terceros titulares de derechos de propiedad intelectual e
              industrial sobre fotografías, logotipos y cualesquiera otros
              símbolos o contenidos incluidos en las <code>APPS</code> han
              otorgado las autorizaciones correspondientes para su reproducción,
              distribución y puesta a disposición del público.
            </p>
            <p>
              El usuario reconoce que la reproducción, modificación,
              distribución, comercialización, descompilación, desmontaje, uso de
              técnicas de ingeniería inversa, o cualquier otro medio para
              obtener el código fuente, constituye una infracción de los
              derechos de propiedad intelectual de <strong>DEV_JF</strong>. En
              consecuencia, se compromete a no llevar a cabo ninguna de las
              acciones mencionadas anteriormente.
            </p>

            <h4>6.1 Contenido del usuario</h4>
            <p>
              A través de las <code>APPS</code>, los usuarios podrán crear y
              compartir sus propias frases motivacionales, afirmaciones diarias,
              chistes, vocabulario, curiosidades y otra información de interés
              general (en adelante, <code>contenido del usuario</code>).
            </p>
            <p>
              Los usuarios son conscientes de que son responsables del{" "}
              <code>contenido del usuario</code> que publican en o a través de
              las <code>APPS</code>, incluida su legalidad, fiabilidad y
              adecuación.
            </p>
            <p>
              Al publicar <code>contenido del usuario</code> en o a través de
              las <code>APLICACIONES</code>, el usuario garantiza que:
            </p>
            <ul>
              <li>
                El contenido del usuario es suyo y/o tiene derecho a usarlo y
                otorgarnos los derechos según estos términos.
              </li>
              <li>
                La publicación de contenido del usuario no viola derechos de
                privacidad, derechos de autor u otros derechos de terceros.
              </li>
            </ul>
            <p>
              Nos reservamos el derecho de cancelar la cuenta de cualquier
              persona que infrinja derechos de autor.
            </p>
            <p>
              El usuario conserva todos sus derechos sobre el{" "}
              <code>contenido del usuario</code> que publique, pero otorga a{" "}
              <strong>DEV_JF</strong> el derecho de usar, modificar, ejecutar
              públicamente, mostrar públicamente, reproducir y distribuir dicho
              contenido en y a través de las <code>APPS</code>. los usuarios
              otorgan a DEV_JF el derecho y la licencia para usar, modificar,
              ejecutar públicamente, mostrar públicamente, reproducir y
              distribuir dicho contenido de usuario en y a través de las APPS.
              Además, acepta que esta licencia incluye el derecho de que
              pongamos su Contenido de Usuario a disposición de otros usuarios
              de las APPS, quienes también pueden usar su Contenido de Usuario
              sujeto a estos Términos.
            </p>
            <h2>7. Política de Privacidad</h2>
            <p>
              En cumplimiento de lo establecido en la normativa aplicable en
              materia de protección de datos de carácter personal, le informamos
              que los datos de carácter personal que los usuarios de nuestras
              APPS nos puedan facilitar, bien sea mediante el uso de las APPS,
              bien mediante el envío de un correo electrónico a la dirección
              prevista al efecto o por cualquier otro medio de comunicación,
              serán tratados por <strong>DEV_JF</strong> como Responsable del
              tratamiento.
            </p>

            <h3>7.1 ¿Qué son los datos personales y qué datos se procesan?</h3>
            <p>
              Los datos personales son cualquier información que identifique o
              permita la identificación de una persona física, como nombre,
              apellido, imagen, voz, dirección postal, dirección de correo
              electrónico, número de teléfono, documentos de identidad oficiales
              (NIF, DNI, Pasaporte), etc. y/o que esté relacionada con una
              persona física, como sus condiciones, cuenta corriente, gustos,
              preferencias, hábitos y comportamiento, los productos o servicios
              que contratará, etc.
            </p>

            <p>Todos los datos personales serán tratados:</p>
            <ul>
              <li>
                Proporcionado por el propio interesado y/o una persona
                legitimada por cualquier medio de comunicación ya sea a través
                de:
                <ul>
                  <li>APPS, mediante formularios y/o correos electrónicos.</li>
                  <li>
                    La contratación de los servicios ofrecidos en las APPS.
                  </li>
                </ul>
              </li>
              <li>
                Los obtenidos mediante la realización de las actividades y/o
                acciones derivadas de las acciones anteriores.
              </li>
              <li>
                Los obtenidos a través del estudio e investigación de los datos
                anteriores.
              </li>
            </ul>

            <p>
              <strong>DEV_JF</strong> tratará los datos necesarios para cumplir
              los fines de tratamiento y que se solicitarán de vez en cuando en
              función del caso concreto y de la aplicación seleccionada, tales
              como:
            </p>
            <ul>
              <li>
                <strong>Nombre</strong> (opcional)
              </li>
              <li>
                <strong>Identidad de género</strong> (opcional)
              </li>
              <li>
                <strong>Estado de ánimo</strong> (opcional)
              </li>
            </ul>

            <h3>Información técnica</h3>
            <p>
              Recopilamos automáticamente ciertos datos técnicos cuando utiliza
              la aplicación, como su dirección IP, tipo de dispositivo, versión
              del sistema operativo y estadísticas sobre el uso de la
              aplicación.
            </p>

            <p>
              También le informamos que recopilamos automáticamente cierta
              información cuando visita, usa o navega por las APLICACIONES. Esta
              información no revela su identidad específica (como su nombre o
              información de contacto), pero puede incluir:
            </p>
            <ul>
              <li>
                Información de dispositivo y uso, como su dirección IP,
                características del navegador y dispositivo, sistema operativo,
                preferencias de idioma, URL de referencia, nombre del
                dispositivo, país, ubicación, información sobre cómo y cuándo
                usa nuestras APLICACIONES y otra información técnica.
              </li>
            </ul>

            <h3>La información que recopilamos incluye:</h3>
            <ul>
              <li>
                <strong>Información de registro:</strong> Si crea una cuenta o
                inicia sesión en la aplicación, recopilamos su dirección de
                correo electrónico, nombre de usuario y cualquier otra
                información que elija proporcionar voluntariamente.
              </li>
              <li>
                <strong>Datos de registro y uso:</strong> Información sobre el
                servicio, diagnóstico, uso y rendimiento que nuestros servidores
                recopilan automáticamente cuando accede o utiliza nuestras
                APLICACIONES.
              </li>
              <li>
                <strong>Datos del dispositivo:</strong> Información sobre su
                computadora, teléfono, tableta u otro dispositivo que utiliza
                para acceder a las APLICACIONES.
              </li>
              <li>
                <strong>Datos de ubicación:</strong> Información sobre la
                ubicación de su dispositivo, que pueden ser precisos o
                inexactos, dependiendo del tipo y la configuración del
                dispositivo.
              </li>
            </ul>

            <h3>
              Si está utilizando nuestras APLICACIONES, también recopilamos la
              siguiente información:
            </h3>
            <ul>
              <li>
                <strong>Acceso a su dispositivo móvil:</strong> Podemos
                solicitar acceso o permiso a ciertas funciones de su dispositivo
                móvil, como la cámara, recordatorios, cuentas de redes sociales
                y otras funciones.
              </li>
              <li>
                Si desea cambiar nuestro acceso o permisos, puede hacerlo en la
                configuración de su dispositivo.
              </li>
            </ul>
            <p>
              <strong>- Datos de Dispositivos Móviles.</strong> Recopilamos
              automáticamente información del dispositivo (como su identificador
              de dispositivo móvil, modelo y fabricante), sistema operativo,
              versión del sistema e información de configuración, números de
              identificación del dispositivo y APPS, tipo y versión del
              navegador, modelo de hardware, proveedor de servicios de Internet
              y/o operador móvil, y dirección de protocolo de Internet (IP) (o
              servidor proxy).
            </p>

            <p>
              <strong>- Notificaciones push.</strong> Podemos pedirle que le
              envíe notificaciones push con respecto a su cuenta o ciertas
              características de las APLICACIONES. Si no desea recibir dichas
              comunicaciones, puede deshabilitarlas en la configuración de su
              dispositivo.
            </p>

            <p>
              Esta información es necesaria principalmente para mantener la
              seguridad y el funcionamiento de nuestras APLICACIONES, para la
              solución de problemas y para nuestro análisis e informes internos.
            </p>

            <p>
              DEV_JF tratará los datos personales de todos los usuarios
              únicamente para aquellas operaciones de tratamiento para las que
              exista una base legal válida y en cumplimiento en todo momento del
              deber de informar al usuario y demás obligaciones esenciales en
              esta materia.
            </p>

            <h3>7.2 Controlador de datos</h3>
            <p>
              Los datos personales serán procesados por <strong>DEV_JF</strong>.
            </p>

            <h3>
              7.3 Propósitos, método, base legal para procesar datos personales
              y períodos de almacenamiento.
            </h3>
            <p>
              Los datos personales se procesarán de acuerdo con los fines
              descritos a continuación y de acuerdo con la forma, la base legal
              y el período de retención descritos para cada propósito.
            </p>

            <h4>- Prestación de los servicios solicitados</h4>
            <p>
              DEV_JF tratará los datos personales de aquellos usuarios que
              descarguen y utilicen las APPS y de aquellos que soliciten
              información a través de los medios disponibles a tal efecto para
              las siguientes finalidades:
            </p>
            <ul>
              <li>
                Responder y/o prestar dicha actividad y/o servicio, así como
                mantener la relación profesional y/o contractual que, en su
                caso, se establezca.
              </li>
              <li>
                Servicio al cliente por cualquiera de los medios de comunicación
                proporcionados para este propósito.
              </li>
              <li>
                Gestionar la facturación, cobro o reclamación de los servicios
                contratados.
              </li>
              <li>
                Realizar estadísticas, estudios e investigaciones dirigidas a
                evaluar los servicios contratados y responder a los usuarios.
              </li>
              <li>
                Mantener la correcta prestación del servicio y/o cumplir con
                cualquier obligación o regulación relacionada con la
                contratación del servicio contratado.
              </li>
            </ul>

            <p>
              DEV_JF informa que, para el correcto desarrollo de las finalidades
              descritas, se tratará la categoría de datos estrictamente
              necesaria y que se especificará en cada contratación de servicio.
            </p>

            <p>
              Conservaremos sus datos personales durante no más tiempo del
              necesario para mantener el propósito del procesamiento, es decir,
              durante la duración de la relación contractual para el uso de las
              APLICACIONES (incluida la obligación de retenerla para el estatuto
              de limitaciones aplicable), y cuando ya no sea necesario para ese
              propósito se eliminará con las medidas de seguridad adecuadas para
              garantizar su anonimato o destrucción completa.
            </p>

            <p>
              La base legal para dicho procesamiento será la prestación de los
              servicios contratados/solicitados.
            </p>

            <h4>
              - Interés legítimo en la investigación, la información y la mejora
              de los servicios.
            </h4>
            <p>
              DEV_JF tratará los datos personales facilitados por los usuarios,
              así como los generados posteriormente por el uso de los servicios,
              para las siguientes finalidades:
            </p>
            <ul>
              <li>
                Realizar trabajos de investigación y estadística con el estudio
                de las preferencias, gustos y/o hábitos de los usuarios con el
                fin de innovar y mejorar futuros servicios y/o contenidos.
              </li>
            </ul>
            <h2>¿A quién proporcionamos sus datos personales?</h2>
            <p>
              Toda la información del usuario será tratada con absoluta
              confidencialidad y manteniendo todas las medidas de seguridad
              necesarias para salvaguardarla. Asimismo, <strong>DEV_JF</strong>{" "}
              le informa que únicamente cederá sus datos personales a las
              empresas estrictamente necesarias para cumplir con la contratación
              de productos y/o servicios, como bancos para el pago de servicios.
            </p>

            <p>
              No compartimos su información personal con terceros, excepto en
              las siguientes circunstancias:
            </p>

            <ul>
              <li>
                <strong>Cumplimiento legal:</strong> Podemos compartir su
                información cuando sea necesario para cumplir con las leyes,
                regulaciones o solicitudes gubernamentales.
              </li>
              <li>
                <strong>Proveedores de servicios:</strong> Compartimos
                información con proveedores de servicios externos que nos ayudan
                a operar la aplicación, como servicios de alojamiento o análisis
                de datos, siempre bajo estrictas medidas de confidencialidad y
                seguridad.
              </li>
            </ul>

            <h3>7.3 Menores</h3>
            <p>
              Los servicios de las APPS están destinados a adultos.{" "}
              <strong>DEV_JF</strong> no será responsable del uso de las APPS
              por parte de un menor, siendo la descarga y uso de las APPS
              responsabilidad exclusiva del usuario.
            </p>

            <p>
              <strong>DEV_JF</strong> no recopila deliberadamente información de
              menores sin la autorización expresa por escrito de los padres y/o
              tutores de menores. Asimismo, <strong>DEV_JF</strong> utilizará
              los medios técnicos adecuados de Play Store y App Store para
              evitar que los menores accedan a los servicios ofrecidos en las
              diferentes APPS sin el consentimiento expreso de sus padres o
              tutores.
            </p>

            <p>
              Si <strong>DEV_JF</strong> detecta que un menor está utilizando
              alguna de las APPS y/o servicios ofrecidos por{" "}
              <strong>DEV_JF</strong>, procederá a cancelar la información
              enviada y la comunicará a la autoridad u organismo competente.
              Para ello, <strong>DEV_JF</strong> solicita la cooperación de
              todos los usuarios, en el sentido de que, si algún usuario detecta
              la divulgación y/o uso de alguno de estos datos, por favor
              comuníquelo a través del correo electrónico proporcionado, con el
              fin de proceder en consecuencia.
            </p>

            <h3>7.4 Transferencias internacionales</h3>
            <p>
              <strong>DEV_JF</strong> APPS están disponibles en tiendas de
              aplicaciones de todo el mundo. <strong>DEV_JF</strong> informa que
              está domiciliado en Bogotá, Colombia y, por tanto, sujeto a su
              normativa aplicable. Cualquier <strong>USUARIO</strong> que
              interactúe con <strong>DEV_JF</strong>{" "}
              <strong>CONOCE Y DA SU CONSENTIMIENTO EXPLÍCITO</strong> para la
              cesión de los datos personales facilitados a dicho país, lo que
              implica una cesión internacional de datos personales. No obstante,{" "}
              <strong>DEV_JF</strong> trata los datos de los{" "}
              <strong>USUARIOS</strong> con las garantías adecuadas y
              manteniendo siempre la seguridad de sus datos conforme a la
              normativa de protección de datos del país de residencia del{" "}
              <strong>USUARIO</strong> vigente en cada momento.
            </p>

            <h4>Transferencias Internacionales de Datos</h4>
            <p>
              <strong>DEV_JF</strong> informa que realiza las siguientes
              transferencias internacionales de datos de{" "}
              <strong>USUARIO</strong>:
            </p>

            <ul>
              <li>
                <strong>GOOGLE INC.:</strong> Más información en:{" "}
                <a href="https://policies.google.com/privacy" target="_blank">
                  Google Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>AMAZON WEB SERVICES (AWS):</strong> Más información en:{" "}
                <a href="https://aws.amazon.com/privacy/" target="_blank">
                  Amazon Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>NOTION LABS, INC.:</strong> Más información en:{" "}
                <a href="https://www.notion.so/privacy" target="_blank">
                  Notion Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>RENDER SERVICES, INC.:</strong> Más información en:{" "}
                <a href="https://render.com/privacy" target="_blank">
                  Render Privacy Policy
                </a>
                .
              </li>
              <li>
                <strong>TEMBO DATA SYSTEMS, INC.:</strong> Más información en:{" "}
                <a href="https://www.tembo.io/privacy" target="_blank">
                  Tembo Privacy Policy
                </a>
                .
              </li>
            </ul>

            <h4>Inclusión de Nuevos Proveedores</h4>
            <p>
              En caso de que <strong>DEV_JF</strong> incorpore nuevos
              proveedores que requieran la transferencia internacional de datos,
              se actualizará esta política de privacidad para reflejar los
              cambios. Cualquier <strong>USUARIO</strong> que continúe
              utilizando nuestros servicios tras dicha actualización se
              considerará que acepta y consiente la transferencia de sus datos
              personales a los nuevos proveedores, de acuerdo con la normativa
              aplicable.
            </p>

            <p>
              Al aceptar nuestros <strong>Términos y Condiciones</strong> y
              nuestra <strong>Política de Privacidad</strong>, usted acepta que
              su información personal sea transferida y almacenada de esta
              manera.
            </p>

            <h3>7.5 Ejercicio de los Derechos</h3>
            <p>
              <strong>DEV_JF</strong> informa a los interesados que tienen los
              siguientes derechos en relación con el tratamiento de sus datos
              personales:
            </p>

            <ul>
              <li>
                <strong>Acceso:</strong> Permite al interesado conocer si{" "}
                <strong>DEV_JF</strong> está procesando sus datos personales y,
                en caso afirmativo, obtener información detallada sobre los
                mismos.
              </li>
              <li>
                <strong>Rectificación:</strong> Permite corregir, actualizar o
                completar datos personales inexactos o incompletos.
              </li>
              <li>
                <strong>Supresión:</strong> Permite solicitar la eliminación de
                los datos personales cuando ya no sean necesarios para los fines
                para los que fueron recopilados, salvo que existan obligaciones
                legales o razones legítimas que justifiquen su conservación.
              </li>
              <li>
                <strong>Limitación del tratamiento:</strong> Permite solicitar
                la restricción del uso de los datos personales en determinadas
                circunstancias, como cuando se impugne su exactitud o la
                legalidad de su tratamiento, evitando su modificación o
                supresión mientras se resuelve la cuestión.
              </li>
              <li>
                <strong>Oposición:</strong> Permite al interesado oponerse al
                tratamiento de sus datos personales por motivos relacionados con
                su situación particular. <strong>DEV_JF</strong> dejará de
                tratarlos, salvo que existan razones legítimas imperiosas o sea
                necesario para el ejercicio o defensa de reclamaciones.
              </li>
              <li>
                <strong>Portabilidad:</strong> Permite recibir los datos
                personales en un formato estructurado, de uso común y legible
                por máquina, y transmitirlos a otro responsable del tratamiento
                cuando sea técnicamente posible.
              </li>
            </ul>

            <p>
              El titular de los datos podrá ejercer estos derechos o revocar su
              consentimiento enviando una solicitud escrita, junto con una copia
              de su documento de identidad, a la siguiente dirección de correo
              electrónico:{" "}
              <a href="mailto:johnrnriquez@gmail.com">johnrnriquez@gmail.com</a>
            </p>

            <h3>7.6 Consultas y Quejas ante una Autoridad Supervisora</h3>
            <p>
              Si tiene alguna consulta o inquietud sobre la protección de sus
              datos personales, puede ponerse en contacto con{" "}
              <strong>DEV_JF</strong> a través del correo electrónico{" "}
              <a href="mailto:johnrnriquez@gmail.com">johnrnriquez@gmail.com</a>
            </p>

            <p>
              En caso de que el usuario considere que sus derechos no han sido
              debidamente atendidos, podrá presentar una reclamación ante la
              autoridad supervisora de protección de datos de su país de
              residencia.
            </p>

            <h3>7.7 Seguridad</h3>
            <p>
              <strong>DEV_JF</strong> se compromete a adoptar todas las medidas
              técnicas y organizativas necesarias para garantizar la seguridad
              de los datos personales, evitando su alteración, pérdida,
              tratamiento o acceso no autorizado. Estas medidas son
              implementadas de acuerdo con el estado actual de la tecnología, la
              naturaleza de los datos y los riesgos asociados a su tratamiento,
              conforme a la normativa aplicable.
            </p>

            <p>
              Todas las transferencias de información realizadas por{" "}
              <strong>DEV_JF</strong>, ya sea con servidores propios o de
              terceros, se llevan a cabo de manera segura mediante protocolos de
              cifrado, incluyendo el uso de <strong>HTTPS</strong> para
              garantizar la integridad y confidencialidad de los datos.
            </p>

            <h3>7.8 Transferencia de Datos de Terceros a DEV_JF</h3>
            <p>
              Si un usuario proporciona a <strong>DEV_JF</strong> datos
              personales de terceros para la prestación de servicios, declara
              haber obtenido previamente su consentimiento expreso para su
              cesión y tratamiento conforme a esta{" "}
              <strong>Política de Privacidad</strong>.
            </p>

            <h3>7.9 Cambios en la Política de Privacidad</h3>
            <p>
              <strong>DEV_JF</strong> se reserva el derecho de actualizar esta{" "}
              <strong>Política de Privacidad</strong> en cualquier momento. La
              versión más reciente estará siempre disponible en las aplicaciones
              de <strong>DEV_JF</strong>.
            </p>

            <p>
              Si los cambios afectan a finalidades no previstas en esta{" "}
              <strong>Política de Privacidad</strong>, <strong>DEV_JF</strong>{" "}
              informará a los usuarios con la debida antelación a través de los
              medios de contacto proporcionados, para que puedan ejercer los
              derechos que consideren oportunos.
            </p>

            <h2>8. Responsabilidad</h2>
            <p>
              <strong>DEV_JF</strong> se compromete a ofrecer sus servicios con
              la mejor calidad posible. Sin embargo, no puede garantizar la
              ausencia de fallos, interrupciones o problemas técnicos,
              incluyendo aquellos causados por sistemas, virus, malware,
              interferencias, desconexiones o cualquier otro incidente que pueda
              afectar el funcionamiento de las aplicaciones.
            </p>

            <p>
              Asimismo, <strong>DEV_JF</strong> no será responsable por daños o
              perjuicios derivados del uso inadecuado de las aplicaciones por
              parte de los usuarios ni por acciones de terceros que afecten el
              servicio. La seguridad y protección de los dispositivos y sistemas
              utilizados por el usuario son responsabilidad exclusiva de este
              último.
            </p>

            <p>
              El usuario acepta que el uso de las aplicaciones es bajo su propia
              responsabilidad. En caso de disputas derivadas de un uso indebido
              de las aplicaciones o de la violación de los términos y
              condiciones, el usuario se compromete a mantener indemne a{" "}
              <strong>DEV_JF</strong>, sus afiliados y empleados frente a
              cualquier reclamación legal, incluyendo costos razonables de
              defensa legal.
            </p>

            <p>
              <strong>DEV_JF</strong> podrá suspender temporalmente el acceso a
              las aplicaciones por razones de seguridad, mantenimiento o mejora
              del servicio. Además, no será responsable por interrupciones
              derivadas de causas de fuerza mayor o eventos fuera de su control.
            </p>

            <p>
              Si el usuario no está satisfecho con las aplicaciones, sus
              contenidos o servicios, su única opción es dejar de utilizarlas.
            </p>

            <h2>9. Nulidad e ineficacia de las cláusulas</h2>
            <p>
              Si alguna disposición de estas{" "}
              <strong>Condiciones Generales</strong>,{" "}
              <strong>Condiciones Específicas</strong>,{" "}
              <strong>Política de Privacidad</strong>,{" "}
              <strong>Política de Cookies</strong> o{" "}
              <strong>Condiciones de Contratación</strong> fuera declarada nula
              o inaplicable, dicha nulidad o inaplicabilidad se limitará
              exclusivamente a la disposición afectada, sin que ello afecte la
              validez del resto del documento. En tal caso, se considerará que
              la disposición en cuestión no ha sido incluida, manteniéndose en
              vigor las demás condiciones.
            </p>

            <h2>10. Ley aplicable y jurisdicción</h2>
            <p>
              Cualquier cuestión relacionada con las <strong>APPS</strong>, sus
              contenidos o servicios será tratada conforme a la normativa y
              jurisdicción aplicable según la condición del usuario:
            </p>

            <ul>
              <li>
                <strong>Usuarios profesionales y/o entidades:</strong> Se
                regirán por las leyes del Estado de Florida, Estados Unidos, y
                cualquier disputa será sometida a su jurisdicción.
              </li>
              <li>
                <strong>Usuarios individuales:</strong> Se aplicará la normativa
                vigente en su país de residencia.
              </li>
            </ul>

            <p>
              En el caso de usuarios residentes en la Unión Europea, y en
              disputas de consumo, podrán acceder a la plataforma de resolución
              de litigios en línea de la Comisión Europea en:{" "}
              <a href="http://ec.europa.eu/consumers/odr/" target="_blank">
                http://ec.europa.eu/consumers/odr/
              </a>
              .
            </p>

            <h2>Contáctenos</h2>
            <p>
              Si tiene alguna pregunta sobre esta{" "}
              <strong>Política de Privacidad</strong>, puede contactarnos:
            </p>

            <ul>
              <li>
                Al visitar esta página en nuestro sitio web:{" "}
                <a
                  href="https://portafolio-v1-nub7.vercel.app/contact"
                  target="_blank"
                >
                  https://portafolio-v1-nub7.vercel.app/Contact
                </a>
              </li>
            </ul>

            <h3>Consideraciones adicionales</h3>
            <p>
              Asegúrese de revisar y cumplir con las{" "}
              <strong>políticas de privacidad y seguridad</strong> de{" "}
              <strong>Google Play Store</strong>, que pueden requerir que
              detalle específicamente el uso de datos confidenciales, como la
              información de inicio de sesión y cualquier conexión a bases de
              datos.
            </p>

            {/* Add the rest of the sections */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
