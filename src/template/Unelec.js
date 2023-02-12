import React from 'react'
import Sidebar from './Sidebar'

const Unelec = () => {
    return (
        <div>
            <Sidebar />
            <div className="table" style={{ marginTop: "75px" }}>
                <center>
                    <table style={{ cellspacing: "0" }} >
                        <thead>
                            <tr>
                                <th rowSpan='2'>
                                    Course Structure

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
                                <tr >
                                    <th colSpan={3} style={{ backgroundColor: "#2980b9" }}>

                                        University Elective

                                    </th>
                                    <th style={{ backgroundColor: "#2980b9" }}>

                                        21 Credits

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                            {/* <thead> */}
                                <tr  align= "center" >
                                    <th colSpan="3" >


                                        Natural Science Electives (Select any 2 Subject)


                                    </th>
                                    <th >

                                        Any 6 Credits

                                    </th>
                                </tr>
                            {/* </thead> */}
                            <tr>
                                <td >

                                    MAT2003

                                </td>
                                <td >
                                    Applied Numerical Methods

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

                                    MAT3008

                                </td>
                                <td >
                                    Computational Game Theory

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td>

                                    MAT2004

                                </td>
                                <td >
                                    Operations Research

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

                                    MAT2001

                                </td>
                                <td >
                                    Differential and Difference Equations

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td  >

                                    MAT3004

                                </td>
                                <td >
                                    Random Process

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

                                    MAT3016

                                </td>
                                <td >
                                    Stochastic Process

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

                                    MAT3017

                                </td>
                                <td >
                                    Statistical Inferences and Serious of Functions

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr align= "center" >
                                    <th colSpan='3'>


                                        Multidisciplinary Electives (Select any 2 Subject)


                                    </th>
                                    <th >

                                        Any 6 Credits

                                    </th>
                                </tr>
                            {/* </thead> */}
                            <tr>
                                <td >

                                    CSG2002

                                </td>
                                <td >
                                    Human-Computer Interaction

                                </td>
                                <td >

                                    LT

                                </td>
                                <td w>

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >
                                    Biometric and Security Systems

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
                                </td>
                                <td >
                                    Sensor and IOT

                                </td>
                                <td>

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
                                    Unmanned Aerial Vehicles

                                </td>
                                <td>

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td >
                                </td>
                                <td >
                                    Body Area Network

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
                                </td>
                                <td >
                                    Digital Fabrication/Mems

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
                                </td>
                                <td >
                                    Bio Inspired Designs

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
                                </td>
                                <td >
                                    Cyber Physical Systems

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
                                </td>
                                <td >
                                    Foundations Of Data Science

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
                                    Introduction to Linguistics

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
                                </td>
                                <td >
                                    Intellectual Property Rights

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr align= "center" >
                                    <th colSpan='3'>

                                        Humanities, Social Sciences and Managemnet Electives
                                        (Select any 1 Subject)


                                    </th>
                                    <th >

                                        Any 3 Credits

                                    </th>
                                </tr>
                            {/* </thead> */}
                            <tr>
                                <td >
                                    HUM1002
                                </td>
                                <td >
                                    Emotional Intelligence

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
                                </td>
                                <td >
                                    Anthropology For Engineers

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            <tr>
                                <td  >
                                    MGT1001

                                </td>
                                <td >
                                    Principles of Management and Organizational Behavior

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
                                </td>
                                <td >
                                    International Business

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

                                    MGT2003

                                </td>
                                <td >
                                    Technology Entrepreneurship

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

                                    MGT2004

                                </td>
                                <td >
                                    Supply Chain Management

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
                                </td>
                                <td >
                                    Disaster Recovery and Business Continuity Management

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
                                </td>
                                <td >
                                    Judgement and Decision Making

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
                                </td>
                                <td >
                                    Operational Management

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
                                </td>
                                <td >
                                    Engineering Economics and Financial Accounting

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

                                    BMT1013

                                </td>
                                <td >
                                    Human Resource Management

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
                                </td>
                                <td >
                                    Information Systems

                                </td>
                                <td >

                                    LT

                                </td>
                                <td >

                                    3

                                </td>
                            </tr>
                            {/* <thead> */}
                                <tr align= "center" >
                                    <th colSpan='3'>

                                        Free Electives

                                    </th>
                                    <th  >

                                        Any 6 Credits

                                    </th>
                                </tr>
                            {/* </thead> */}
                            <tr>
                                <td >

                                    -

                                </td>
                                <td  >
                                    Elective / Specialization Courses from other Schools

                                </td>
                                <td  >

                                    LT

                                </td>
                                <td rowSpan='2' >

                                    6

                                </td>
                            </tr>
                            <tr>
                                <td  >

                                    -

                                </td>
                                <td  >
                                    MOOC / Certification Courses

                                </td>
                                <td >

                                    LT

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
export default Unelec
