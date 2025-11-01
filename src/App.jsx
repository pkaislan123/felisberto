import './App.css'
import capa from './assets/capa.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faYoutube,
  faFacebook,
  faLinkedin,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faGlobe, faEnvelope, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react';



function App() {

  useEffect(() => {
    const applyCSS = () => {
      const blocks = document.querySelectorAll('.instagram-clean .instagram-media');
      blocks.forEach(block => {
        // Remove cabeçalho e footer gerados pelo Instagram
        const firstChild = block.firstChild;
        const lastChild = block.lastChild;
        if (firstChild) firstChild.style.display = 'none';
        if (lastChild) lastChild.style.display = 'none';
      });
    };

    // Função para carregar o script do Instagram
    if (!window.instgrm) {
      const script = document.createElement('script');
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => {
        window.instgrm.Embeds.process();
        applyCSS();
      };
    } else {
      window.instgrm.Embeds.process();
      // Pequeno delay para garantir que o embed foi renderizado
      setTimeout(applyCSS, 500);
    }
  }, []);


  return (
    <div className="container">
      <div className="card">
        <div className="profile-wrapper">
          <img src={capa} alt="Foto de perfil" className="profile-img" />
          <FontAwesomeIcon icon={faCheckCircle} className="verified-icon" />
        </div>
        <h2>Menotti Calliari</h2>

        <div className="social-icons">
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/menotticalliari/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://meusite.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGlobe} />
          </a>

          {/* Email */}
          <a href="mailto:felisberto.bentes@gruporosinetos.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>

          {/* WhatsApp */}
          <a href="https://wa.me/559188975705" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            href="#"
            onClick={() =>
              navigator.share?.({
                title: 'Compartilhar',
                url: window.location.href,
              })
            }
          >
            <FontAwesomeIcon icon={faShareAlt} />
          </a>
        </div>

        {/* Post completo do Facebook */}
        <div className="fb-post" style={{ paddingTop: 30 }}>
          <iframe
            src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F841898551516634%2F&show_text=true&width=500"
            style={{ border: 'none', overflow: 'hidden', width: '100%', minHeight: '400px' }}
            scrolling="no"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            title="Facebook post"
          />

        </div>

        <div
          className="instagram-clean"
          dangerouslySetInnerHTML={{
            __html: `
          <blockquote class="instagram-media" 
                      data-instgrm-captioned 
                      data-instgrm-permalink="https://www.instagram.com/reel/DQepysSjh1T/" 
                      data-instgrm-version="14">
          </blockquote>
        `
          }}
        />

      </div>


    </div>
  )
}

export default App
