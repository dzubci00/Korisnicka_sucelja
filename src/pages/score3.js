
import Layout from "../components/layout"
import SEO from "../components/seo"
import DropDown from "../components/dropdown"
import Rezultat2 from "../components/rezultat2"
/** @jsx jsx */
import { jsx } from "theme-ui"


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


const Teams = () => (
  <Layout>
    <SEO title="Scores" />
    <DropDown title="Select Date" items={items}/>
    <Rezultat2></Rezultat2>
  </Layout>
)

export default Teams