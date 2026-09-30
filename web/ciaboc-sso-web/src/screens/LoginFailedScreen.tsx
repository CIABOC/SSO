"use client";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";
import LanguageSelector from "@/src/components/LanguageSelector";

import { colors } from "@/src/styles/theme";

interface LoginFailedScreenProps {
    onTryAgain: () => void;
}

export default function LoginFailedScreen({
                                              onTryAgain,
                                          }: LoginFailedScreenProps) {
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
                title="Sign in trouble?"
                description="Let's get you back into your CIABOC account."
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


                    {/* ERROR ICON */}

                    <div
                        style={{
                            width: "58px",
                            height: "58px",

                            margin: "10px auto 18px",

                            borderRadius: "50%",

                            background: colors.errorBackground,

                            color: colors.error,

                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            fontSize: "28px",
                            fontWeight: 500,
                        }}
                    >
                        !
                    </div>


                    {/* TITLE */}

                    <h2
                        style={{
                            margin: "0 0 8px",

                            color: colors.text,

                            fontSize: "22px",
                            lineHeight: 1.3,

                            fontWeight: 700,

                            textAlign: "center",
                        }}
                    >
                        Unable to sign in
                    </h2>


                    {/* DESCRIPTION */}

                    <p
                        style={{
                            margin: "0 auto 18px",

                            maxWidth: "420px",

                            color: colors.secondaryText,

                            fontSize: "14px",
                            lineHeight: 1.5,

                            textAlign: "center",
                        }}
                    >
                        Your username or password may be incorrect.
                        <br />
                        Please check your details and try again.
                    </p>


                    {/* WARNING */}

                    <div
                        style={{
                            width: "100%",

                            minHeight: "48px",

                            marginBottom: "20px",

                            padding: "10px 15px",

                            borderRadius: "8px",

                            background: colors.errorBackground,

                            color: colors.error,

                            display: "flex",

                            alignItems: "center",
                            justifyContent: "center",

                            gap: "7px",

                            fontSize: "13px",
                            lineHeight: 1.25,

                            textAlign: "center",
                        }}
                    >
                        <span>
                            ⚠
                        </span>

                        <span>
                            2 attempts remaining before your
                            account is temporarily locked.
                        </span>
                    </div>


                    {/* TRY AGAIN */}

                    <button
                        type="button"
                        onClick={onTryAgain}
                        style={{
                            width: "100%",
                            height: "48px",

                            border: "none",
                            borderRadius: "8px",

                            background: colors.navy,
                            color: colors.white,

                            fontSize: "15px",
                            fontWeight: 700,

                            cursor: "pointer",
                        }}
                    >
                        Try Again
                    </button>


                    {/* FORGOT PASSWORD */}

                    <div
                        style={{
                            marginTop: "20px",

                            textAlign: "center",
                        }}
                    >
                        <button
                            type="button"
                            style={{
                                border: "none",
                                background: "transparent",

                                color: colors.text,

                                fontSize: "14px",
                                fontWeight: 600,

                                textDecoration: "underline",

                                cursor: "pointer",
                            }}
                        >
                            Forgot password?
                        </button>
                    </div>

                </AuthCard>

            </section>

        </main>
    );
}