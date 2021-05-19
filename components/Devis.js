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
      prix: "4500",
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
      prix: "9000",
    },
    {
      id: 3,
      title: "installation plombrie",
      img: "/images/articles/3.jpg",
      desc: [
        "installation robinetterie",
        "installation tuyauterie",
        "installation lavabo",
        "autre installation",
      ],
      prix: "16500",
    },
    {
      id: 4,
      title: "installation chauffage",
      img: "/images/articles/4.jpg",
      desc: [
        "installation de chauffage",
        "installation de wc",
        "installation de salle de bain",
        "installation & chauffe-eau",
      ],
      prix: "34500",
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
                <li key={dispo}>{dispo}</li>
              ))}
            </ul>
          </div>
          <div className="prix">
            <span>À partir de </span>
            <h5> {data.prix} DA TTC</h5>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Devis;
