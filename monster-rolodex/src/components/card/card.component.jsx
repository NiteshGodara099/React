import './card.styles.css'

const Card = ({name, email, id}) => {
  return <div className="card-container">
    <img src={`https://robohash.org/${id}?set=set2`} />
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
}

export default Card;