import React from "react";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";
import { Video } from "../Video";

export const Event = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  );
};
