import React from "react";
import Coresub from "./Coresub";

export default function CS208() {
  const elejune23 = {
    date: " 11 jun 2023",
    firsttitle: "finite automata",
    firstbody: [
      <>
        <h2>
          two types of finite Automate
          <ul>
            <li>deterministic automata</li>
            <li>non-deterministic automata</li>
          </ul>
        </h2>
        <p><b>you see i dont want to type anymore its not the optimal way therefore ill just provide the link of this topic (good one)</b></p>
        <h3> <a href="https://www.geeksforgeeks.org/introduction-of-finite-automata/" rel="noreferrer" target="_blank"> click </a> to learn about finite automata</h3>
      </>,
    ],
  };
  return (
    <div>
      <Coresub date={elejune23.date} firsttitle={elejune23.firsttitle} firstbody={elejune23.firstbody}/>
      <Coresub date= "12 june 2023" firsttitle="mass bunk was conducted due to scarcity of water"/>
    </div>
  );
}
