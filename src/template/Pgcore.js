import React from 'react'
import Sidebar from './Sidebar'
const Pgcore = () => {
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

                    PROGRAM CORE

                  </th>
                  <th style={{ backgroundColor: "#2980b9" }}>

                    55 Credits

                  </th>
                </tr>
              </thead>
              <tbody>
              <tr>
              <td>

                CSD3009

              </td>
              <td>

                Data Structures and Analysis of Algorithms

              </td>
              <td>

                LTP

              </td>
              <td>

                4

              </td>
              </tr>
              <tr>
                <td>
                  CSA2003
                </td>
                <td>

                  Digital Logic and Computer Architecture

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>

                  CSE3001

                </td>
                <td>

                  Database Management Systems
                </td>
                <td>
                  LTP
                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>

                  CSE2001

                </td>
                <td>

                  Object Oriented Programming with C++

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>
                  CSA4002
                </td>
                <td>

                  Artificial Neural Networks

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>

                  CSE3003

                </td>
                <td>

                  Operating Systems
                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>
                  -
                </td>
                <td>

                  Reinforcement And Representation Learning

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>
                  CSA4008
                </td>
                <td>

                  Applied Machine Learning

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>

                  CSE3006

                </td>
                <td>

                  Computer Networks

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>

                  CSA4003

                </td>
                <td>

                  Data Mining and Warehousing


                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>

                  CSA4006

                </td>
                <td>

                  Natural Language Processing

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>
                  CSE3011
                </td>
                <td>
                  Python Programming
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
                  CSE2004
                </td>
                <td>

                  Theory Of Computation and Compiler Design

                </td>
                <td>

                  LT

                </td>
                <td>

                  4

                </td>
              </tr>
              <tr>
                <td>
                  CSA4004
                </td>
                <td>

                  Deep Learning

                </td>
                <td>

                  LTP

                </td>
                <td>

                  4

                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </center>
      </div>
    </div>
  )
}

export default Pgcore
