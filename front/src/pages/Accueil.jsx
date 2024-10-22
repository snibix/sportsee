import calories from "../assets/icon/calories-icon.png";
import carb from "../assets/icon/carbs-icon.png";
import fat from "../assets/icon/fat-icon.png";
import protein from "../assets/icon/protein-icon.png";
import MyBarChart from "../components/Activitediag";
import MyRadarChart from "../components/Intensitediag";
import ScoreRadialBarChart from "../components/Scorediag";
import MyLineChart from "../components/Timediag";
import React, { useState, useEffect } from "react";

const Accueil = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("http://localhost:3000/user/12");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const responseData = await response.json();
        // On stocke les données de l'utilisateur, pas l'objet complet
        setUser(responseData.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Impossible de charger les données de l'utilisateur");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (isLoading) {
    return <div className="container">Chargement...</div>;
  }

  if (error) {
    return <div className="container">Erreur: {error}</div>;
  }

  if (!user || !user.userInfos) {
    return (
      <div className="container">Aucune donnée utilisateur disponible</div>
    );
  }

  const { userInfos, keyData } = user;

  return (
    <div className="container">
      <div className="message-accueil">
        <h2>
          Bonjour <span className="user-name">{userInfos.firstName}</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
      </div>
      <div className="content-accueil">
        <div className="content-accueil-tab">
          <div className="activite">
            <div className="activite-header">
              <p>Activités quotidienne</p>
              <div className="activite-legend">
                <p>
                  <span className="circle-poids"></span>Poids (kg)
                </p>
                <p>
                  <span className="circle-cal"></span>Calories brulées (kCal)
                </p>
              </div>
            </div>
            <MyBarChart />
          </div>
          <div className="stats">
            <div className="graph graph-time">
              <div>
                <p className="graph-time-p">Durée moyenne des sessions</p>
              </div>
              <MyLineChart />
            </div>
            <div className="graph">
              <MyRadarChart />
            </div>
            <div className="graph graph-score">
              <p className="p-score">Score :</p>
              <ScoreRadialBarChart />
            </div>
          </div>
        </div>
        <div className="info-user">
          <div className="infos">
            <img className="icon-cal" src={calories} alt="icône calories" />
            <p>
              {keyData.calorieCount}kCal<span>Calories</span>
            </p>
          </div>
          <div className="infos">
            <img className="icon-prot" src={protein} alt="icône protéines" />
            <p>
              {keyData.proteinCount}g<span>Protéines</span>
            </p>
          </div>
          <div className="infos">
            <img className="icon-carb" src={carb} alt="icône glucides" />
            <p>
              {keyData.carbohydrateCount}g<span>Glucides</span>
            </p>
          </div>
          <div className="infos">
            <img className="icon-fat" src={fat} alt="icône lipides" />
            <p>
              {keyData.lipidCount}g<span>Lipides</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil;
