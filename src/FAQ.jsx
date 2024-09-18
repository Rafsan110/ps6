import Accordion from "./Accordion.jsx"

function Faq(){
    return(
        <section className="accordion">
        <div className="questions">
            <Accordion title='Will Sony make a PS6' answer="Sony admitted that the PS5 has entered the “latter half of its lifecycle” earlier this year, suggesting the PS6 release date could take place sometime in 2027. "/>
            <Accordion title='When will PS6 launch?' answer="As for when the PlayStation 6 could launch, this could be around 2026 based on Sony's latest comments and its calculations for the mid-generation refresh, however its more likely to be released in 2028"/>
            <Accordion title='How much will it cost?' answer="Even the minmum price of a ps6 could be a staggering amount of  £699.99/$699.99 "/>
            <Accordion title='Will PS6 have backward compatibilty' answer= "Backwards compatibility is reportedly a priority for Sony, so the PS6's chipset may utilize the x86 architecture for full compatibility with PS4 and PS5. The PS6 is rumored to launch in 2027-2028, but the PS5 Pro's $700 price point has some fans concerned over the PS6's cost."/>


        </div>
        </section>

    )
}
export default Faq