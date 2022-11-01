import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import "./Graph.css";
import store from "../../../Redux/Store";


function Graph(): JSX.Element {

    ChartJS.register(...registerables);

    const vacationList = store.getState().vacationState.vacation;
    const newVacation = vacationList.filter(v=> {
      if(v.followers > 0){
        return v
      }
      
  
    })

    const graph = {
        labels: newVacation.map(v => v.location),
        datasets: [
            {
              label: 'Followers number',
              data: newVacation.map(v => v.followers),
              backgroundColor: [
                "#B4FF9F"
              ],
              borderWidth: 1,
            }
        ]
}

    return (
        <div className="Graph">
        <Bar
          data={graph}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Admin graphs"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            },
            scales: {
              y: {
                 ticks: {
                    stepSize: 1
                 }
              }
           },
          }}
        />
      </div>
    );
}

export default Graph;


