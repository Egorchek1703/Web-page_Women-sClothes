import './mobile-app.css'
import DownloadAppImg1 from '../../images/mobile-app/app-store.svg'
import DownloadAppImg2 from '../../images/mobile-app/google-play.svg'
import AppImg from '../../images/mobile-app/phone.svg'

function MobileAppBlock() {
    return (
        <section className="mobile-app">
            <div className="container">
                <div className="app-info">
                    <h3>DOWNLOAD APP & GET THE VOUCHER!</h3>
                    <p>
                        Get 30% off for first transaction using Rondovision mobile app for now.
                    </p>

                    <div className="app-download-links">
                        <a href="/"><img src={DownloadAppImg1} alt="App store" /></a>
                        <a href="/"><img src={DownloadAppImg2} alt="Google play" /></a>
                    </div>
                </div>
                <div className="app-image">
                    <img src={AppImg} alt="Example the app" />
                </div>
            </div>
        </section>
    )
}

export default MobileAppBlock;