"use client";

import CIABOCBrandPanel from "@/src/components/CIABOCBrandPanel";
import AuthCard from "@/src/components/AuthCard";

import { colors } from "@/src/styles/theme";

interface SuccessScreenProps {
    onDashboard: () => void;
    onLogout: () => void;
}

export default function SuccessScreen({
                                          onDashboard,
                                          onLogout,
                                      }: SuccessScreenProps) {
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
                title="Welcome back"
                description="Your CIABOC Account has been securely authenticated."
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

                    {/* SUCCESS ICON */}

                    <div
                        style={{
                            width: "72px",
                            height: "72px",

                            margin: "10px auto 22px",

                            borderRadius: "50%",

                            background:
                            colors.successBackground,

                            color:
                            colors.success,

                            display: "flex",

                            alignItems: "center",

                            justifyContent: "center",

                            fontSize: "36px",

                            fontWeight: 700,
                        }}
                    >
                        ✓
                    </div>


                    {/* TITLE */}

                    <h1
                        style={{
                            margin: "0 0 8px",

                            color:
                            colors.text,

                            fontSize: "26px",

                            fontWeight: 700,

                            textAlign: "center",
                        }}
                    >
                        Signed in successfully
                    </h1>


                    {/* DESCRIPTION */}

                    <p
                        style={{
                            margin:
                                "0 auto 22px",

                            color:
                            colors.secondaryText,

                            fontSize: "14px",

                            lineHeight: 1.5,

                            textAlign: "center",
                        }}
                    >
                        Welcome back to your CIABOC
                        Account.
                    </p>


                    {/* USER INFORMATION */}

                    <div
                        style={{
                            padding: "16px",

                            borderRadius: "10px",

                            background:
                            colors.inputBackground,

                            marginBottom: "18px",

                            textAlign: "center",
                        }}
                    >

                        <div
                            style={{
                                color:
                                colors.navy,

                                fontSize: "16px",

                                fontWeight: 700,
                            }}
                        >
                            Nimal Perera
                        </div>

                        <div
                            style={{
                                marginTop: "4px",

                                color:
                                colors.secondaryText,

                                fontSize: "13px",
                            }}
                        >
                            Declarant
                        </div>

                    </div>


                    {/* SECURE SESSION */}

                    <div
                        style={{
                            display: "flex",

                            alignItems: "center",

                            gap: "10px",

                            padding: "13px 15px",

                            border:
                                "1px solid #E5E1D8",

                            borderRadius: "9px",

                            marginBottom: "22px",
                        }}
                    >

                        <span
                            style={{
                                fontSize: "18px",
                            }}
                        >
                            🔒
                        </span>

                        <div>

                            <div
                                style={{
                                    color:
                                    colors.text,

                                    fontSize: "13px",

                                    fontWeight: 700,
                                }}
                            >
                                Secure session
                            </div>

                            <div
                                style={{
                                    color:
                                    colors.secondaryText,

                                    fontSize: "12px",

                                    marginTop: "2px",
                                }}
                            >
                                Your account is securely
                                authenticated.
                            </div>

                        </div>

                    </div>


                    {/* DASHBOARD */}

                    <button
                        type="button"
                        onClick={onDashboard}
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

                            marginBottom: "12px",
                        }}
                    >
                        Go to Dashboard
                    </button>


                    {/* LOGOUT */}

                    <button
                        type="button"
                        onClick={onLogout}
                        style={{
                            width: "100%",

                            height: "48px",

                            border:
                                `1px solid ${colors.navy}`,

                            borderRadius: "9px",

                            background:
                            colors.white,

                            color:
                            colors.navy,

                            fontSize: "14px",

                            fontWeight: 700,

                            cursor: "pointer",
                        }}
                    >
                        Logout
                    </button>

                </AuthCard>

            </section>

        </main>
    );
}