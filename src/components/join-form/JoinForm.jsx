import './join-form.css'

function JoinForm () {
    return (
        <section className="join-form">
            <div className="container">
                <h3>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h3>
                <p>Type your email down below and be young wild generation</p>
                <form action="/">
                    <input type="email" placeholder="Add your email here" required/>
                    <input type="tel" placeholder="And your phone number" required/>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </section>
    )
}

export default JoinForm;