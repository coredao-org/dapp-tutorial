import React from "react";
import { Routes, Route } from "react-router-dom";  // Import Routes and Route
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import CampaignPage from "./Campaign/[campainAddress]/Page";
import Dashboard from "./dashboard/[walletAddress]/page";
import CreateCampaign from "./components/CreateCampaign";


export default function App() {
  return (
    <div>
      <Navbar />
      <Routes> {/* Use Routes to define your route paths */}
        <Route path="/" element={<Home />} />
        <Route path="/Campaign/:campaignAddress" element={<CampaignPage/>} />
        <Route path="/dashboard/:id" element={<Dashboard/>} />
        <Route path="/create-campaign" element={<CreateCampaign/>} />
      </Routes>
    </div>
  );
}
