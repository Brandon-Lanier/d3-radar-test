import { ResponsiveRadar } from "@nivo/radar";
import './Nivo.css'
import { useEffect } from "react";

function Nivo() {
  
    const data = [
    {
      definition: 'Balance',
      test1: 2,
      test2: 5

    },
    {
        definition: 'Confidence',
        test1: 3,
        test2: 3
      },
      {
        definition: 'Adaptability',
        test1: 5,
        test2: 4
      },
      {
        definition: 'Connection',
        test1: 2,
        test2: 3
      },
      {
        definition: 'Contribution',
        test1: 4,
        test2: 3
      },
      {
        definition: 'Empathy',
        test1: 5,
        test2: 3
      },
      {
        definition: 'Expression',
        test1: 2,
        test2: 2
      },
      {
        definition: 'Self-Control',
        test1: 2,
        test2: 1
      }
  ];

const testing = (data) => {
    console.log(data.id);
}
  return (
    <div id="container">
      <ResponsiveRadar
        data={data}
        // keys={["balance", "confidence", "adaptability", "connection", "contribution", "empathy", "expression", "selfControl" ]}
        keys={['test1', 'test2']}
        indexBy="definition"
        valueFormat=">-.2f"
        onClick={testing}
        margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
        borderColor={{ from: "color" }}
        gridLabelOffset={36}
        dotSize={10}
        dotColor={{ theme: "background" }}
        dotBorderWidth={2}
        colors={{ scheme: "nivo" }}
        blendMode="multiply"
        motionConfig="wobbly"
        legends={[
          {
            anchor: "top-left",
            direction: "column",
            translateX: -50,
            translateY: -40,
            itemWidth: 80,
            itemHeight: 20,
            itemTextColor: "#999",
            symbolSize: 12,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
}

export default Nivo;
