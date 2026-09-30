"use client";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";
import LanguageSelector from "@/src/components/LanguageSelector";

import { colors } from "@/src/styles/theme";

interface VerificationFailedScreenProps {
    onTryAgain: () => void;
    onResend: () => void;
}

export default function VerificationFailedScreen({
                                                     onTryAgain,
                                                     onResend,
                                                 }: VerificationFailedScreenProps) {

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                background: colors.cream,
            }}
        >

            {/* =========================================
                LEFT SIDE
            ========================================= */}

            <CIABOCBrandPanel
                title="Verification failed"
                description="Let's verify your identity and get you back into your CIABOC account."
            />


            {/* =========================================
                RIGHT SIDE
            ========================================= */}

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


                    {/* =================================
                        ERROR ICON
                    ================================= */}

                    <div
                        style={{
                            width: "58px",
                            height: "58px",

                            margin: "10px auto 18px",

                            borderRadius: "50%",

                            background:
                            colors.errorBackground,

                            color:
                            colors.error,

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            fontSize: "28px",

                            fontWeight: 700,
                        }}
                    >
                        !
                    </div>


                    {/* =================================
                        TITLE
                    ================================= */}

                    <h2
                        style={{
                            margin: "0 0 8px",

                            color:
                            colors.text,

                            fontSize: "23px",

                            fontWeight: 700,

                            textAlign: "center",
                        }}
                    >
                        Incorrect verification code
                    </h2>


                    {/* =================================
                        DESCRIPTION
                    ================================= */}

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
                        The verification code you entered
                        is incorrect. Please check the code
                        and try again.
                    </p>


                    {/* =================================
                        OTP BOXES
                    ================================= */}

                    <div
                        style={{
                            display: "flex",

                            justifyContent:
                                "center",

                            gap: "10px",

                            marginBottom: "24px",
                        }}
                    >

                        {[
                            "1",
                            "2",
                            "3",
                            "4",
                            "5",
                            "6",
                        ].map((digit, index) => (

                            <input
                                key={index}

                                type="text"

                                value={digit}

                                readOnly

                                style={{
                                    width: "48px",
                                    height: "54px",

                                    border:
                                        `1px solid ${colors.error}`,

                                    borderRadius: "9px",

                                    background:
                                    colors.errorBackground,

                                    color:
                                    colors.error,

                                    textAlign: "center",

                                    fontSize: "20px",

                                    fontWeight: 700,

                                    outline: "none",
                                }}
                            />

                        ))}

                    </div>


                    {/* =================================
                        TRY AGAIN
                    ================================= */}

                    <button
                        type="button"
                        onClick={onTryAgain}
                        style={{
                            width: "100%",

                            height: "52px",

                            border: "none",

                            borderRadius: "9px",

                            background:
                            colors.navy,

                            color:
                            colors.white,

                            fontSize: "15px",

                            fontWeight: 700,

                            cursor: "pointer",
                        }}
                    >
                        Try Again
                    </button>


                    {/* =================================
                        RESEND
                    ================================= */}

                    <div
                        style={{
                            marginTop: "22px",

                            textAlign: "center",

                            color:
                            colors.secondaryText,

                            fontSize: "14px",
                        }}
                    >
                        Didn't receive a code?{" "}

                        <button
                            type="button"
                            onClick={onResend}
                            style={{
                                border: "none",

                                background:
                                    "transparent",

                                color:
                                colors.navy,

                                fontSize: "14px",

                                fontWeight: 700,

                                cursor: "pointer",

                                padding: 0,
                            }}
                        >
                            Resend
                        </button>
                    </div>

                </AuthCard>

            </section>

        </main>
    );
}