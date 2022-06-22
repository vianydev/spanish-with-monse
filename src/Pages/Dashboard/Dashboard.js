import { InlineWidget } from "react-calendly";

const Dashboard = ({ name }) => {
    // URL without cookies banner
    const hiddeCookies = "https://calendly.com/monserratrodriguez/clase-de-espanol?hide_gdpr_banner=1"
    // URL without cookies banner and info
    //const hiddeInfo = "https://calendly.com/monserratrodriguez/clase-de-espanol?hide_event_type_details=1&hide_gdpr_banner=1"

    return (
        <section id="dashboard">
           <h1>Hello {name}</h1>
           <div className="Cal">
                <InlineWidget url={hiddeCookies} styles={{height:"1050px"}} />
            </div>
        </section>
    )
}

export default Dashboard;