import React from "react"
import * as styles from './empty.module.scss'
import Layout from "@components/layout"

export default function Empty() {
  return <Layout><div className={`font-bold ${styles.empty}`}>SASS + Tailwind</div></Layout>
}