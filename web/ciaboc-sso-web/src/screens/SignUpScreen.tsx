"use client";

import { useState } from "react";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";
import LanguageSelector from "@/src/components/LanguageSelector";

import { colors } from "@/src/styles/theme";

interface SignUpScreenProps {
    onSignIn: () => void;
    onContinue: () => void;
}

export default function SignUpScreen({
                                         onSignIn,
                                         onContinue,
                                     }: SignUpScreenProps) {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState(false);

    const [whatsappSame, setWhatsappSame] = useState(false);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                background: colors.cream,
            }}
        >

            {/* =========================================
                LEFT BRAND PANEL
            ========================================= */}

            <CIABOCBrandPanel
                title="Create Your Account"
                description="Register for a secure CIABOC Account and access your official services from one place."
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

                    overflowY: "auto",
                }}
            >

                <AuthCard>

                    <LanguageSelector />


                    {/* HEADER */}

                    <div
                        style={{
                            marginBottom: "24px",
                        }}
                    >
                        <h2
                            style={{
                                margin: 0,

                                color: colors.text,

                                fontSize: "24px",
                                fontWeight: 700,
                            }}
                        >
                            Create your account
                        </h2>

                        <p
                            style={{
                                margin:
                                    "7px 0 0",

                                color:
                                colors.secondaryText,

                                fontSize: "14px",
                                lineHeight: 1.5,
                            }}
                        >
                            Enter your details to create
                            your CIABOC Account.
                        </p>
                    </div>


                    {/* =================================
                        FULL NAME
                    ================================= */}

                    <div style={formGroup}>

                        <label style={label}>
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            style={input}
                        />

                    </div>


                    {/* =================================
                        NIC
                    ================================= */}

                    <div style={formGroup}>

                        <label style={label}>
                            NIC
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your NIC number"
                            style={input}
                        />

                    </div>


                    {/* =================================
                        EMAIL
                    ================================= */}

                    <div style={formGroup}>

                        <label style={label}>
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            style={input}
                        />

                    </div>


                    {/* =================================
                        MOBILE
                    ================================= */}

                    <div style={formGroup}>

                        <label style={label}>
                            Mobile Number
                        </label>

                        <input
                            type="tel"
                            placeholder="Enter your mobile number"
                            style={input}
                        />

                    </div>


                    {/* =================================
                        WHATSAPP
                    ================================= */}

                    <div style={formGroup}>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "9px",
                                marginBottom: "9px",
                            }}
                        >

                            <input
                                id="whatsappSame"
                                type="checkbox"
                                checked={whatsappSame}
                                onChange={(event) =>
                                    setWhatsappSame(
                                        event.target.checked
                                    )
                                }
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    accentColor:
                                    colors.navy,
                                    cursor: "pointer",
                                }}
                            />

                            <label
                                htmlFor="whatsappSame"
                                style={{
                                    color:
                                    colors.text,
                                    fontSize: "14px",
                                    cursor: "pointer",
                                }}
                            >
                                WhatsApp number is same as
                                mobile number
                            </label>

                        </div>

                        {!whatsappSame && (
                            <input
                                type="tel"
                                placeholder="Enter your WhatsApp number"
                                style={input}
                            />
                        )}

                    </div>


                    {/* =================================
                        PASSWORD
                    ================================= */}

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
                                placeholder="Create a password"
                                style={{
                                    ...input,
                                    paddingRight:
                                        "55px",
                                }}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                                style={eyeButton}
                            >
                                👁
                            </button>

                        </div>

                    </div>


                    {/* =================================
                        PASSWORD REQUIREMENTS
                    ================================= */}

                    <div
                        style={{
                            marginTop: "-10px",
                            marginBottom: "20px",

                            padding: "12px 14px",

                            borderRadius: "8px",

                            background:
                            colors.inputBackground,

                            color:
                            colors.secondaryText,

                            fontSize: "12px",

                            lineHeight: 1.6,
                        }}
                    >

                        <strong
                            style={{
                                color:
                                colors.text,
                            }}
                        >
                            Password requirements
                        </strong>

                        <br />

                        • At least 8 characters
                        <br />

                        • One uppercase letter
                        <br />

                        • One lowercase letter
                        <br />

                        • One number
                        <br />

                        • One special character

                    </div>


                    {/* =================================
                        CONFIRM PASSWORD
                    ================================= */}

                    <div style={formGroup}>

                        <label style={label}>
                            Re-enter Password
                        </label>

                        <div
                            style={{
                                position: "relative",
                            }}
                        >

                            <input
                                type={
                                    showConfirmPassword
                                        ? "text"
                                        : "password"
                                }
                                placeholder="Re-enter your password"
                                style={{
                                    ...input,
                                    paddingRight:
                                        "55px",
                                }}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowConfirmPassword(
                                        !showConfirmPassword
                                    )
                                }
                                style={eyeButton}
                            >
                                👁
                            </button>

                        </div>

                    </div>


                    {/* =================================
                        CREATE ACCOUNT
                    ================================= */}

                    <button
                        type="button"
                        onClick={onContinue}
                        style={primaryButton}
                    >
                        Create Account
                    </button>


                    {/* =================================
                        DIVIDER
                    ================================= */}

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",

                            gap: "14px",

                            margin: "24px 0",

                            color: "#8A8A8A",

                            fontSize: "13px",
                        }}
                    >

                        <div style={divider} />

                        <span>OR</span>

                        <div style={divider} />

                    </div>


                    {/* =================================
                        GOOGLE
                    ================================= */}

                    <button
                        type="button"
                        style={socialButton}
                    >

                        <span
                            style={{
                                fontWeight: 700,
                                fontSize: "16px",
                            }}
                        >
                            G
                        </span>

                        Continue with Google

                    </button>


                    {/* =================================
                        SIGN IN
                    ================================= */}

                    <div
                        style={{
                            marginTop: "22px",

                            textAlign: "center",

                            color: "#666",

                            fontSize: "14px",
                        }}
                    >

                        Already have an account?{" "}

                        <button
                            type="button"
                            onClick={onSignIn}
                            style={{
                                ...linkButton,
                                fontWeight: 700,
                            }}
                        >
                            Sign in
                        </button>

                    </div>

                </AuthCard>

            </section>

        </main>
    );
}


/* =============================================
   STYLES
============================================= */

const formGroup = {
    marginBottom: "18px",
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

    height: "52px",

    padding: "0 16px",

    border:
        "1px solid #D8D8D8",

    borderRadius: "9px",

    background:
    colors.inputBackground,

    color:
    colors.navy,

    fontSize: "14px",

    outline: "none",
};

const eyeButton = {
    position: "absolute" as const,

    right: 0,
    top: 0,

    width: "52px",
    height: "52px",

    border: "none",

    borderLeft:
        `1px solid ${colors.border}`,

    background:
    colors.white,

    borderRadius:
        "0 9px 9px 0",

    cursor: "pointer",
};

const primaryButton = {
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
};

const divider = {
    flex: 1,

    height: "1px",

    background:
        "#DDD8CE",
};

const socialButton = {
    width: "100%",

    minHeight: "48px",

    border:
        "1px solid #D8D8D8",

    borderRadius: "9px",

    background:
    colors.white,

    color:
    colors.navy,

    display: "flex",

    alignItems: "center",

    justifyContent: "center",

    gap: "10px",

    fontSize: "14px",

    fontWeight: 600,

    cursor: "pointer",
};

const linkButton = {
    border: "none",

    background: "transparent",

    color:
    colors.navy,

    fontSize: "14px",

    cursor: "pointer",

    padding: 0,
};