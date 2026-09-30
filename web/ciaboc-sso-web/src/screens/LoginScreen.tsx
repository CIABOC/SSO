"use client";

import { useState } from "react";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";
import LanguageSelector from "@/src/components/LanguageSelector";

import { colors } from "@/src/styles/theme";

interface LoginScreenProps {
    onLoginFailed: () => void;
    onSignUp: () => void;
}

export default function LoginScreen({
                                        onLoginFailed,
                                        onSignUp,
                                    }: LoginScreenProps) {

    const [showPassword, setShowPassword] =
        useState(false);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                background: colors.cream,
            }}
        >

            {/* LEFT SIDE */}

            <CIABOCBrandPanel
                title="CIABOC Account"
                description="Welcome to your secure declarant & official portal."
            />


            {/* RIGHT SIDE */}

            <section
                style={{
                    width: "50%",
                    minHeight: "100vh",

                    background: colors.cream,

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    padding: "36px 7%",
                }}
            >

                <AuthCard>

                    <LanguageSelector />


                    {/* USERNAME */}

                    <div style={formGroup}>

                        <label style={label}>
                            Username or Email
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your username or email"
                            style={input}
                        />

                    </div>


                    {/* PASSWORD */}

                    <div style={formGroup}>

                        <label style={label}>
                            Password
                        </label>

                        <div
                            style={{
                                position: "relative",
                            }}
                        >

                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Enter your password"
                                style={{
                                    ...input,
                                    paddingRight: "55px",
                                }}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    top: 0,

                                    width: "54px",
                                    height: "54px",

                                    border: "none",
                                    borderLeft:
                                        `1px solid ${colors.border}`,

                                    background:
                                    colors.white,

                                    cursor: "pointer",

                                    borderRadius:
                                        "0 9px 9px 0",
                                }}
                            >
                                👁
                            </button>

                        </div>

                    </div>


                    {/* FORGOT PASSWORD */}

                    <div
                        style={{
                            textAlign: "right",
                            marginTop: "-2px",
                            marginBottom: "22px",
                        }}
                    >
                        <button
                            type="button"
                            style={linkButton}
                        >
                            Forgot password?
                        </button>
                    </div>


                    {/* SIGN IN */}

                    <button
                        type="button"
                        onClick={onLoginFailed}
                        style={primaryButton}
                    >
                        Sign In
                    </button>


                    {/* DIVIDER */}

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            margin: "27px 0",
                            color: "#8A8A8A",
                            fontSize: "13px",
                        }}
                    >

                        <div style={divider} />

                        <span>OR</span>

                        <div style={divider} />

                    </div>


                    {/* GOOGLE */}

                    <button
                        type="button"
                        style={socialButton}
                    >
                        <span
                            style={{
                                fontWeight: 700,
                            }}
                        >
                            G
                        </span>

                        Continue with Google
                    </button>


                    {/* SIGN UP */}

                    <div
                        style={{
                            marginTop: "24px",
                            textAlign: "center",
                            color: "#666",
                            fontSize: "14px",
                        }}
                    >
                        Don't have an account?{" "}

                        <button
                            type="button"
                            onClick={onSignUp}
                            style={{
                                ...linkButton,
                                fontWeight: 700,
                            }}
                        >
                            Sign Up
                        </button>
                    </div>

                </AuthCard>

            </section>

        </main>
    );
}


const formGroup = {
    marginBottom: "20px",
};

const label = {
    display: "block",
    marginBottom: "8px",
    color: colors.navy,
    fontSize: "14px",
    fontWeight: 700,
};

const input = {
    width: "100%",
    height: "54px",
    padding: "0 16px",

    border:
        `1px solid #D8D8D8`,

    borderRadius: "9px",

    background:
    colors.inputBackground,

    color:
    colors.navy,

    fontSize: "15px",

    outline: "none",
};

const linkButton = {
    border: "none",
    background: "transparent",
    color: colors.navy,
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
    padding: 0,
};

const primaryButton = {
    width: "100%",
    height: "54px",

    border: "none",
    borderRadius: "9px",

    background: colors.gold,
    color: colors.navy,

    fontSize: "16px",
    fontWeight: 700,

    cursor: "pointer",
};

const divider = {
    flex: 1,
    height: "1px",
    background: "#DDD8CE",
};

const socialButton = {
    width: "100%",
    minHeight: "50px",

    border:
        `1px solid #D8D8D8`,

    borderRadius: "9px",

    background: colors.white,
    color: colors.navy,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    gap: "10px",

    fontSize: "14px",
    fontWeight: 600,

    cursor: "pointer",
};