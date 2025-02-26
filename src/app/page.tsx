'use client'
import Authorization from "@/components/authorization/authorization";
import ForgotPassword from "@/components/forgotPassword/ForgotPassword";
import Registration from "@/components/registration/Registration";
import Welcome from "@/components/welcome/welcome";
import styles from "./page.module.css"
import { useState } from "react";
import { redirect } from "next/navigation";
import { Toaster, toaster } from "@/components/Toaster/toaster"
import axios from "axios";
import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { IUser, setUserData } from '../redux/slices/userSlice';

const authUser = async (name: string, pass: string, dispatch: Dispatch<UnknownAction>
) => {
  let data: IUser = {}
  try {
    const response = await axios.post<IUser>('https://zoo.devsrv.ru/api/v1/user/login', { email: name, password: pass })
    data = response?.data
    localStorage.setItem('USER_TOKEN', response?.data?.token)
    dispatch(setUserData(response?.data))
  } catch {
    toaster.create({
      title: "Ошибка авторизации",
      description: "Неверный логин или пароль",
      type: "error",
      duration: 3000,
    })
  }

  if (data?.token) {
    redirect('/catalog')
  }

}

export default function Home() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentComponent, setCurrentComponent] = useState('authorization')
  const dispatch = useDispatch()

  const handleSubmit = () => {
    if (!email || !password) {
      alert('Пожалуйста, введите Email и Пароль');
      return;
    }
    void authUser(email, password, dispatch);
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
      <Welcome
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        currentComponent={currentComponent}
        setCurrentComponent={setCurrentComponent} />
      <Toaster />
    </div>
  );
}
