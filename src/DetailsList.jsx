export default function DetailsList(props){
    return(
        <section className="details-list">
             <ul className="details-list" aria-live="polite">
                {props.detailsList}
             </ul>
        </section>
    )
}