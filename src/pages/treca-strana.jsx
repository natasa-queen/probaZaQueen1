import * as React from "react"
import { Seo } from '../components/Seo'
import Layout from '../components/Layout'
import '../assets/css/treca-strana.scss'

import Pahulje from '../components/Pahulje'





export default function TrecaStrana() {



    return (
        <Layout>

            <div className='treca-kontejner'>

              {/*<Pahulje />*/}

                <h1>Treca strana!</h1>

                <div className="treca-strana">


                    <div className="tekst">
                        <h2>Ovo je kao ostatak teksta.</h2>
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

