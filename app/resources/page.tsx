import InfoBlock from "@/components/Resources/Info Block/infoBlock"
import LandingImage from "@/components/Resources/Landing Image /page"
import DefaultLayout from "../../layouts/defaultLayout.js"


export default function Resources() {
    return(
        <div p-10>
            <DefaultLayout>
                <LandingImage />
                <InfoBlock />
            </DefaultLayout>
        </div>
    )
}
