"use client";

import { useEffect, useState } from "react";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";
import LanguageSelector from "@/src/components/LanguageSelector";

import { colors } from "@/src/styles/theme";

interface OTPVerificationScreenProps {
    onVerify: () => void;
    onBack: () => void;
}

export default function OTPVerificationScreen({
                                                  onVerify,
                                                  onBack,
                                              }: OTPVerificationScreenProps) {

    const [otp, setOtp] = useState([
        "",
        "",
        "",
        "",
        "",
        "",
    ]);

    const [seconds, setSeconds] = useState(165);

    useEffect(() => {
        if (seconds <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setSeconds((previous) => previous - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds]);

    const minutes = Math.floor(seconds / 60);

    const remainingSeconds = seconds % 60;

    const formattedTime =
        `${minutes}:${remainingSeconds
            .toString()
            .padStart(2, "0")}`;

    const handleChange = (
        value: string,
        index: number
    ) => {

        const digit = value.replace(/\D/g, "");

        if (!digit) {
            return;
        }

        const newOtp = [...otp];

        newOtp[index] = digit.charAt(
            digit.length - 1
        );

        setOtp(newOtp);

        const nextInput =
            document.getElementById(
                `otp-${index + 1}`
            ) as HTMLInputElement | null;

        if (nextInput) {
            nextInput.focus();
        }
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        index: number
    ) => {

        if (
            event.key === "Backspace" &&
            !otp[index] &&
            index > 0
        ) {

            const previousInput =
                document.getElementById(
                    `otp-${index - 1}`
                ) as HTMLInputElement | null;

            previousInput?.focus();
        }
    };

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
                title="Verify Your Account"
                description="One more step to secure your CIABOC Account."
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


                    {/* STEP */}

                    <div
                        style={{
                            color: colors.gold,
                            fontSize: "13px",
                            fontWeight: 700,
                            marginBottom: "8px",
                        }}
                    >
                        STEP 2 OF 2
                    </div>


                    {/* TITLE */}

                    <h2
                        style={{
                            margin: "0 0 8px",

                            color: colors.text,

                            fontSize: "24px",
                            fontWeight: 700,
                        }}
                    >
                        Enter verification code
                    </h2>


                    {/* DESCRIPTION */}

                    <p
                        style={{
                            margin: "0 0 8px",

                            color: colors.secondaryText,

                            fontSize: "14px",
                            lineHeight: 1.5,
                        }}
                    >
                        We've sent a verification code to
                    </p>

                    <p
                        style={{
                            margin: "0 0 28px",

                            color: colors.navy,

                            fontSize: "14px",

                            fontWeight: 700,
                        }}
                    >
                        n****@gmail.com
                    </p>


                    {/* OTP BOXES */}

                    <div
                        style={{
                            display: "flex",

                            justifyContent: "center",

                            gap: "10px",

                            marginBottom: "20px",
                        }}
                    >

                        {otp.map((digit, index) => (

                            <input
                                key={index}

                                id={`otp-${index}`}

                                type="text"

                                inputMode="numeric"

                                maxLength={1}

                                value={digit}

                                onChange={(event) =>
                                    handleChange(
                                        event.target.value,
                                        index
                                    )
                                }

                                onKeyDown={(event) =>
                                    handleKeyDown(
                                        event,
                                        index
                                    )
                                }

                                style={{
                                    width: "48px",
                                    height: "54px",

                                    border:
                                        `1px solid ${colors.border}`,

                                    borderRadius: "9px",

                                    background:
                                    colors.inputBackground,

                                    color:
                                    colors.navy,

                                    textAlign: "center",

                                    fontSize: "20px",

                                    fontWeight: 700,

                                    outline: "none",
                                }}
                            />

                        ))}

                    </div>


                    {/* TIMER */}

                    <div
                        style={{
                            textAlign: "center",

                            color:
                            colors.secondaryText,

                            fontSize: "13px",

                            marginBottom: "24px",
                        }}
                    >
                        Code expires in{" "}

                        <strong
                            style={{
                                color: colors.navy,
                            }}
                        >
                            {formattedTime}
                        </strong>
                    </div>


                    {/* VERIFY */}

                    <button
                        type="button"
                        onClick={onVerify}
                        style={{
                            width: "100%",

                            height: "52px",

                            border: "none",

                            borderRadius: "9px",

                            background: colors.gold,

                            color: colors.navy,

                            fontSize: "15px",

                            fontWeight: 700,

                            cursor: "pointer",
                        }}
                    >
                        Verify
                    </button>


                    {/* RESEND */}

                    <div
                        style={{
                            marginTop: "22px",

                            textAlign: "center",

                            fontSize: "14px",

                            color:
                            colors.secondaryText,
                        }}
                    >
                        Didn't receive a code?{" "}

                        <button
                            type="button"
                            style={{
                                border: "none",

                                background: "transparent",

                                color: colors.navy,

                                fontWeight: 700,

                                cursor: "pointer",

                                padding: 0,
                            }}
                        >
                            Resend
                        </button>
                    </div>


                    {/* DELIVERY METHODS */}

                    <div
                        style={{
                            marginTop: "25px",

                            paddingTop: "20px",

                            borderTop:
                                "1px solid #E5E1D8",
                        }}
                    >

                        <p
                            style={{
                                margin: "0 0 12px",

                                color: colors.text,

                                fontSize: "13px",

                                fontWeight: 700,

                                textAlign: "center",
                            }}
                        >
                            Send code via
                        </p>


                        <div
                            style={{
                                display: "flex",

                                justifyContent: "center",

                                gap: "20px",

                                flexWrap: "wrap",
                            }}
                        >

                            <label
                                style={radioLabel}
                            >
                                <input
                                    type="radio"
                                    name="delivery"
                                    defaultChecked
                                />
                                Email
                            </label>


                            <label
                                style={radioLabel}
                            >
                                <input
                                    type="radio"
                                    name="delivery"
                                />
                                WhatsApp
                            </label>


                            <label
                                style={radioLabel}
                            >
                                <input
                                    type="radio"
                                    name="delivery"
                                />
                                SMS
                            </label>

                        </div>

                    </div>


                    {/* BACK */}

                    <button
                        type="button"
                        onClick={onBack}
                        style={{
                            display: "block",

                            margin: "24px auto 0",

                            border: "none",

                            background: "transparent",

                            color: colors.navy,

                            fontSize: "14px",

                            fontWeight: 600,

                            cursor: "pointer",
                        }}
                    >
                        ← Back
                    </button>

                </AuthCard>

            </section>

        </main>
    );
}

const radioLabel = {
    display: "flex",

    alignItems: "center",

    gap: "6px",

    color: colors.text,

    fontSize: "13px",

    cursor: "pointer",
};