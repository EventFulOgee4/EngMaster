import ReactMarkdown from "react-markdown"

export default function ProjectSetup(props){
    return(
            <section ref={props.proj} className="project-setup-container" aria-live="polite">
                <h2>Eng-Master Recommends: </h2>
                <ReactMarkdown>{props.project}</ReactMarkdown>
            </section>
    )
}