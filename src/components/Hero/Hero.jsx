"use client"

import { useState, useEffect } from "react"

import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export const Hero = () => {
  const [showFirstImage, setShowFirstImage] = useState(true)

  useEffect(() => {
    // Set up the interval to swap images every 2 seconds
    const intervalId = setInterval(() => {
      setShowFirstImage((prevState) => !prevState)
    }, 3000)

    // Clear the interval when component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ padding: "0 16px" }}>
          Hi, I'm Shubhradeep
        </h1>
        <p className={styles.description}>
          <h3
            style={{ margin: "10px 0", textShadow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(0, 0, 255, 0.6)" }}
          >
            Software Developer
          </h3>
          I Build Smart Solutions for Real Problems or Bringing Ideas to Life Through Code & Creativity
        </p>
        <a href="mailto:shubhradeepmaity3@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl(showFirstImage ? "hero/link-c.jpeg" : "hero/cafe.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  )
}
