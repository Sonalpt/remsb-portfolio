import { React, useContext } from "react";
import { motion } from "framer-motion";
import { LanguageContext } from "../helpers/LanguageContext";
const About = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      <motion.main className="mainAbout" exit={{ opacity: 0 }}>
        <>
          {selectedLanguage === "english" ? (
            <h2>About me</h2>
          ) : (
            <h2>A propos</h2>
          )}
        </>

        <div className="aboutContainer">
          <>
            {selectedLanguage === "english" ? (
              <p>
                Since I was 5 years old, I have been connected to technology.
                I've always liked to tinker with everything, whether it's
                hardware or software. Fixing computers, cracking consoles,
                overclocking my smartphones. I have a, shall we say, native
                understanding of this dimension. Everything I enjoy in life is
                related to technology: Virtual reality, video games,
                photography, film, and more recently, design. Since high school,
                I've been told to become a developer. But I didn't like math, I
                wasn't good at it, so I quickly gave up the idea. But that was
                like closing my eyes to what was obvious to me. That's when I
                discovered web development.
              </p>
            ) : (
              <p>
                Depuis mes 5 ans, je suis connecté à la technologie. J'ai
                toujours aimé tout bidouiller, que ce soit hardware ou software.
                Préparer des ordinateurs, cracker des consoles, overclocker mes
                smartphones. J'ai une compréhension, disons, native de cette
                dimension. Tout ce qui me plait dans la vie, tourne autour de la
                technologie: La réalité virtuelle, les jeux-vidéo, la
                photographie, le cinéma, et plus récemment, le design. Depuis le
                lycée, on me dit de devenir développeur. Mais je n'aimais pas
                les mathématiques, je n'étais pas bon là-dedans, alors j'ai vite
                abandonné l'idée. Mais c'était comme fermer les yeux sur ce qui
                était évident pour moi. C'est là que j'ai découvert le
                développement web.
              </p>
            )}
          </>
          <>
            {selectedLanguage === "english" ? (
              <div className="aboutStrong">
                <span>This </span>
                <span>is </span>
                <span>never </span>
                <span>boring, </span>
                <span>the </span>
                <span>potential </span>
                <span>is </span>
                <span>endless.</span>
              </div>
            ) : (
              <div className="aboutStrong">
                <span>On </span>
                <span>ne </span>
                <span>s'ennuie </span>
                <span>jamais, </span>
                <span>le </span>
                <span>potentiel </span>
                <span>est </span>
                <span>infini.</span>
              </div>
            )}
          </>

          <br />
          <>
            {selectedLanguage === "english" ? (
              <p>
                I'm not a developer who memorizes by heart, or who knows all the
                technos of the world. I often forget the most basic syntax. But
                who cares? If I have a need, a specific problem, I investigate
                on the internet, I find the solution, I learn it, I understand
                it, and I apply it. Immediately. I'm very good at this, I can
                work with any technology you'd like to give me. <br /> <br />
                So, if you have an ambitious project, which requires an
                investment and a passion for everything I mentioned above, don't
                wait any longer,
              </p>
            ) : (
              <p>
                Je ne suis pas un développeur qui mémorise par coeur, ou qui
                connait toutes les technos du monde. J'oublie souvent la plus
                basique des syntaxes. Mais qui s'en soucie ? Si j'ai un besoin,
                un problème précis, j'enquête sur internet, je trouve la
                solution, je l'apprends, je l'a comprends, et je l'applique.
                Immediatement. Je suis très bon dans ce domaine, je m'accomode
                avec n'importe quelle technologie que vous me proposerez. <br />{" "}
                <br />
                Alors, si vous avez un projet ambitieux, qui demande un
                investissement et une passion pour tout ce que j'ai cité plus
                haut, n'attendez plus, contactez-moi !
              </p>
            )}
          </>

          <div className="aboutContact">
            <>
              {selectedLanguage === "english" ? (
                <a href="mailto:remsbdj@gmail.com">Contact me !</a>
              ) : (
                <a href="mailto:remsbdj@gmail.com">Contactez moi !</a>
              )}
            </>

            <div className="barHover"></div>
          </div>
        </div>
      </motion.main>
    </>
  );
};

export default About;
