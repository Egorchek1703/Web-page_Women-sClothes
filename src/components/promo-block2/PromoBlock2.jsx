import PayDayGirlImg from '../../images/girls/payday-girl.png'
import './promo-block2.css'

function PromoBlock2 () {
    return (
        <section className='promo-block2'>
            <div className="container">
                <img src={PayDayGirlImg} alt="promo" />
                <div className="description">
                    <h2>
                        <span className='highlight'>
                            <span>PAYDAY</span>
                        </span>
                        <br />
                        SALE NOW
                    </h2>
                    <p className='description-sale'>Spend minimal $100 get 30% off voucher code for your next purchase</p>
                    <p className='description-date'>1 June - 10 June 2021</p>
                    <p className='description-conditions'>*Terms & Conditions apply</p>
                    <button type='button'>Shop now</button> 
                </div>
            </div>
        </section>
    )
}

export default PromoBlock2;