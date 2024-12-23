'use client'
import Authorization from "@/components/authorization/authorization";
import ForgotPassword from "@/components/forgotPassword/ForgotPassword";
import Registration from "@/components/registration/Registration";
import Welcome from "@/components/welcome/welcome";
import styles from "./page.module.css"
import { useState } from "react";
import { redirect } from "next/navigation";

const authUser = (name: string, pass: string) => {
  return new Promise((res, rej) => setTimeout(() => {
    if (name === "admin" && pass === "admin") {
      res("Auth")
      redirect("/catalog")
    }
    rej("error")
  }, 1000))
}

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentComponent, setCurrentComponent] = useState('authorization')

  const handleSubmit = () => {
    if (!email || !password) {
      alert('Пожалуйста, введите Email и Пароль');
      return;
    }
    authUser(email, password);
  };

  // switch кейсы рендеринга
  let renderedComponent;
  switch (currentComponent) {
    case "authorization":
      renderedComponent = (
        <Authorization
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
          setCurrentComponent={setCurrentComponent}
        />
      )
      break;

    case "forgotPassword":
      renderedComponent = (
        <ForgotPassword setCurrentComponent={setCurrentComponent} />
      )
      break;

    case "registration":
      renderedComponent = (
        <Registration setCurrentComponent={setCurrentComponent} />
      )
      break
  }


  return (
    <div className={styles.flexContainer}>
      {renderedComponent}
      <Welcome />
    </div>
  );
}
