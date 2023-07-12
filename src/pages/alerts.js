import * as React from "react"
import CodeComponentLayout from "../utils/CodeComponentLayout"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import Notifications from '../components/alerts/Notifications'
export default function AlertsPage() {
  return (
    <Layout
      title={"Tailwind CSS Alerts UI Components"}
      description={
        "Experience seamless and eye-catching alerts on your website with our tailor-made Tailwind CSS Alert Components. Crafted to perfection, these components provide a versatile and user-friendly solution for displaying important messages and notifications. With customizable styles and intuitive design, you can effortlessly create visually stunning and responsive alerts that captivate your audience."
      }
    >
      <section className="ml-16 flex-col space-y-16 items-center mb-8">
        <CodeComponentLayout childComponent={<Notifications />} title="Warning Alerts" />
      </section>
    </Layout>
  )
}
