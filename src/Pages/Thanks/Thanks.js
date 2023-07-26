import { Link } from 'react-router-dom';

const Thanks = ({ t }) => {
    return (
        <section id="thanks">
            <h3>{t("thanks.title")}</h3>
            <h5>{t("thanks.info")}</h5>
            <div className="img-see-you"></div>
            <Link 
                to='/'
                style={{ margin: '30px 10px 10px 10px', padding: "0px 10px 30px 10px" }}
            >
                {t("thanks.back")}
            </Link>
        </section>
    )
}

export default Thanks;