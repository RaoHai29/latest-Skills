import React from "react";
import "./Category.css";
import { Stack, Typography, Button } from "@mui/material";
import glasssearch from "../Images/search-glass.png";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook";
import SecurityUpdateGoodIcon from "@mui/icons-material/SecurityUpdateGood";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import EmergencyRecordingIcon from "@mui/icons-material/EmergencyRecording";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import BarChartIcon from "@mui/icons-material/BarChart";
import DrawIcon from "@mui/icons-material/Draw";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PsychologyIcon from "@mui/icons-material/Psychology";
import DevicesIcon from "@mui/icons-material/Devices";

const Category = () => {
  const selectjobs = [
    {
      id: 0,
      job: "WordPress Developer",
      count: "(124)",
      icon: <LanguageIcon />,
    },
    {
      id: 1,
      job: "Frontend Developer",
      count: "(17)",
      icon: <LaptopChromebookIcon />,
    },
    {
      id: 2,
      job: "UX UI Designer",
      count: "(63)",
      icon: <SecurityUpdateGoodIcon />,
    },
    {
      id: 3,
      job: "Seo Expert",
      count: "(196)",
      icon: <SavedSearchIcon />,
    },
    {
      id: 4,
      job: "Digital Marketeer",
      count: "(274)",
      icon: <CrisisAlertIcon />,
    },
    {
      id: 5,
      job: "App Developer",
      count: "(274)",
      icon: <SecurityUpdateGoodIcon />,
    },
    {
      id: 6,
      job: "Video Editors",
      count: "(84)",
      icon: <EmergencyRecordingIcon />,
    },
    {
      id: 7,
      job: "Game Developers",
      count: "(56)",
      icon: <SportsEsportsIcon />,
    },
    {
      id: 8,
      job: "Facebook Ads Expert",
      count: "(374)",
      icon: <RocketLaunchIcon />,
    },
    {
      id: 9,
      job: "Data Scientists",
      count: "(12)",
      icon: <BarChartIcon />,
    },
    {
      id: 10,
      job: "Copywriters",
      count: "(12)",
      icon: <DrawIcon />,
    },
    {
      id: 11,
      job: "Amazon Experts",
      count: "(290)",
      icon: <ShoppingBagIcon />,
    },
    {
      id: 12,
      job: "Dropshipper",
      count: "(53)",
      icon: <ShoppingBagIcon />,
    },
    {
      id: 13,
      job: "Amazon Experts",
      count: "(290)",
      icon: <ShoppingBagIcon />,
    },
    {
      id: 14,
      job: "Google Experts",
      count: "(290)",
      icon: <SupportAgentIcon />,
    },
    {
      id: 15,
      job: "Virtual Asistant",
      count: "(374)",
      icon: <RocketLaunchIcon />,
    },
    {
      id: 16,
      job: "Teachers",
      count: "(127)",
      icon: <PsychologyIcon />,
    },
    {
      id: 17,
      job: "Full Stack Developer",
      count: "(124)",
      icon: <DevicesIcon />,
    },
  ];
  return (
    <>
      <div className="Category">
        <div className="category-main">
          <div id='cate-head'>
          <Stack direction="row" sx={{width:'max-content'}}>
            <Typography variant="h2" component="h2" className="h2">
              Choose from <span style={{ color: "#0077FF" }}>150+</span> Skills
              Workers
            </Typography>
            <img src={glasssearch} className="glass" alt="searching glass" />
          </Stack>
          </div>
          <Stack className="search-bar-1" direction="row">
            <SearchIcon
              sx={{
                fontSize: "33px",
                padding: "10px",
                borderTopLeftRadius: "25px",
                borderBottomLeftRadius: "25px",
                paddingRight: "20px",
              }}
              className="icon"
            />
            <input
              className="searching"
              type="search"
              value="search for catogory"
              name="search"
              id="search"
            />
            <Button className="btn-search">Search</Button>
          </Stack>

          <div className="select-jobs">
            {selectjobs.map((item) => (
              <Button
                variant="outlined"
                className="select-btn"
                endIcon={item.icon}
              >
                {item.job} <span style={{ color: "black" }}>{item.count}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
