"use client";

import { useState } from "react";

import LoginScreen from "@/src/screens/LoginScreen";
import LoginFailedScreen from "@/src/screens/LoginFailedScreen";
import SignUpScreen from "@/src/screens/SignUpScreen";

type Screen =
    | "login"
    | "loginFailed"
    | "signUp";

export default function Home() {

    const [screen, setScreen] =
        useState<Screen>("login");


    /* ================================
       LOGIN FAILED
    ================================= */

    if (screen === "loginFailed") {

        return (
            <LoginFailedScreen
                onTryAgain={() =>
                    setScreen("login")
                }
            />
        );
    }


    /* ================================
       SIGN UP
    ================================= */

    if (screen === "signUp") {

        return (
            <SignUpScreen
                onSignIn={() =>
                    setScreen("login")
                }

                onContinue={() => {
                    console.log(
                        "Continue to OTP verification"
                    );
                }}
            />
        );
    }


    /* ================================
       LOGIN
    ================================= */

    return (
        <LoginScreen
            onLoginFailed={() =>
                setScreen("loginFailed")
            }

            onSignUp={() =>
                setScreen("signUp")
            }
        />
    );
}