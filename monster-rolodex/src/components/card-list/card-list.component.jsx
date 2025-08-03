import Card from "../card/card.component";
import './card-list.styles.css'



const CardList = ({monsters}) => {

    return(
        <div className="card-list">
            {
                monsters.map(({name, email, id}, idx) => {
                return <Card key={`${name, email}-${idx}`} 
                name={name} 
                email={email}
                id={id}></Card>;
                })
            }
        </div>
    )
}

export default CardList;