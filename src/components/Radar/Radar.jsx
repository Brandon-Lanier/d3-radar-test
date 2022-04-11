import Radar from "react-d3-radar";
import './Radar.css'



function RadarGraph() {
    
    // { key: "balance", label: "Balance" },
    // { key: "confidence", label: "Self-Confidence" },
    // { key: "adaptability", label: "Adaptability" },
    // { key: "connection", label: "Connection" },
    // { key: "contribution", label: "Contribution" },
    // { key: "empathy", label: "Empathy" },
    // { key: "expression", label: "Self-Expression"},
    // { key: "selfControl", label: "Self-Control"}
    const dataSet = [
        {
          key: "test1",
          label: "Test 1",
          values: {
            balance: 5,
            confidence: 3,
            adaptability: 4,
            connection: 2,
            contribution: 5,
            empathy: 1,
            expression: 4,
            selfControl: 2
          },
        },
        {
          key: "test2",
          label: "Test 2",
          values: {
            balance: 2,
            confidence: 5,
            adaptability: 5,
            connection: 3,
            contribution: 2,
            empathy: 1,
            expression: 5,
            selfControl: 1
          },
        },
      ];

const click = (event) => {
    console.log('Clicked on this', event);
}
  return (
    <div id="radar-container">
      <Radar
        width={400}
        height={400}
        padding={70}
        domainMax={5}
        highlighted={null}
        onClick={click}
        data={{
          variables: [
            { key: "balance", label: "Balance" },
            { key: "confidence", label: "Self-Confidence" },
            { key: "adaptability", label: "Adaptability" },
            { key: "connection", label: "Connection" },
            { key: "contribution", label: "Contribution" },
            { key: "empathy", label: "Empathy" },
            { key: "expression", label: "Self-Expression"},
            { key: "selfControl", label: "Self-Control"}
          ],
          sets: dataSet
        }}
      />
    </div>
  );
}

export default RadarGraph;
