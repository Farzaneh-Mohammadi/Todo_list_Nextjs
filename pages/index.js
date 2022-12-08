import Head from 'next/head'
import Image from 'next/image'
import Todos from "../components/Todos";
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
     <Todos />
    </div>
  )
}
