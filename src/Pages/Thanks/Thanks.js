const Thanks = ({ t }) => {
    return (
        <section id="thanks">
            <h1>{t("thanks.title")}</h1>
            <h3>{t("thanks.info")}</h3>
            <div className="img-see-you"></div>
        </section>
    )
}

export default Thanks;