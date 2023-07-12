import * as React from "react"
import CodeComponentLayout from "../utils/CodeComponentLayout"
import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import ModernTable from '../components/tables/ModernTable'
export default function TablesPage() {
  return (
    <Layout
      title={"Tailwind CSS Table UI Components"}
      description={
        "Revolutionize data presentation on your website with our meticulously crafted Tailwind CSS Web Tables. Designed to seamlessly integrate into any web project, our tables empower you to showcase complex data in a visually appealing and user-friendly manner while optimizing your website for search engines.        "
      }
    >
      <section className="ml-16 flex-col space-y-16 items-center mb-8">
        <CodeComponentLayout childComponent={<ModernTable />} title="Modern Responsive Table" />
      </section>
    </Layout>
  )
}
