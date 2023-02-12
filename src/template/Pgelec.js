import React from 'react'
import Sidebar from './Sidebar'

const Pgelec = () => {
  return (
    <div>
      <Sidebar />
      <div className="container my-3" style={{ marginTop: "75px" }}>
        <center>
          <table style={{ border: "1", cellspacing: "0" }}>
            <thead>
              <tr>
                <th rowSpan={2}>
                  Course Structure:
                </th>
                <th >
                  Programme Core (PC)

                </th>
                <th >

                  Programme Elective (PE)

                </th>
                <th >
                  University Core (UC)

                </th>
                <th >

                  University Elective (UE)

                </th>
                <th style={{ width: "100", backgroundColor: "#2980b9" }}>
                  Total

                </th>
              </tr>
              <tr>
                <td >

                  55

                </td>
                <td >

                  15

                </td>
                <td >

                  69

                </td>
                <td >

                  21

                </td>
                <td style={{ width: "100", backgroundColor: "#2980b9" }}>
                  160

                </td>
              </tr>
            </thead>
          </table>


          <div className="table" style={{ paddingTop: "5px", paddingBottom: "5px", paddingLeft: "10px", paddingRight: "10px", marginTop: "75px" }}>
            <table style={{ cellspacing: "0" }}>
              <thead>
                <tr align="center">
                  <th colSpan={3} style={{ backgroundColor: "#2980b9" }}>

                    PROGRAM ELECTIVE

                  </th>
                  <th style={{ backgroundColor: "#2980b9" }}>

                    Any 15 Credits

                  </th>
                </tr>
              </thead>
              <tbody>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    Core AI and ML

                  </th>
                </tr>

              {/* </thead> */}
              <tr>
              <td>

                CSA3004

              </td>
              <td>

                Data Visualization

              </td>
              <td>

                LP

              </td>
              <td>

                3

              </td>
              </tr>
              <tr>
                <td>
                  CSA4019
                </td>
                <td>

                  Machine Learning with Big Data

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA4016

                </td>
                <td>

                  Hardware Architectures for Machine Learning

                </td>
                <td>
                  LT
                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA4005

                </td>
                <td>

                  Expert Systems and Fuzzy Logic

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  GPU Programming and Architecture

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA3001

                </td>
                <td>

                  Agent Based Intelligent System

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA3002

                </td>
                <td>

                  Convex Optimization

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Bayesian Data Analysis

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >


                    AI, Neuroscience and Natural Intelligence


                  </th>
                </tr>
              {/* </thead> */}
              <tr>
                <td>

                  CSA4011

                </td>
                <td>

                  Information Retrieval and Web Search

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA4012

                </td>
                <td>

                  Introduction to Brain and Neuro Science

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA4015

                </td>
                <td>

                  Computational Intelligence

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Knowledge Engineering

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Theoretical and Computational Neuroscience

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    Robotics

                  </th>
                </tr>
              {/* </thead> */}

              <tr>
                <td>
                </td>
                <td>

                  Introduction to Vision and Robotics

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Robotics and Control

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Kinematics and Kinetics for Robotics

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Robotics Operating System

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA2002

                </td>
                <td>

                  Introduction to Drones

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    Speech And Vision

                  </th>
                </tr>
              {/* </thead> */}
              <tr>
                <td>

                  CSE3010

                </td>
                <td>

                  Computer Vision

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSG2002

                </td>
                <td>

                  Human Computer Interaction

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Speech Systems

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Surveillance Video Analytics and Image Processing

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Computer Vision for Autonomous Vehicles

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Immersive Multimedia

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Pattern Recognition and Image Analysis

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    AI: Cyber, Gaming, Automation

                  </th>
                </tr>
              {/* </thead> */}
              <tr>
                <td>
                </td>
                <td>

                  AI In Bitcoins and Cryptocurrencies

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  AI In Game Development

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Pervasive AI for IOT Applications

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Game AI

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  AI In Industry 4.0

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Cloud Analytics &amp; Automation

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    Future Skills

                  </th>
                </tr>
              {/* </thead> */}
              <tr>
                <td>

                  NAS1001

                </td>
                <td>

                  Nasscom Future Skills - Associative Data Analyst

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  NAS2001

                </td>
                <td>

                  Nasscom Future Skills – Advanced Data Analyst

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  C# And .Net Programming

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Advanced Python Programming

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                  CSE4019
                </td>
                <td>

                  Advanced Java Programming

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  R Programming

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Scala Programming

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  UML Programming

                </td>
                <td>

                  LP

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    Data Analytics

                  </th>
                </tr>
              {/* </thead> */}
              <tr>
                <td>

                  CSA4007

                </td>
                <td>

                  Cognitive Analytics

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Predictive and Time Series Analysis

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Graph Analytics for Big Data

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Parallel And Distributed Systems

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>

                  CSA4010

                </td>
                <td>

                  Data Analytics Using Scala Programming

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  AI Into Kubernetes

                </td>
                <td>

                  LT

                </td>
                <td>

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Independent Study Elective

                </td>
                <td>

                  PJ

                </td>
                <td>

                  3

                </td>
              </tr>
              {/* <thead> */}
                <tr align="center">
                  <th colSpan={3} >

                    Independent Study Elective

                  </th>
                </tr>
              {/* </thead> */}
              <tr>
                <td>
                </td>
                <td>

                  Design Project

                </td>
                <td rowSpan={5} >
                </td>
                <td rowSpan={5} >

                  3

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Simulation Project

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Product Development

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Special Project

                </td>
              </tr>
              <tr>
                <td>
                </td>
                <td>

                  Computer Project

                </td>
              </tr>
              </tbody>
            </table>
          </div></center>
      </div>
    </div>
  )
}

export default Pgelec
