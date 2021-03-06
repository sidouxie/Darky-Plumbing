import React, { useState } from "react";
import Link from "next/link";
import DarkylogoFooter from "./icon/DarkylogoFooter";
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
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [numero, setNumero] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", prenom, numero, email, message }),
    })
      .then(() => {
        alert("Votre message a bien été envoyé !");
        setPrenom("");
        setEmail("");
        setNumero("");
        setMessage("");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <footer>
      <div className="container">
        <div className="flex">
          <div className="social-media">
            <div className="sec-logo">
              <DarkylogoFooter fill={"#4d5561"} width={200} height={200} />
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
          <div className="contact" id="contacty">
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
                Nom* :
                <input
                  type="text"
                  name="prenom"
                  placeholder="Nom"
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
                  required
                />
              </label>

              <label>
                Numéro :
                <input
                  type="tel"
                  name="numero"
                  placeholder="+213 - 080 00 00 00"
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                />
              </label>

              <label>
                Email* :
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </label>

              <label>
                Message* :
                <textarea
                  type="text"
                  name="message"
                  placeholder="envoie-nous un message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </label>

              <input type="hidden" name="form-name" value="contact" />

              <button className="btn-form" type="submit" value="Envoyer">
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div className="section-copyright">
          <hr></hr>
          <p>Copyright © 2021 Darky-Plumbing</p>
          <p>
            Designed {"&"} coded by
            <a
              href="https://sidouxie.com"
              rel="noopener noreferrer"
              target="_blank"
              title="sidouxie site web"
            >
              Sidouxie.
            </a>{" "}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
