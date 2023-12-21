




// The father 
const CardItem = (props) =>{
    return (
                <div className={props.className} id={props.card_id} role="tabpanel" aria-labelledby={props.aria_labelledby} tabIndex="0">
                        <div className="row">
                        {props.children}
                        </div>
                    </div>

    )
}




// child
 const Card = (props) => {
  return (
    
    <div className="col-lg-4 col-md-6 col-12 mb-4 mb-lg-0">
                                <div className="custom-block bg-white shadow-lg">
                                    <a href="topics-detail.html">
                                        <div className="d-flex">
                                            <div>
                                                <h5 className="mb-2">{props.title}</h5>

                                                <p className="mb-0">{props.description}</p>
                                            </div>

                                            <span className="badge bg-design rounded-pill ms-auto">{props.number}</span>
                                        </div>

                                        <img src={props.img} className="custom-block-image img-fluid" alt="" />
                                    </a>
                                </div>
                            </div>


    )
}
export default CardItem

export {Card}  