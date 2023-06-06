import 'tailwindcss/tailwind.css'
import DefaultLayout from "@/layouts/defaultLayout.js"
import LandingImage from "../../components/Leaders/LandingImage/index.js"
import LeaderInfo from "../../components/Leaders/LeaderInfo/index.tsx"

export default function Leaders() {
  return (
    <>
      <DefaultLayout>
        <LandingImage />
        <LeaderInfo />
      </DefaultLayout>
    </>
  ) 

}