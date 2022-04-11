import Chartjs from "../Chartjs/Chartjs";
import RadarGraph from "../Radar/Radar";
import Nivo from "../Nivo/Nivo";
import './Dashboard.css';
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";

function Dashboard() {

    return (
        <div id="dash-cont">
            <Typography variant="h3">Hello I am the dashboard.</Typography>
            <Divider />
            <div className="radar-cont">
            <RadarGraph />
            </div>
            <div className="radar-cont">
            <Chartjs />
            </div>
            <div className="radar-cont">
            <Nivo />
            </div>
        </div>
    )
}

export default Dashboard;