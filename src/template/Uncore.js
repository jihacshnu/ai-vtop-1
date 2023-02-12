import React from 'react'
import Sidebar from "./Sidebar"
const Uncore = () => {
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
                                <td>

                                    15

                                </td>
                                <td >

                                    69

                                </td>
                                <td>


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
                                <tr >
                                    <th colSpan={3} style={{ backgroundColor: "#2980b9" }}>

                                        UNIVERSITY CORE

                                    </th>
                                    <th style={{ backgroundColor: "#2980b9" }}>

                                        69 Credits

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* <thead> */}
                                <tr align="center">
                                    <th colSpan="3" >

                                        Natural Science Core

                                    </th>
                                    <th >

                                        23 credits


                                    </th>
                                </tr>
                            {/* </thead> */}
                           
                            <tr>
                                <td >

                                    PHY1001

                                </td>
                                <td >

                                    Engineering Physics

                                </td>
                                <td >

                                    LTP

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    CHY1005

                                </td>
                                <td >

                                    Introduction To Computational Chemistry

                                </td>
                                <td >

                                    LTP

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    MAT1001

                                </td>
                                <td >

                                    Calculus And Laplace Transforms

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    MAT3002

                                </td>
                                <td >

                                    Applied Linear Algebra

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    MAT3003

                                </td>
                                <td >

                                    Probability, Statistics and Reliability

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td  >

                                    MAT2002

                                </td>
                                <td >
                                    Discrete Mathematics and Graph Theory

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr  align= "center" >
                                    <th colSpan={3} >

                                        Basic Engineering Sciences Core

                                    </th>
                                    <th>

                                        12 credits

                                    </th>
                                </tr>
                            {/* </thead> */}
                            <tr>
                                <td >
                                </td>
                                <td >
                                    Engineering Design and Modeling

                                </td>
                                <td >

                                    LTP

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    EEE1001

                                </td>
                                <td >
                                    Electric Circuits and Systems

                                </td>
                                <td >

                                    LTP

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    CSA2001

                                </td>
                                <td >
                                    Fundamentals Of AI and ML

                                </td>
                                <td >

                                    LTP

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr align= "center">
                                    <th colSpan={3} >

                                        Skill Development Courses

                                    </th>
                                    <th >

                                        13 credits

                                    </th>
                                </tr>
                            {/* </thead> */}

                            <tr>
                                <td >

                                    CSE1021

                                </td>
                                <td >

                                    Introduction To Problem Solving and Programming

                                </td>
                                <td >

                                    LP

                                </td>
                                <td >

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    CSE3002

                                </td>
                                <td >

                                    Programming In Java

                                </td>
                                <td >

                                    LP

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >

                                    Competitive Coding Practices

                                </td>
                                <td >

                                    LP

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >

                                    Skills For Employment

                                </td>
                                <td >

                                    P

                                </td>
                                <td >

                                    1

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >

                                    Quantitative Skills

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    2

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr align= "center">
                                    <th colSpan={3} >


                                        Humanities Social Science &amp; Management Core


                                    </th>
                                    <th>

                                        7 credits

                                    </th>
                                </tr>
                            {/* </thead> */}

                            <tr>
                                <td >

                                    ENG1004

                                </td>
                                <td >

                                    Effective Communication

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    ENG2005

                                </td>
                                <td >

                                    Advanced Technical Communication Skills

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    2

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    CHY1006

                                </td>
                                <td >

                                    Environmental Sustainability

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    2

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr align= "center">
                                    <th colSpan={3} >

                                        Projects & Internships

                                    </th>
                                    <th >

                                        14 credits

                                    </th>
                                </tr>
                            {/* </thead> */}
                            <tr>
                                <td >

                                    DSN2098

                                </td>
                                <td >

                                    Project Exhibition - I

                                </td>
                                <td >
                                    PJ

                                </td>
                                <td >

                                    1

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    DSN2099

                                </td>
                                <td >

                                    Project Exhibition - II

                                </td>
                                <td >
                                    PJ

                                </td>
                                <td >

                                    1

                                </td>
                            </tr>
                            <tr>
                                <td >

                                    DSN3099

                                </td>
                                <td >

                                    Engineering Project in Community Service

                                </td>
                                <td >

                                    PJ

                                </td>
                                <td >

                                    2

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >

                                    Summer Industrial Internship

                                </td>
                                <td >

                                    PJ

                                </td>
                                <td >

                                    1

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >

                                    Semester Internship

                                </td>
                                <td>

                                    PJ

                                </td>
                                <td>

                                    4

                                </td>
                            </tr>
                            <tr>
                                <td>
                                </td>
                                <td>

                                    Capstone Project

                                </td>
                                <td>

                                    PJ

                                </td>
                                <td>

                                    5

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

export default Uncore
