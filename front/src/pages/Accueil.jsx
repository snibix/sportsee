//////////////////////////////////////////////////////////////////// A TERMINER VOIR POUR LE 2 VOIR POUR LE FAIRE ET 3 EME CORRECTION AFFICHER LES NAME DIAGRAMME
// LE PREMIER ET DERNIER SONT GOOD JUSTE AJUSTER LE CSS
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
  // States pour chaque type de données
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Utiliser useEffect pour récupérer les données
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        // Appels multiples pour chaque type de données
        const userResponse = await fetch("http://localhost:3000/user/18");
        const activityResponse = await fetch(
          "http://localhost:3000/user/18/activity"
        );
        const averageSessionsResponse = await fetch(
          "http://localhost:3000/user/18/average-sessions"
        );
        const performanceResponse = await fetch(
          "http://localhost:3000/user/18/performance"
        );

        // Vérifier les réponses
        if (
          !userResponse.ok ||
          !activityResponse.ok ||
          !averageSessionsResponse.ok ||
          !performanceResponse.ok
        ) {
          throw new Error("Erreur de récupération des données");
        }

        // Transformer les réponses en JSON
        const userData = await userResponse.json();
        const activityData = await activityResponse.json();
        const averageSessionsData = await averageSessionsResponse.json();
        const performanceData = await performanceResponse.json();

        // Stocker les données dans les states
        setUser(userData.data);
        setActivity(activityData.data);
        setAverageSessions(averageSessionsData.data);
        setPerformance(performanceData.data);
      } catch (error) {
        setError("Erreur lors de la récupération des données");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="container">Chargement...</div>;
  }

  if (error) {
    return <div className="container">Erreur : {error}</div>;
  }

  if (!user || !activity || !averageSessions || !performance) {
    return <div className="container">Aucune donnée disponible</div>;
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
            <MyBarChart activity={activity} />
          </div>
          <div className="stats">
            <div className="graph graph-time">
              <div>
                <p className="graph-time-p">Durée moyenne des sessions</p>
              </div>
              <MyLineChart sessionsData={averageSessions} />
            </div>
            <div className="graph radar-chart">
              <MyRadarChart performance={performance} />
            </div>
            <div className="graph graph-score">
              <p className="p-score">Score :</p>
              <ScoreRadialBarChart user={user} />
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
