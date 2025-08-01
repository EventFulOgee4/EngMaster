export default function DetailsList(props){
    return(
        <>
            <ul className="details-list" aria-live="polite">
                {props.detailsList}
            </ul>
            { props.details.length > 4 &&
                <section className="get-project">
                    <div>
                        <h2>Your project is ready!</h2>
                        <p>To see the project offered just press the following button button &#128073;</p>
                    </div>
                    <button onClick={props.getProject}>Get Project</button>
                </section>
            }
            
        </>
        
    )
}