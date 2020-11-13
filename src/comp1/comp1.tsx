import React from "react";
import Comp2 from "../comp2/comp2";
import Comp3 from "../comp3/comp3";
import calendarLogo, { ReactComponent as Logo } from "./calendar.svg";
import comp1Styles from "./comp1.module.css";

function Comp1() {
  return (
    <div>
      <h1 className={comp1Styles.hello}>Hello World</h1>
      <img alt="dd" src={calendarLogo} height="50" />
      <Logo className={comp1Styles.logo} />
      <h2>HTML Table</h2>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>
      <Comp2 label="Mode">
        <h3>This comp tells the mode app is running in</h3>
        <p>This comp tells the mode app is running in</p>
      </Comp2>
      <Comp3></Comp3>
    </div>
  );
}

export default Comp1;
