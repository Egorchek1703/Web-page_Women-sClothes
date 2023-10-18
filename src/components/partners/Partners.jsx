import HandMImg from '../../images/partners/HM.png'
import ObeyImg from '../../images/partners/Obey.png'
import ShopifyImg from '../../images/partners/Shopify.png'
import LacosteImg from '../../images/partners/Lacoste.png'
import LevisImg from '../../images/partners/Levis.png'
import AmazonImg from '../../images/partners/Amazon.png'
import './partners.css'


function Partners () {
    return (
        <section className="partners">
            <div className="container">
                <ul className="partners-ul">
                    <li>
                        <a href="https://hmonline.ru/" target='_blank' rel='noreferrer'>
                            <img src={HandMImg} alt="H&M" />
                        </a>
                    </li>
                    <li>
                        <a href="https://obeyclothing.eu/" target='_blank' rel='noreferrer'>
                            <img src={ObeyImg} alt="OBEY" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.shopify.com/" target='_blank' rel='noreferrer'>
                            <img src={ShopifyImg} alt="Shopify" />
                        </a>
                    </li>
                    <li>
                        <a href="https://lacoste.ru/" target='_blank' rel='noreferrer'>
                            <img src={LacosteImg} alt="Lacoste" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.levi.com/US/en_US/" target='_blank' rel='noreferrer'>
                            <img src={LevisImg} alt="LEVI'S" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.amazon.com/ref=nav_logo" target='_blank' rel='noreferrer'>
                            <img src={AmazonImg} alt="Amazon" />
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Partners;