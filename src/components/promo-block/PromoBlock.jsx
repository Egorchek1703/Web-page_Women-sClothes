import promoImg from '../../images/header/promo-img.svg'
import fatLineImg from '../../images/header/fat-line.svg'
import './promo-block.css'


function Promo_block () {
    return(
        <section className="promo-block">
            <div className="container">
                <div className="promo-info">
                    <h2>LET'S EXPLORE 
                        <span className='highlight'> <span>UNIQUE</span> </span> CLOTHES.
                        </h2>
                    <p>Live for Influential and Innovative fashion!</p>
                    <div className="line-and-btn">
                        <img src={fatLineImg} alt="line" />
                        <button type='button'>Shop Now</button>
                    </div>
                </div>

                <div className="promo-img">
                    <img src={promoImg} alt="Unique clothes" />
                </div>
            </div>
        </section>
    )
}

export default Promo_block