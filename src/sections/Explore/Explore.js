


import './Explore.css'
import ExploreDesginData , {ExploreMarketingData , ExploreFinanceData,ExploreMusicData , ExploreEducationData} from '../../Data/Explore/data'



import CardItem , {Card}   from '../../components/CardItem/CardItem'


const generateCards = (data) => (
    data.map(card => (
      <Card
        key={card.id} 
        img={card.img}
        title={card.title}
        description={card.description}
        number={card.number}
      />
    ))
  );
  
  const Desgincards = generateCards(ExploreDesginData);
  const Marketincards = generateCards(ExploreMarketingData);
  const Financeards = generateCards(ExploreFinanceData);
  const Musicards = generateCards(ExploreMusicData);
  const Educationcards = generateCards(ExploreEducationData);

export const Explore = () => {
  return (
    
    <section className="explore-section section-padding" id="section_2">
    <div className="container">
        <div className="row">

            <div className="col-12 text-center">
                <h2 className="mb-4">Browse Topics </h2>
            </div>

        </div>
    </div>

    <div className="container-fluid">
        <div className="row">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="design-tab" data-bs-toggle="tab" data-bs-target="#design-tab-pane" type="button" role="tab" aria-controls="design-tab-pane" aria-selected="true">Design</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="marketing-tab" data-bs-toggle="tab" data-bs-target="#marketing-tab-pane" type="button" role="tab" aria-controls="marketing-tab-pane" aria-selected="false">Marketing</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="finance-tab" data-bs-toggle="tab" data-bs-target="#finance-tab-pane" type="button" role="tab" aria-controls="finance-tab-pane" aria-selected="false">Finance</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="music-tab" data-bs-toggle="tab" data-bs-target="#music-tab-pane" type="button" role="tab" aria-controls="music-tab-pane" aria-selected="false">Music</button>
                </li>

                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="education-tab" data-bs-toggle="tab" data-bs-target="#education-tab-pane" type="button" role="tab" aria-controls="education-tab-pane" aria-selected="false">Education</button>
                </li>
            </ul>
        </div>
    </div>

    <div className="container">
        <div className="row">

            <div className="col-12">
                <div className="tab-content" id="myTabContent">
                    <CardItem  card_id ="design-tab-pane" aria_labelledby="design-tab" className="tab-pane fade show active"  >
                    {Desgincards}
                    </CardItem>


                    <CardItem  card_id ="marketing-tab-pane" aria_labelledby="marketing-tab" className="tab-pane fade "  >
                    {Marketincards}
                    </CardItem>

                    <CardItem  card_id ="finance-tab-pane" aria_labelledby="finance-tab" className="tab-pane fade "  >
                    {Financeards}
                    </CardItem>


                    <CardItem  card_id ="music-tab-pane" aria_labelledby="music-tab" className="tab-pane fade  "  >
                    {Musicards}
                    </CardItem>


                    <CardItem  card_id ="education-tab-pane" aria_labelledby="education-tab" className="tab-pane fade"  >
                    {Educationcards}
                    </CardItem>

                </div>

        </div>
    </div>
    </div>
</section>



    )
}


export default Explore