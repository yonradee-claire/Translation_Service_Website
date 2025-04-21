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
            about_me: "About Me",
            about_me_text_1: "I am a certified freelance translator since 2017. My passion for languages and cultures drives me to provide accurate and culturally appropriate translations for my clients. I have a Bachelor’s degree in Translation and Interpreting, with a specialization in technical and scientific contexts.",
            about_me_text_2: "Additionally, I hold a Master’s degree in Audiovisual Translation, including subtitling, dubbing, and localisation. My translations are not only SEO-friendly but also culturally sensitive, ensuring that the website effectively connects with the target audience. My language combinations are as follows:",
            about_me_text_3: "English to Spanish / Catalan",
            about_me_text_4: "German to Spanish / Catalan",
            about_me_text_5: "French to Spanish / Catalan",
            achievements: "Achievement",
            ach_text_1: "Translation of a book:",
            ach_text_2: "Subtitling in Spanish of the first season of the series Murder, She Wrote for Prime Video.",
            cust_text_1: "Sara is a talented translator who is able to deliver accurate and culturally appropriate translations. She is a pleasure to work with and always goes above and beyond to ensure client satisfaction.",
            cust_name_1: "Elizabeth D’Alessandro",
            cust_comp_1: "Smartphotography",
            cust_text_2: "Sara has been our contact for several years now when we need high-quality translations into Spanish. For Threema, she translates various website content and texts for the admin console of our Threema Work business app, among other things. She also helps us with proofreading and post-editing, always punctually and reliably.",
            cust_name_2: "Threema",
            cust_comp_2: "https://threema.ch/en",
            contact_title: "Get in touch",
            contact_text: "I'm always on the lookout to work with new clients. If you're interested in working with me, please get in touch in one of the following ways.",
            address_title: "Address",
            address_text: "Seehaldenstrasse 99, 8800 Thalwil, Switzerland",
            phone: "Phone",
            e_mail: "E-mail",
            opening_hours: "Opening Hours",
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
            carousel_title_2: "Conéctate con el mundo con servicios de traducción especializados.",
            carousel_text_3: "Como lingüista profesional, aporto experiencia en ámbitos técnicos, científicos y audiovisuales, superando las barreras lingüísticas.",
            contact_me: "Contacto",
            carousel_title_3: "Reseñas de mis clientes.",
            carousel_text_4: "¡Descubre lo que mis clientes han escrito sobre mí!",
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
            about_me_text_1: "Soy traductora autónoma certificada desde 2017. Mi pasión por los idiomas y las culturas hacen que mis traducciones sean precisas y culturalmente apropiadas para mis clientes. Cuento con un grado en Traducción e Interpretación, con especialización en textos técnicos y científicos. Soy traductora autónoma certificada desde 2017. Mi pasión por los idiomas y las culturas me permite ofrecer traducciones precisas y culturalmente apropiadas para mis clientes.",
            about_me_text_2: "Además, tengo un máster en Traducción Audiovisual, que abarca subtitulado, doblaje y localización. Mis traducciones de localización no solo son compatibles con SEO, sino que también son sensibles a las diferencias culturales, lo que garantiza que el sitio web conecte de forma eficaz con el público objetivo. Mis combinaciones de idiomas son las siguientes:",
            about_me_text_3: "inglés a español / catalán",
            about_me_text_4: "alemán a español / catalán",
            about_me_text_5: "francés a español / catalán",
            achievements: "Logros",
            ach_text_1: "Traducción de un libro:",
            ach_text_2: "Subtitulado al español de la primera temporada de la serie Se ha escrito un crimen para Prime Video.",
            cust_text_1: "Sara es una traductora con talento capaz de entregar traducciones precisas y culturalmente apropiadas. Es un placer trabajar con ella y siempre va más allá para garantizar la satisfacción del cliente.",
            cust_name_1: "Elizabeth D'Alessandro",
            cust_comp_1: "Smartphotography",
            cust_text_2: "Sara es nuestro contacto desde hace años cuando necesitamos traducciones de alta calidad al español. Traduce para Threema diversos contenidos de la web y textos para la consola de administración de nuestra app para empresas Threema Work, entre otras tareas. También nos ayuda con la corrección y la postedición, siempre de forma rápida y eficiente.",
            cust_name_2: "Threema",
            cust_comp_2: "https://threema.ch/es",
            contact_title: "Contacto",
            contact_text: "Ponte en contacto conmigo si deseas trabajar conmigo o si necesitas más información sobre mis servicios. ",
            address_title: "Dirección",
            address_text: "Seehaldenstrasse 99, 8800 Thalwil, Suiza",
            phone: "Teléfono",
            e_mail: "E-mail",
            opening_hours: "Horario",
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
            services: "Dienstleistungen",
            about: "Über mich",
            reviews: "Bewertungen",
            contact: "Kontakt",
            language: "Sprache",
            carousel_title_1: "Sara Noriega Turatti Übersetzungen",
            carousel_text_1: "Übersetzung, Lektorat und Texterstellung",
            carousel_text_2: "Zertifizierte professionelle Übersetzerin seit 2017",
            about_me: "Über mich",
            achievements: "Erfolge",
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
            service_title_4: "Proofreading & copywriting",
            service_text_4: "As a professional proofreader and copywriter, I offer specialized services in enhancing written content.",
            about_me: "About Me",
            about_me_text_1: "I am a certified freelance translator since 2017. My passion for languages and cultures drives me to provide accurate and culturally appropriate translations for my clients. I have a Bachelor’s degree in Translation and Interpreting, with a specialization in technical and scientific contexts.",
            about_me_text_2: "Additionally, I hold a Master’s degree in Audiovisual Translation, including subtitling, dubbing, and localisation. My translations are not only SEO-friendly but also culturally sensitive, ensuring that the website effectively connects with the target audience. My language combinations are as follows:",
            about_me_text_3: "English to Spanish / Catalan",
            about_me_text_4: "English to Spanish / Catalan",
            about_me_text_5: "English to Spanish / Catalan",
            achievements: "Achievement",
            ach_text_1: "Translation of a book:",
            ach_text_2: "Subtitling in Spanish of the first season of the series Murder, She Wrote for Prime Video.",
            cust_text_1: "Sara ist eine talentierte Übersetzerin, die in der Lage ist, genaue und kulturell angemessene Übersetzungen zu liefern. Es ist ein Vergnügen, mit ihr zu arbeiten, und sie setzt sich stets für die Zufriedenheit ihrer Kunden ein.",
            cust_name_1: "Elizabeth D'Alessandro",
            cust_comp_1: "Smartphotography",
            cust_text_2: "Sara ist bereits seit mehreren Jahren unsere Ansprechpartnerin, wenn wir qualitative Übersetzungen ins Spanische benötigen. Für Threema übersetzt sie unter anderem verschiedene Website-Inhalte und Texte für die Admin-Konsole unserer Business-App Threema Work. Auch bei Korrektoraten und Post-Editing ist sie uns behilflich, stets zeitnah und zuverlässig.",
            cust_name_2: "Threema",
            cust_comp_2: "https://threema.ch/de",
            contact_title: "Get in touch",
            contact_text: "I'm always on the lookout to work with new clients. If you're interested in working with me, please get in touch in one of the following ways.",
            address_title: "Address",
            address_text: "Seehaldenstrasse 99, 8800 Thalwil, Switzerland",
            phone: "Phone",
            e_mail: "E-mail",
            opening_hours: "Opening Hours",
            opening_hours_days1: "Mon - Fri",
            opening_hours_days2: "Sat - Sun",
            opening_hours_time1: "9am - 5pm",
            opening_hours_time2: "9am - 2pm",
            Tag_FullName: "Full Name",
            Tag_Email: "Email",
            Tag_Phone: "Phone Number",
            Tag_Subject: "Subject",
            Tag_Message: "Message",
            Send_Message: "Send Message"
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
            el.textContent = translation || el.textContent; // Fallback if translation is missing
        });
    });
});   