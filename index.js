$(document).ready(function(){
  $('.items').slick({
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      autoplaySpeed: 1500, 
      slidesToShow: 3,
      slidesToScroll: 4,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });

  console.log("Slick initialized:", typeof $.fn.slick);
});

//Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6818e89f5510d619105dc436/1iqgkpc0r';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();


    const translations = {
        en: {
            brand: "Sara",
            services: "Services",
            about: "About",
            reviews: "Reviews",
            contact: "Contact",
            language: "Language",
            carousel_title_1: "Sara Noriega Turatti Translations",
            carousel_text_1: "Translation, proofreading, and writing services",
            carousel_text_2: "Certified Professional Translator since 2017",
            about_me: "About Me",
            achievements: "Achievements",
            carousel_title_2: "Unlock a world of precision and clarity with specialized translation services.",
            carousel_text_3: "As a professional linguist, I bring expertise in technical, scientific, and audiovisual domains, bringing language gaps seamlessly. Let words transcend borders.",
            contact_me: "Contact Me",
            carousel_title_3: "Kind words from my customers.",
            carousel_text_4: "See what my customers said about my work!",
            reviews: "Reviews",
            service_title_1: "Literary Translations",
            service_text_1: "I offer high-quality literary translations for books, articles, and other literary works. My translations capture the essence of the original text and convey the intended message to the target audience.",
            service_title_2: "Technical & Scientific Translations",
            service_text_2: "I provide accurate and reliable translations  for technical and scientific documents, including manuals, articles and whitepapers.",
            service_title_3: "Audiovisual Translation & Localization",
            service_text_3: "I specialize in the field of audiovisual translation, including subtitling, dubbing, website translation, and video game localization, covering product descriptions, about pages, and other web content.",
            service_title_4: "Proofreading & Copywriting",
            service_text_4: "As a professional proofreader and copywriter, I offer specialized services in enhancing written content.",
            my_story: "My Story",
            about_me_h: "About Me",
            about_me_text_1: "I am a certified freelance translator since 2017. My passion for languages and cultures drives me to provide accurate and culturally appropriate translations for my clients. I have a Bachelor’s degree in Translation and Interpreting, with a specialization in technical and scientific contexts.",
            about_me_text_2: "Additionally, I hold a Master’s degree in Audiovisual Translation, including subtitling, dubbing, and localisation. My translations are not only SEO-friendly but also culturally sensitive, ensuring that the website effectively connects with the target audience. My language combinations are as follows:",
            about_me_text_3: "English to Spanish / Catalan",
            about_me_text_4: "German to Spanish / Catalan",
            about_me_text_5: "French to Spanish / Catalan",
            achievements: "Achievement",
            ach_text_1: "Translation of a book:",
            ach_text_2: "Subtitling in Spanish of the first season of the series <i>Murder, She Wrote</i> for Prime Video.",
            cust_text_1: "Sara is a talented translator who is able to deliver accurate and culturally appropriate translations. She is a pleasure to work with and always goes above and beyond to ensure client satisfaction.",
            cust_name_1: "Elizabeth D’Alessandro",
            cust_comp_1: "Smartphotography",
            cust_text_2: "Sara has been our contact for several years now when we need high-quality translations into Spanish. For Threema, she translates various website content and texts for the admin console of our Threema Work business app, among other things. She also helps us with proofreading and post-editing, always punctually and reliably.",
            cust_name_2: "Threema",
            cust_comp_2: "https://threema.ch/en",
            cust_text_3: "The translation service was excellent – fast, precise, and professional. The text was flawlessly and stylistically adapted into three languages within a very short timeframe. I am extremely satisfied and can fully recommend SNTranslations.",
            cust_name_3: "M. Ameseder",
            cust_comp_3: "Schlatter Industries AG",
            contact_title: "Get in touch",
            contact_text: "I'm always on the lookout to work with new clients. If you're interested in working with me, please get in touch in one of the following ways.",
            address_title: "Address",
            address_text: "Seehaldenstrasse 99, 8800 Thalwil, Switzerland",
            phone: "Phone",
            e_mail: "E-mail",
            opening_hours: "LinkedIn",
            opening_hours_days1: "Mon - Fri",
            opening_hours_days2: "Sat - Sun",
            opening_hours_time1: "9am - 5pm",
            opening_hours_time2: "9am - 2pm",
            Tag_FullName: "Full Name",
            Tag_Email: "Email",
            Tag_Phone: "Phine Number",
            Tag_Subject: "Subject",
            Tag_Message: "Message",
            Send_Message: "Send Message"
        },
        es: {
            brand: "Sara",
            services: "Servicios",
            about: "Sobre mí",
            reviews: "Reseñas",
            contact: "Contacto",
            language: "Idioma",
            carousel_title_1: "Sara Noriega Turatti Translations",
            carousel_text_1: "Traducción, corrección y redacción",
            carousel_text_2: "Traductora certificada desde 2017",
            about_me: "Sobre mí",
            achievements: "Logros",
            carousel_title_2: "Conéctate con el mundo con servicios de traducción especializados",
            carousel_text_3: "Como lingüista profesional, aporto experiencia en ámbitos técnicos, científicos y audiovisuales, superando las barreras lingüísticas.",
            contact_me: "Contacto",
            carousel_title_3: "Reseñas de mis clientes",
            carousel_text_4: "¡Descubre los comentarios de mis clientes!",
            reviews: "Reseñas",
            service_title_1: "Traducción literaria",
            service_text_1: "Ofrezco traducciones literarias para libros, artículos y otras obras literarias. Mis traducciones capturan la esencia del texto original y transmiten el mensaje deseado al público objetivo.",
            service_title_2: "Traducción técnica y científica",
            service_text_2: "Ofrezco traducciones precisas y de alta calidad de documentos técnicos y científicos, entre los que se incluyen manuales, artículos y documentos técnicos.",
            service_title_3: "Traducción audiovisual y localización",
            service_text_3: "Me especializo en el campo de la traducción audiovisual, con especial atención en la subtitulación, el doblaje, la traducción de páginas web, aplicaciones y la localización de videojuegos. Esto incluye la traducción de descripciones de productos y otros contenidos web.",
            service_title_4: "Corrección y redacción de textos",
            service_text_4: "Como correctora y redactora profesional, ofrezco servicios especializados para mejorar el contenido escrito.",
            my_story: "Mi historia",
            about_me_h: "Sobre mí",
            about_me_text_1: "Soy traductora autónoma certificada desde 2017. Mi pasión por los idiomas y las culturas hacen que mis traducciones sean precisas y culturalmente apropiadas para mis clientes. Cuento con un grado en Traducción e Interpretación, con especialización en textos técnicos y científicos. Soy traductora autónoma certificada desde 2017.",
            about_me_text_2: "Además, tengo un máster en Traducción Audiovisual, que abarca subtitulado, doblaje y localización. Mis traducciones de localización no solo son compatibles con SEO, sino que también son sensibles a las diferencias culturales, lo que garantiza que el sitio web conecte de forma eficaz con el público objetivo. Mis combinaciones de idiomas son las siguientes:",
            about_me_text_3: "inglés a español / catalán",
            about_me_text_4: "alemán a español / catalán",
            about_me_text_5: "francés a español / catalán",
            achievements: "Logros",
            ach_text_1: "Traducción de un libro:",
            ach_text_2: "Subtitulado al español de la primera temporada de la serie <i>Se ha escrito un crimen</i> para Prime Video.",
            cust_text_1: "Sara es una traductora con talento capaz de entregar traducciones precisas y culturalmente apropiadas. Es un placer trabajar con ella y siempre va más allá para garantizar la satisfacción del cliente.",
            cust_name_1: "Elizabeth D'Alessandro",
            cust_comp_1: "Smartphotography",
            cust_text_2: "Sara es nuestro contacto desde hace años cuando necesitamos traducciones de alta calidad al español. Traduce para Threema diversos contenidos de la web y textos para la consola de administración de nuestra app para empresas Threema Work, entre otras tareas. También nos ayuda con la corrección y la postedición, siempre de forma rápida y eficiente.",
            cust_name_2: "Threema",
            cust_comp_2: "https://threema.ch/es",
            cust_text_3: "El servicio de traducción fue excelente: rápido, preciso y profesional. El texto se tradujo de manera impecable y con estilo a tres idiomas en muy poco tiempo. Estoy sumamente satisfecho y puedo recomendar SNTranslations sin ninguna reserva.",
            cust_name_3: "M. Ameseder",
            cust_comp_3: "Schlatter Industries AG",
            contact_title: "Contacto",
            contact_text: "Ponte en contacto conmigo si deseas trabajar conmigo o si necesitas más información sobre mis servicios. ",
            address_title: "Dirección",
            address_text: "Seehaldenstrasse 99, 8800 Thalwil, Suiza",
            phone: "Teléfono",
            e_mail: "E-mail",
            opening_hours: "LinkedIn",
            opening_hours_days1: "Lunes - Viernes",
            opening_hours_days2: "Sábado - Domingo",
            opening_hours_time1: "9 - 17",
            opening_hours_time2: "9 - 14",
            Tag_FullName: "Nombre",
            Tag_Email: "E-mail",
            Tag_Phone: "Número de teléfono",
            Tag_Subject: "Asunto",
            Tag_Message: "Mensaje",
            Send_Message: "Enviar mensaje"
        },
        de: {
            brand: "Sara",
            services: "Was ich anbiete",
            about: "Über mich",
            reviews: "Bewertungen",
            contact: "Kontakt",
            language: "Sprache",
            carousel_title_1: "Sara Noriega Turatti Translations",
            carousel_text_1: "Übersetzungs-, Korrektur- und Schreibdienstleistungen",
            carousel_text_2: "Zertifizierte Übersetzerin seit 2017",
            about_me: "Über mich",
            achievements: "Erfolge",
            carousel_title_2: "KOMMUNIZIERE MIT DER WELT",
            carousel_text_3: "Erschliesse dich einer Welt der Präzision und Klarheit mit spezialisierten Übersetzungsdienstleistungen. Ich bin Expertin und bringe fachliche Kenntnisse in technischen, wissenschaftlichen und audiovisuellen Bereichen mit. Lass Worte Grenzen überwinden und Sprachbarrieren der Vergangenheit angehören.",
            contact_me: "Kontakt",
            carousel_title_3: "Nette Worte von meinen Kunden",
            carousel_text_4: "Was meine Kunden über mich sagen!",
            reviews: "Bewertungen",
            service_title_1: "Literarische Übersetzungen",
            service_text_1: "Ich biete hochwertige Übersetzungen für Bücher, Artikel und andere literarische Texte an. Meine Arbeit erfasst die Essenz des Originaltextes und vermittelt die beabsichtigte Botschaft an die Zielgruppe.",
            service_title_2: "Technische und wissenschaftliche Übersetzungen",
            service_text_2: "Ich bin Expertin für präzisen Übersetzungen von technischen und wissenschaftlichen Dokumenten, einschliesslich Handbücher, Artikel und Whitepapers.",
            service_title_3: "Audiovisuelle Übersetzung und Lokalisierung",
            service_text_3: "Ich bin auf audiovisuelle Übersetzungen spezialisiert, mit Fokus auf auf Untertitelung, Synchronisation, Website-Übersetzungen und Videospiellokalisierung. Dazu gehören Übersetzungen von Produktbeschreibungen und anderen Webinhalten.",
            service_title_4: "Korrekturlesen und Copywriting",
            service_text_4: "Als professionelle Korrektorin biete ich spezialisierte Dienstleistungen zur Verbesserung schriftlicher Inhalte an.",
            my_story: "Meine Geschichte",
            about_me: "Über mich",
            about_me_text_1: "Ich bin seit 2017 zertifizierte, freiberufliche Übersetzerin. Meine Leidenschaft für Sprachen und Kulturen treibt mich an, meinen Kunden genaue und kulturell sowie inhaltlich passende Übersetzungen zu liefern. Ich habe einen Bachelorabschluss in << Übersetzen und Dolmetschen >> mit einer Spezialisierung in technischen und wissenschaftlichen Texten.",
            about_me_text_2: "Darüber hinaus habe ich einen Masterabschluss in audiovisueller Übersetzung, einschliesslich Untertitelung, Synchronisation und Lokalisierung. Meine Übersetzungen sind nicht nur SEO-freundlich, sondern auch und sichergestellt ist, dass die Website effektiv mit der Zielgruppe in Kontakt tritt. Meine Sprachkombinationen sind wie folgt:",
            about_me_text_3: "Englisch > Spanisch/Katalanisch",
            about_me_text_4: "Deutsch > Spanisch/Katalanisch",
            about_me_text_5: "Französisch > Spanisch/Katalanisch",
            achievements: "Erfolge:",
            ach_text_1: "Übersetzung eines Buches:",
            ach_text_2: "Untertitelung der ersten Staffel der Serie Mord ist ihr Hobby für Prime Video auf Spanisch.",
            cust_text_1: "Sara ist eine talentierte Übersetzerin, die präzise Übersetzungen liefert. Es ist eine Freude, mit ihr zusammenzuarbeiten, und sie scheut keine Mühen, um die Kundenzufriedenheit sicherzustellen.",
            cust_name_1: "Elizabeth D'Alessandro",
            cust_comp_1: "Smartphotography",
            cust_text_2: "Sara ist bereits seit mehreren Jahren unsere Ansprechpartnerin, wenn wir qualitative Übersetzungen ins Spanische benötigen. Für Threema übersetzt sie unter anderem verschiedene Website-Inhalte und Texte für die Admin-Konsole unserer Business-App Threema Work. Auch bei Korrektoraten und Post-Editing ist sie uns behilflich, stets zeitnah und zuverlässig.",
            cust_name_2: "Threema",
            cust_comp_2: "https://threema.ch/de",
            cust_text_3: "Die Übersetzungsdienstleistung war hervorragend – schnell, präzise und professionell. Innerhalb kürzester Zeit wurde der Text einwandfrei und stilistisch in drei Sprachen passend übertragen. Ich bin äußerst zufrieden und kann SNTranslations uneingeschränkt weiterempfehlen.",
            cust_name_3: "M. Ameseder",
            cust_comp_3: "Schlatter Industries AG",
            contact_title: "Kontaktiere mich",
            contact_text: "Wenn du an einer Zusammenarbeit mit mir interessiert bist, kontaktiere mich bitte auf einem der folgenden Wege.",
            address_title: "Address",
            address_text: "Seehaldenstrasse 99, 8800 Thalwil, Switzerland",
            phone: "Telefon",
            e_mail: "E-Mail",
            opening_hours: "LinkedIn",
            opening_hours_days1: "Mo - Fr",
            opening_hours_days2: "Sa - So",
            opening_hours_time1: "9h - 17h",
            opening_hours_time2: "9h - 14h",
            Tag_FullName: "Name",
            Tag_Email: "Email",
            Tag_Phone: "Telefonnummer",
            Tag_Subject: "Betreff",
            Tag_Message: "Nachricht",
            Send_Message: "Nachricht senden"
        }
    };

// Listen for language change from the dropdown menu
document.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
        e.preventDefault(); // Prevent default behavior of the link
        
        const selectedLang = this.getAttribute("data-lang"); // Get the selected language
        
        // Update the language on the <html> tag for accessibility
        document.documentElement.lang = selectedLang;
        
        // Update all elements with data-i18n attribute
        document.querySelectorAll("[data-i18n]").forEach(el => {
            const translation = translations[selectedLang][el.getAttribute("data-i18n")];
            el.innerHTML = translation || el.innerHTML; // Use innerHTML instead of textContent
        });
    });
});   