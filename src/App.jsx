import React from "react"
import DetailsList from "./DetailsList"
import ProjectSetup from "./ProjectSetup"
import { getProjectFromEngMaster } from "./ai"

export default function App(){
  const dots = React.useRef(null)
  const [details, setDetails] = React.useState([])
  const [project, setProject] = React.useState("")
  const detailsList = details.map((detail) => {
    return <li key={detail}>{detail}</li>
  })

  React.useEffect(() => {
    const dotLine = ".".repeat(200) + "\n"
    dots.current.textContent = dotLine.repeat(100)
  }, [])



  function addDetail(formData){
    const newDetail = formData.get("details") 
    setDetails((prevDetails) => [...prevDetails, newDetail])
  }

  async function getProject(){
    const projectMarkdown = await getProjectFromEngMaster(details)
    setProject(projectMarkdown)
  }

  return(
    <>
      <div className="background" ref={dots}></div>
      <header className="main-header">
        <img src="images/gear-icon.svg" alt="gear-icon" />
        <h1>Eng-Master</h1>
      </header>
      <section className="quick-description">
          <h2>
            Learn what you can build with what you have!
          </h2>
      </section>
      <main>
        <form className="input-field" action={addDetail}>
            <input type="text" name="details" placeholder="Start Typing" />
            <button className="add-details-button">Add detail</button>
        </form>
        <DetailsList 
        detailsList = {detailsList}
        details = {details}
        getProject = {getProject}
        />
        {project && <ProjectSetup project = {project} />}
      </main>
    </>
  )
}