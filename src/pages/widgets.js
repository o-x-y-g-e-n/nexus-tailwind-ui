import * as React from "react"
import CodeComponentLayout from "../utils/CodeComponentLayout"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import UploadWidget from "../components/widgets/UploadWidget"
import VisitorCount from '../components/widgets/VisitorCount'
export default function IndexPage() {
  return (
    <Layout
      title={"Tailwind CSS Widgets"}
      description={
        "Elevate the interactivity and functionality of your website with our meticulously crafted Tailwind CSS Widgets. Designed to seamlessly integrate into any web project, our widgets empower you to enhance user experience while optimizing your website for search engines.        "
      }
    >
      <section className="ml-16 flex-col space-y-16 items-center mb-8">
        <CodeComponentLayout childComponent={<UploadWidget />} title="Upload Widget" />
        <CodeComponentLayout childComponent={<VisitorCount />} title="Visitor Count Widget" />
        
      </section>
    </Layout>
  )
}
