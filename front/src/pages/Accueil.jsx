import calories from "../assets/icon/calories-icon.png";
import carb from "../assets/icon/carbs-icon.png";
import fat from "../assets/icon/fat-icon.png";
import protein from "../assets/icon/protein-icon.png";
import MyBarChart from "../components/Activitediag";
import MyRadarChart from "../components/Intensitediag";
import ScoreRadialBarChart from "../components/Scorediag";
import MyLineChart from "../components/Timediag";
function Accueil() {
  return (
    <div className="container">
      <div className="message-accueil">
        <h2>
          Bonjour <span className="user-name">Thomas</span>
        </h2>
        <p>Félicitations ! Vous avez explosé vos objectifs hier </p>
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
                <p className="graph-time-p">Duré moyennes des sessions</p>
              </div>
              <MyLineChart />
            </div>
            <div className="graph">
              <MyRadarChart />
            </div>
            <div className="graph">
              <p className="p-score">Score :</p>
              <ScoreRadialBarChart />
            </div>
          </div>
        </div>
        <div className="info-user">
          <div className="infos">
            <img className="icon-cal" src={calories} alt=""></img>
            <p>
              1.930kCal<span>Calories</span>
            </p>
          </div>
          <div className="infos">
            <img className="icon-prot" src={protein} alt=""></img>
            <p>
              155g<span>Protéines</span>
            </p>
          </div>
          <div className="infos">
            <img className="icon-carb" src={carb} alt=""></img>
            <p>
              290g<span>Glucides</span>
            </p>
          </div>
          <div className="infos">
            <img className="icon-fat" src={fat} alt=""></img>
            <p>
              50g
              <span>Lipides</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
