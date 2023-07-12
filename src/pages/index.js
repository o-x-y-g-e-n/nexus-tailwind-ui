import * as React from "react"
import CodeComponentLayout from "../utils/CodeComponentLayout"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import Card1 from "../components/cards/Card1"
import Card2 from "../components/cards/Card2"
import Card3 from "../components/cards/Card3"
import Card4 from "../components/cards/Card4"
import Card5 from "../components/cards/Card5"
import Card6 from "../components/cards/Card6"
import Card7 from "../components/cards/Card7"
import Card8 from "../components/cards/Card8"
import Card9 from "../components/cards/Card9"
import Card10 from "../components/cards/Card10"
import Card11 from "../components/cards/Card11"
import Card12 from "../components/cards/Card12"
import Card13 from "../components/cards/Card13"
import Card14 from "../components/cards/Card14"
import Card15 from "../components/cards/Card15"
import Card16 from "../components/cards/Card16"
import Card17 from "../components/cards/Card17"
export default function IndexPage() {
  return (
    <Layout
      title={"Unleash the Power of TailwindCSS with pre-built Components"}
      description={
        "Create Stunning Websites with Ease. Discover a Comprehensive Collection of Reusable Components, Open Source and Free! Boost Your Productivity and Design Beautiful Interfaces in No Time."
      }
    >
      <section className="ml-16 flex-col space-y-16 items-center mb-8">
        <CodeComponentLayout childComponent={<Card1 />} title="Article Card" />
        <CodeComponentLayout childComponent={<Card2 />} title="Article Card" />
        <CodeComponentLayout childComponent={<Card3 />} title="Progress Card" />
        <CodeComponentLayout childComponent={<Card4 />} title="Hotel Card" />
        <CodeComponentLayout childComponent={<Card5 />} title="Profile Card" />
        <CodeComponentLayout childComponent={<Card6 />} title="Notifications Card" />
        <CodeComponentLayout childComponent={<Card7 />} title="Friend Request Card" />
        <CodeComponentLayout childComponent={<Card8 />} title="Messaging/Chat UI" />
        <CodeComponentLayout childComponent={<Card9 />} title="Meeting Invite UI" />
        <CodeComponentLayout childComponent={<Card10 />} title="Meeting Setup UI" />
        <CodeComponentLayout childComponent={<Card11 />} title="Meeting Details UI" />
        <CodeComponentLayout childComponent={<Card12 />} title="Event Managment Business Card" />
        <CodeComponentLayout childComponent={<Card13 />} title="Payment Details Card" />
        <CodeComponentLayout childComponent={<Card14 />} title="Jira Story Card" />
        <CodeComponentLayout childComponent={<Card15 />} title="Google Review Card" />
        <CodeComponentLayout childComponent={<Card16 />} title="Google Review Card" />
        <CodeComponentLayout childComponent={<Card17 />} title="Amazon Product Card" />
      </section>
    </Layout>
  )
}
