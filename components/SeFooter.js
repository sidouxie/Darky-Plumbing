import React, { useState } from "react";
import Link from "next/link";
import DarkyLogo from "./icon/DarkyLogo";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function SeFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Votre message a bien été envoyé !"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="social-media">
            <div className="sec-logo">
              <DarkyLogo fill={"#fefefe"} width={140} height={100} />
            </div>
            <div className="sec-reseau">
              <div className="politiques">
                <IoAlertCircleOutline size="21" />
                <Link href="/politiques-de-confidentialite">
                  <a>politiques de confidentialité</a>
                </Link>
              </div>
              <div className="mail">
                <IoMail size="21" />
                <a
                  href="mailto:darky.plumbing@gmail.com"
                  rel="noopener noreferrer"
                  title="e-mail"
                >
                  darky.plumbing@gmail.com
                </a>
              </div>
              <div className="phone">
                <IoPhonePortraitOutline size="21" />
                <a
                  href="tel:+213551739299"
                  rel="noopener noreferrer"
                  title="numéro téléphone"
                >
                  +213 551 73 92 99
                </a>
              </div>
              <div className="facebook">
                <IoLogoFacebook size="21" />
                <a
                  href="https://www.facebook.com/Darkyplumbing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="page facebook"
                >
                  Darky-Plumbing
                </a>
              </div>
            </div>
          </div>
          <div className="contact">
            <h3>Envoie-nous un message</h3>
            <div className="text-form">
              <span className="bolder">POUR LES ENQUÊTES GÉNÉRALES</span> -
              Veuillez utiliser le formulaire de contact ci-dessous.
            </div>
            <form
              action="submit"
              name="contact"
              data-netlify="true"
              method="post"
              netlify-honeypot="bot-field"
              hidden
              onSubmit={handleSubmit}
            >
              <label>
                Nom :
                <input
                  type="text"
                  name="Prenom"
                  placeholder="Prénom"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label>
                Email :
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>

              <label>
                Message :
                <textarea
                  type="text"
                  name="message"
                  placeholder="envoie-nous un message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <input type="hidden" name="form-name" value="contact" />

              <input className="btn-form" type="submit" value="Envoyer" />
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
