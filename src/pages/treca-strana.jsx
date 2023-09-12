import * as React from "react"
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import '../assets/css/treca-strana.scss'

import Pahulje from '../components/Pahulje'

import Accordion from '../components/Accordion'
import AccordionTest from '../components/AccordionTest'

import Accordion2 from "../components/AccordionTest2";








export default function TrecaStrana() {



    return (
        <Layout>

            <div className='treca-kontejner'>



                <h1>Treca strana!</h1>


                <div className="treca-strana">


                    <div className="tekst">
                        <h2>Ovo je kao ostatak teksta.</h2>
                    </div>

                  <div className="akordion">


                    <Accordion2 />

                  </div>



                </div>
            </div>
        </Layout>
    )
}

export const Head = () => {
    return (
        <>
            <Seo title="Treca strana" />
        </>
    )
}

