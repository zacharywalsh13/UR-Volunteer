import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import DefaultLayout from "../../layouts/defaultLayout.js"
import LandingImage from "../../components/Home/LandingImage/index.js"
import OurMission from "../../components/Home/OurMission/index.tsx"
import Events from '../../components/Home/Events/index.tsx'
import '../global.css'

export default function Home() {
  return (
    <>
      <DefaultLayout>

        <LandingImage /> 
        <OurMission />
        <Events />

      </DefaultLayout>
    </>
  )
}
