import { useParams } from "react-router-dom"
import { getNote } from "../utils/local-data";

function DetailNote() {
   const { id } = useParams();
   const { title, body, createdAt } = getNote(id);

   return (
      <section className="detail-note">
         <h1>{title}</h1>
         <hr />
         <p>{body}</p>
      </section>
   )
}

export default DetailNote