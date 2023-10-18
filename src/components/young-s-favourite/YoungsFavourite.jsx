import './youngs-favourite.css'
import Card from '../cards/Card'
import Girl4Img from '../../images/girls/girl4.svg'
import Girl5Img from '../../images/girls/girl5.svg'

function YoungsFavourite() {
    return (
        <section className="youngs-favourite">
            <div className="container">
                <h2>Young's favourite</h2>
                <ul>
                    <Card descriptionName={'Trending on instagram'} imgPath={Girl4Img} imgAlt={'Young\'s favourite'}/>
                    <Card descriptionName={'All Under $40'} imgPath={Girl5Img} imgAlt={'Young\'s favourite'}/>
                </ul>
            </div>
        </section>
    )
}

export default YoungsFavourite;