import React from "react"
import DetailsList from "./DetailsList"

export default function App(){
  const dots = React.useRef(null)
  const [details, setDetails] = React.useState([])
  const detailsList = details.map((detail) => {
    return <li key={detail}>{detail}</li>
  })

  React.useEffect(() => {
    const dotLine = ".".repeat(200) + "\n"
    dots.current.textContent = dotLine.repeat(200)
  })

  return(
    <>
      <div className="background" ref={dots}></div>
      <header className="main-header">
        <img src="images/gear-icon.svg" alt="gear-icon" />
        <h1>Eng-Master</h1>
      </header>
      <section className="quick-description">
          <h2>
            Turn your ideas into reality <br /> by first of all knwoing everything you need
          </h2>
      </section>
      <main>
        <section className="input-field">
            <input type="text" name="input-for-details" placeholder="Start Typing" />
            <button className="add-details-button">Add detail</button>
        </section>
        <DetailsList detailsList = {detailsList}/>
      </main>
    </>
  )
}