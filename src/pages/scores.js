import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import DropDown from "../components/dropdown"
import Scores from "../components/scores-home"

const items=[
{
  id:1,
  value: "Tuesday, Sep. 1",
  link:"/score2"
},
{
  id:2,
  value: "Wednesday, Sep. 2",
  link:"/score3"
},
{
  id:3,
  value: "Thursday, Sep. 3",
  link:"/score2"
},
{
  id:4,
  value: "Friday, Sep. 4",
  link:"/score3"
},
{
  id:5,
  value: "Sutarday, Sep. 5",
  link:"/score2"
},

];


const Results = () => (
  <Layout>
    <SEO title="Scores" />
    <DropDown  title="Select Date" items={items}/>
    <Scores></Scores>
    
  </Layout>
)

export default Results
