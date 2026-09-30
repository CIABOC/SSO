"use client";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";
import LanguageSelector from "@/src/components/LanguageSelector";

import { colors } from "@/src/styles/theme";

interface ForgotPasswordScreenProps {
    onBackToLogin: () => void;
    onSendCode: () => void;
}

export default function ForgotPasswordScreen({
                                                 onBackToLogin,
                                                 onSendCode,
                                             }: ForgotPasswordScreenProps) {

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
                title="Forgot your password?"
                description="Let's help you securely recover your CIABOC Account."
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

                    padding: "40px 7%",
                }}
            >

                <AuthCard>

                    <LanguageSelector />


                    {/* ICON */}

                    <div
                        style={{
                            width: "58px",
                            height: "58px",

                            margin: "10px auto 20px",

                            borderRadius: "50%",

                            background:
                            colors.inputBackground,

                            color:
                            colors.navy,

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            fontSize: "25px",

                            fontWeight: 700,
                        }}
                    >
                        🔑
                    </div>


                    {/* TITLE */}

                    <h2
                        style={{
                            margin: "0 0 8px",

                            color:
                            colors.text,

                            fontSize: "24px",

                            fontWeight: 700,

                            textAlign: "center",
                        }}
                    >
                        Forgot Password?
                    </h2>


                    {/* DESCRIPTION */}

                    <p
                        style={{
                            margin:
                                "0 auto 25px",

                            maxWidth: "420px",

                            color:
                            colors.secondaryText,

                            fontSize: "14px",

                            lineHeight: 1.5,

                            textAlign: "center",
                        }}
                    >
                        Enter the email address associated
                        with your CIABOC Account and we'll
                        send you a verification code.
                    </p>


                    {/* EMAIL */}

                    <div
                        style={{
                            marginBottom: "20px",
                        }}
                    >

                        <label
                            style={{
                                display: "block",

                                marginBottom: "8px",

                                color:
                                colors.navy,

                                fontSize: "14px",

                                fontWeight: 700,
                            }}
                        >
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            style={{
                                width: "100%",

                                height: "54px",

                                padding:
                                    "0 16px",

                                border:
                                    "1px solid #D8D8D8",

                                borderRadius: "9px",

                                background:
                                colors.inputBackground,

                                color:
                                colors.navy,

                                fontSize: "15px",

                                outline: "none",
                            }}
                        />

                    </div>


                    {/* SEND CODE */}

                    <button
                        type="button"
                        onClick={onSendCode}
                        style={{
                            width: "100%",

                            height: "52px",

                            border: "none",

                            borderRadius: "9px",

                            background:
                            colors.gold,

                            color:
                            colors.navy,

                            fontSize: "15px",

                            fontWeight: 700,

                            cursor: "pointer",
                        }}
                    >
                        Send Verification Code
                    </button>


                    {/* BACK TO LOGIN */}

                    <div
                        style={{
                            marginTop: "24px",

                            textAlign: "center",
                        }}
                    >

                        <button
                            type="button"
                            onClick={onBackToLogin}
                            style={{
                                border: "none",

                                background:
                                    "transparent",

                                color:
                                colors.navy,

                                fontSize: "14px",

                                fontWeight: 600,

                                cursor: "pointer",

                                textDecoration:
                                    "none",
                            }}
                        >
                            ← Back to Sign In
                        </button>

                    </div>

                </AuthCard>

            </section>

        </main>
    );
}