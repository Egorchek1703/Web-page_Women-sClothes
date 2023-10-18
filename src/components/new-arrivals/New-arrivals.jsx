import Card from '../cards/Card'
import './new-arrivals.css'
import Girl1Img from '../../images/girls/girl1.svg'
import Girl2Img from '../../images/girls/girl2.svg'
import Girl3Img from '../../images/girls/girl3.svg'

function NewArrivals () {
    return (
        <section className='new-arrivals'>
            <div className="container">
                <h3>New arrivals</h3>
                <ul>
                    <Card descriptionName={'Hoodies & Sweetshirt'} imgPath={Girl1Img} imgAlt={'girl'}/>
                    <Card descriptionName={'Coats & Parkas'} imgPath={Girl2Img} imgAlt={'girl'}/>
                    <Card descriptionName={'Tees & T-Shirt'} imgPath={Girl3Img} imgAlt={'girl'}/>
                </ul>
            </div>
        </section>
    )
}

export default NewArrivals;