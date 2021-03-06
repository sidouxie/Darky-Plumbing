import React from "react";

function Devis() {
  const data = [
    {
      id: 1,
      title: "fuite et infiltration",
      img: "/images/articles/1.jpg",
      desc: [
        "recherche de fuite",
        "fuite lavabo & évier",
        "fuite wc & salle de bain",
        "fuite radiateur & chauffe-eau",
      ],
      prix: "1500",
    },
    {
      id: 2,
      title: "dépannage w.c",
      img: "/images/articles/2.jpg",
      desc: [
        "recherche de fuite",
        "réparation de fuite wc",
        "débouchage wc",
        "réparation de chasse d'eau",
      ],
      prix: "1500",
    },
    {
      id: 3,
      title: "installation plombrie",
      img: "/images/articles/3.jpg",
      desc: [
        "installation robinetterie",
        "installation chauffe-eau",
        "installation lavabo",
        "installation évier",
      ],
      prix: "2500",
    },
    {
      id: 4,
      title: "installation chauffage",
      img: "/images/articles/4.jpg",
      desc: [
        "installation de chauffage",
        "installation de wc",
        "installation de salle de bain",
        "installation douche ou baignoire",
      ],
      prix: "3000",
    },
  ];
  return (
    <div className="cards">
      {data.map((data) => (
        <div className="card" key={data.id}>
          <div className="bg-title">
            <h3>{data.title}</h3>
          </div>
          <div className="img-article">
            <img src={data.img} alt={data.title} />
          </div>
          <div className="desc-article">
            <ul>
              {data.desc.map((dispo) => (
                <li key={dispo}>
                  <span>{dispo}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="prix">
            <span>
              <div className="mini">À partir de </div>
            </span>
            <h5>
              {" "}
              <div className="momo">{data.prix}</div>
              <strong>DA TTC</strong>
            </h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Devis;
