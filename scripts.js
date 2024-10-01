function loadContent(section) {
    let title = document.getElementById('page-title');
    let description = document.getElementById('page-description');
    let image = document.getElementById('page-image');
    let homeButton = document.querySelector('.home-button');

    switch(section) {
        case 'medios_guiados':
        title.innerHTML = "MEDIOS GUIADOS";
        description.innerHTML = `
            <p>Los medios guiados son aquellos en los que la señal se transmite a través de un medio físico tangible. La información se mueve por un camino definido, lo que ayuda a reducir la interferencia externa.</p>
    
            <h3>1.- Cable de Par Trenzado</h3>
            <p>Es uno de los tipos más comunes, utilizado en redes telefónicas y de computadoras. Se compone de pares de cables trenzados, lo que reduce la interferencia electromagnética. Existen dos tipos principales:</p>
            <ul>
                <li>Par trenzado sin apantallar (UTP): Más económico y más susceptible a interferencias.</li>
                <li>Par trenzado apantallado (STP): Tiene una capa de protección adicional contra interferencias.</li>
            </ul>
            
            <img src='imagen_par_trenzado.gif' alt='Cable de Par Trenzado' style='max-width: 100%; height: auto; display: block; margin: 0 auto; margin-top: 10px;'>
    
            <h3>2.- Cable Coaxial</h3>
            <p>Utilizado en sistemas de televisión por cable y algunas redes de banda ancha. Tiene un conductor central de cobre, rodeado por un aislante, una capa trenzada de metal (blindaje) y una cubierta exterior. Ofrece buena protección contra la interferencia electromagnética, lo que permite velocidades de transmisión más altas.</p>
            <img src='imagen_cable_coaxial.gif' alt='Cable Coaxial' style='max-width: 100%; height: auto; display: block; margin: 0 auto; margin-top: 10px;'>
    
            <h3>3.- Fibra Óptica</h3>
            <p>Uno de los medios más avanzados, que utiliza pulsos de luz para transmitir información a través de hilos de vidrio o plástico. Tiene una capacidad mucho mayor de ancho de banda y puede cubrir distancias largas sin necesidad de amplificadores. Existen dos tipos:</p>
            <ul>
                <li>Fibra Monomodo: Adecuada para transmisiones a largas distancias.</li>
                <li>Fibra Multimodo: Mejor para distancias cortas.</li>
            </ul>
            <img src='imagen_fibra_optica.jpg' alt='Fibra Óptica' style='max-width: 100%; height: auto; display: block; margin: 0 auto; margin-top: 10px;'>
        `;
        image.src = ''; // No necesitas una imagen principal aquí si estás incluyendo imágenes dentro del contenido.
        homeButton.style.display = "block"; // Muestra el botón de inicio
        break;
    
        case 'medios_no_guiados':
                title.innerHTML = "MEDIOS NO GUIADOS";
                description.innerHTML = `
                    <p>Estos medios utilizan el aire o el espacio vacío como canal de transmisión, sin depender de una estructura física definida.</p>
                    
                    <h3>1.- Microondas Terrestres</h3>
                    <p>Usan ondas electromagnéticas de alta frecuencia para transmitir información a largas distancias. Generalmente, se utilizan antenas parabólicas para enviar las señales a través de la atmósfera. Estas señales requieren líneas de vista directa entre las antenas, lo que significa que los obstáculos pueden bloquear o degradar la señal.</p>
                    <div style="text-align: center;">
                        <img src="microondas_terrestres.png" alt="Microondas Terrestres" style="max-width: 100%; height: auto;">
                    </div>
            
                    <h3>2.- Satélites de Comunicación</h3>
                    <p>Utilizan satélites situados en órbitas geoestacionarias o en órbitas más bajas para transmitir señales a través de largas distancias. Los satélites pueden retransmitir datos desde una parte del mundo a otra, ofreciendo cobertura global. Este tipo de medio se usa para televisión satelital, comunicaciones de emergencia y redes internacionales de datos.</p>
                    <div style="text-align: center;">
                        <img src=" satellite_comunicacion.png" alt="Satélites de Comunicación" style="max-width: 100%; height: auto;">
                    </div>
            
                    <h3>3.- Radiofrecuencia (RF)</h3>
                    <p>Las ondas de radio son uno de los medios no guiados más utilizados para transmitir información, especialmente en áreas rurales o de difícil acceso donde no se puede instalar infraestructura física. Se dividen en varias bandas según su frecuencia:</p>
                    <ul>
                        <li>Banda HF (Alta frecuencia): Usada para radios de onda corta.</li>
                        <li>Banda VHF (Muy alta frecuencia): Usada para transmisión de radio FM y televisión.</li>
                        <li>Banda UHF (Ultra alta frecuencia): Usada para televisión digital y algunos tipos de comunicaciones móviles.</li>
                    </ul>
                    <div style="text-align: center;">
                        <img src="radiofrecuencia.jpeg" alt="Radiofrecuencia" style="max-width: 100%; height: auto;">
                    </div>
            
                    <h3>4.- Infrarrojos</h3>
                    <p>Utilizados para comunicaciones de corto alcance, como los controles remotos de televisores y otros dispositivos electrónicos. También se utilizan en algunas redes LAN inalámbricas, aunque han sido en gran medida reemplazados por Wi-Fi.</p>
                    <div style="text-align: center;">
                        <img src="infrarrojos.jpeg" alt="Infrarrojos" style="max-width: 100%; height: auto;">
                    </div>
                `;
                image.src = '';
                homeButton.style.display = "block"; // Muestra el botón de inicio
                break;
            
                case 'medios_baja_potencia':
                    title.innerHTML = "MEDIOS DE BAJA POTENCIA";
                    description.innerHTML = `
                        <p>Están diseñados para comunicaciones de corto alcance y baja potencia.</p>
                
                        <h3>1.- Bluetooth</h3>
                        <p>Tecnología de radiofrecuencia de corto alcance utilizada para la comunicación entre dispositivos cercanos. Se emplea en teléfonos móviles, dispositivos portátiles, auriculares y otros aparatos. Permite la transferencia de datos sin necesidad de cables y tiene un alcance máximo de aproximadamente 100 metros.</p>
                        <div style="text-align: center;">
                            <img src="bluetooth.png" alt="Bluetooth" style="max-width: 100%; height: auto;">
                        </div>
                
                        <h3>2.- Wi-Fi (Wireless Fidelity)</h3>
                        <p>Utiliza ondas de radio de alta frecuencia para proporcionar acceso inalámbrico a Internet o redes de área local (LAN). Su alcance es mayor que el Bluetooth, cubriendo un rango de aproximadamente 100 a 300 metros, dependiendo del entorno y la tecnología del router.</p>
                        <div style="text-align: center;">
                            <img src="wifi.jpeg" alt="Wi-Fi" style="max-width: 100%; height: auto;">
                        </div>
                
                        <h3>3.- NFC (Near Field Communication)</h3>
                        <p>Utilizada para transferencias de datos entre dispositivos cercanos, generalmente en un rango de unos pocos centímetros. Es popular en aplicaciones de pagos sin contacto y en la autenticación de dispositivos.</p>
                        <div style="text-align: center;">
                            <img src="nfc.gif" alt="NFC" style="max-width: 100%; height: auto;">
                        </div>
                    `;
                    image.src = ''; // Puedes agregar una imagen relevante aquí si lo deseas
                    homeButton.style.display = "block"; // Muestra el botón de inicio
                    break;
                
                case 'medios_emergente':
                title.innerHTML = "MEDIOS EMERGENTES";
                description.innerHTML = `
                <p>Con el avance de la tecnología, también surgen nuevos medios y tecnologías que potencian las telecomunicaciones.</p>
                    
                <h3>1.- 5G</h3>
                <p>Es la nueva generación de redes móviles, que promete velocidades de transmisión mucho más rápidas que las de su predecesor, el 4G. Además de velocidades más altas, el 5G ofrece latencia baja y una mayor capacidad para manejar una cantidad masiva de dispositivos conectados, lo que lo hace ideal para la Internet de las Cosas (IoT).</p>
                <div style="text-align: center;">
                <img src="5g.jpg" alt="5G" style="max-width: 100%; height: auto;">
                </div>
                    
                <h3>2.- Li-Fi (Light Fidelity)</h3>
                <p>Esta tecnología utiliza luz visible para transmitir datos a alta velocidad. Aunque está en sus primeras etapas de desarrollo, promete ser una alternativa a Wi-Fi en ambientes donde las interferencias de radiofrecuencia son problemáticas.</p>
                <div style="text-align: center;">
                <img src="li-fi.jpeg" alt="Li-Fi" style="max-width: 100%; height: auto;">
                </div>
                `;
                image.src = ''; // Puedes agregar una imagen relevante aquí si lo deseas
                homeButton.style.display = "block"; // Muestra el botón de inicio
                break;
                case 'comparacion_guiados':
                title.innerHTML = "COMPARACIÓN";
                description.innerHTML = `
                <p>Los medios guiados son más fiables en términos de seguridad y estabilidad, ya que las señales están confinadas en un canal físico. Sin embargo, tienen limitaciones en la movilidad y el coste de instalación.</p>
                <p>Por otro lado, los medios no guiados ofrecen mayor flexibilidad y movilidad, lo que los hace esenciales para aplicaciones como redes móviles, satélites y comunicación en áreas remotas.</p>
                <div style="text-align: center;">
                <img src="comparativa.jpg" alt="Li-Fi" style="max-width: 100%; height: auto;">
                </div>
                `;
                image.src = ''; // Puedes agregar una imagen relevante aquí si lo deseas
                homeButton.style.display = "block"; // Muestra el botón de inicio
                break;
                        
                case 'importancia':
                title.innerHTML = "IMPORTANCIA";
                            description.innerHTML = `
                                <p>La elección del medio o canal de transmisión dependerá de diversos factores, como la distancia a cubrir, el tipo de información a transmitir, el coste, la velocidad requerida y la infraestructura disponible.</p>
                                <p>Los medios guiados son más adecuados para redes locales donde se requiere alta estabilidad y protección de la señal, mientras que los medios no guiados son ideales para cubrir grandes distancias y proporcionar servicios a áreas remotas.</p>
                                <div style="text-align: center;">
                                <img src="impo.jpg" alt="Li-Fi" style="max-width: 100%; height: auto;">
                                </div>
                            `;
                            image.src = ''; // Puedes agregar una imagen relevante aquí si lo deseas
                            homeButton.style.display = "block"; // Muestra el botón de inicio
                            break;
                                // Agrega más casos para los demás títulos

                
        case 'URL':
            title.innerHTML = "BIBLIOGRAFIAS";
            description.innerHTML = `
                <h3> Bibliografias </h3>
                <p>Farías, G. (2024, 14 agosto). Medios de comunicación - Qué son, tipos y su importancia. Concepto. https://concepto.de/medios-de-comunicacion/</p>
                <br> </br>
                <p>Software DELSOL. (2024, 7 mayo). Medios de comunicación ¿Qué son? ¿Cómo funcionan? Software del Sol. https://www.sdelsol.com/glosario/medios-de-comunicacion/?srsltid=AfmBOooP2pVIe7-6jgAVZFuVhn7FYgLWRAtxvekkmtTMcqC7GBEuEGcD</p>
                 <br> </br>
                <p>Otras fuentes... </p>
                
            `;
            image.src = '';
            homeButton.style.display = "block"; // Muestra el botón de inicio
            break;
            default:                
            title.innerHTML = "TIPOS DE MEDIOS O CANALES DE COMUNICACIÓN QUE EXISTEN EN TELECOMUNICACIONES";
            description.innerHTML = "";
            image.src = 'inicio.jpeg';
            homeButton.style.display = "none"; // Oculta el botón de inicio en la página principal
    }
}

function goHome() {
    loadContent('home');
}


