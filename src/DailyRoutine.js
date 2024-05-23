

import "bootstrap/dist/css/bootstrap.min.css";

const DailyRoutine = () => {
  const dailyActivity = [
    "Wake-up",
    "Fresh-up",
    "Lecture",
    "Break-fast",
    "Revision",
    "Meals",
    "Monitoring",
    "study",
    "Meals",
    "study",
    "TP",
    "study",
    "Doubt-session",
    "Meals",
    "sleep",
  ];


  return (
    <div className="d-flex justify-content-center text-center">
      <div>
        <h1 className="m-5">Daily Activities</h1>
        
        <ul className="list-group list-group-flush">
          {dailyActivity.length > 0 ? dailyActivity.map((item, index) => (
            <li className="list-group-item fs-5" key={index}> {item} </li>
          )) : "Theere is No Daily Activity"}
        </ul>
      </div>
    </div>
  );
};
export default DailyRoutine;
