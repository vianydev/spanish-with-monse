const NotFound = () => {
    return (
        <section id="error">
            <h2 style={{
                textAlign: 'center',
                margin: '30px 0 0 0',
                color: 'var(--error)'}}>Opps page not found</h2>
            <div className="img-error"></div>
        </section>
    )
}

export default NotFound;