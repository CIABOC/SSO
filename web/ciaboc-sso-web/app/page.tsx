"use client";

import { useState } from "react";

import LoginScreen from "@/src/screens/LoginScreen";
import LoginFailedScreen from "@/src/screens/LoginFailedScreen";
import SignUpScreen from "@/src/screens/SignUpScreen";
import OTPVerificationScreen from "@/src/screens/OTPVerificationScreen";
import VerificationFailedScreen from "@/src/screens/VerificationFailedScreen";
import ForgotPasswordScreen from "@/src/screens/ForgotPasswordScreen";
import SuccessScreen from "@/src/screens/SuccessScreen";

type Screen =
    | "login"
    | "loginFailed"
    | "signUp"
    | "otp"
    | "verificationFailed"
    | "forgotPassword"
    | "success";

export default function Home() {

    const [screen, setScreen] =
        useState<Screen>("login");


    /* =================================
       LOGIN FAILED
    ================================= */
    /* =================================
       SUCCESS
    ================================= */

    if (screen === "success") {

        return (
            <SuccessScreen

                onDashboard={() => {
                    console.log(
                        "Dashboard selected"
                    );
                }}

                onLogout={() =>
                    setScreen("login")
                }

            />
        );
    }

    if (screen === "loginFailed") {

        return (
            <LoginFailedScreen
                onTryAgain={() =>
                    setScreen("login")
                }
            />
        );
    }


    /* =================================
       SIGN UP
    ================================= */

    if (screen === "signUp") {

        return (
            <SignUpScreen

                onSignIn={() =>
                    setScreen("login")
                }

                onContinue={() =>
                    setScreen("otp")
                }

            />
        );
    }


    /* =================================
       OTP VERIFICATION
    ================================= */

    if (screen === "otp") {
        return (
            <OTPVerificationScreen
                onVerify={() =>
                    setScreen("success")
                }

                onBack={() =>
                    setScreen("signUp")
                }

            />
        );
    }


    /* =================================
       VERIFICATION FAILED
    ================================= */

    if (
        screen ===
        "verificationFailed"
    ) {

        return (
            <VerificationFailedScreen

                onTryAgain={() =>
                    setScreen("otp")
                }

                onResend={() =>
                    setScreen("otp")
                }

            />
        );
    }


    /* =================================
       FORGOT PASSWORD
    ================================= */

    if (
        screen ===
        "forgotPassword"
    ) {

        return (
            <ForgotPasswordScreen

                onBackToLogin={() =>
                    setScreen("login")
                }

                onSendCode={() =>
                    setScreen("otp")
                }

            />
        );
    }


    /* =================================
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
            onForgotPassword={() =>
                setScreen("forgotPassword")
            }

        />
    );
}
