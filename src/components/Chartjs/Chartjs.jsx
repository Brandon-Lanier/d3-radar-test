import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Radar } from 'react-chartjs-2';
  import './Chartjs.css'

  function Chartjs() {
    
    ChartJS.register(
        RadialLinearScale,
        PointElement,
        LineElement,
        Filler,
        Tooltip,
        Legend
      );

    const data = {
        labels: ["Balance", "Confidence", "Adaptability", "Connection", "Contribution", "Empathy", "Expression", "Self Control"],
        datasets: [
          {
            label: 'Test 1',
            data: [2, 4.3, 3, 4, 2, 3, 1, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Test 2',
            data: [3, 3, 1, 2, 2, 5, 1, 5],
            backgroundColor: 'rgba(28, 39, 140, 0.2)',
            borderColor: 'rgba(28, 39, 140, 1)',
            borderWidth: 1,
          },
        ],
      };

      const test = (event) => {
          console.log('you clicked on a graph', event);
      }

    return (
        <div id="chartjs-container">
            <Radar 
            data={data}
            options={{
                events: ['click'],
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        max: 5,
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1
                        } 
                    }
                }
            }}
            />
        </div>

    )
  }

  export default Chartjs;