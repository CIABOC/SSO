"use client";

import { colors } from "@/src/styles/theme";

interface CIABOCBrandPanelProps {
    title: string;
    description: string;
}

export default function CIABOCBrandPanel({
                                             title,
                                             description,
                                         }: CIABOCBrandPanelProps) {
    return (
        <section
            style={{
                position: "relative",
                width: "50%",
                minHeight: "100vh",
                background: colors.navy,
                color: colors.white,
                padding: "70px 6.5%",
                overflow: "hidden",
            }}
        >

            {/* Logo */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    fontSize: "28px",
                    fontWeight: 700,
                }}
            >

                <div
                    style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "50%",
                        background: colors.gold,
                        color: colors.navy,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "24px",
                        fontWeight: 800,
                    }}
                >
                    C
                </div>

                <span>CIABOC</span>

            </div>


            {/* Commission */}

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    marginTop: "68px",
                    fontSize: "15px",
                    lineHeight: 1.45,
                }}
            >

                <div
                    style={{
                        width: "58px",
                        height: "58px",
                        flexShrink: 0,
                        borderRadius: "50%",
                        background: colors.gold,
                        color: colors.navy,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        fontWeight: 700,
                    }}
                >
                    ▣
                </div>

                <div>
                    2026 Commission to Investigate
                    <br />
                    Allegations of Bribery or
                    <br />
                    Corruption
                </div>

            </div>


            {/* Gold line */}

            <div
                style={{
                    width: "49px",
                    height: "2px",
                    background: colors.gold,
                    marginTop: "42px",
                }}
            />


            {/* Screen title */}

            <h1
                style={{
                    margin: "18px 0 8px",
                    fontSize: "34px",
                    lineHeight: 1.2,
                    fontWeight: 700,
                }}
            >
                {title}
            </h1>


            {/* Description */}

            <p
                style={{
                    margin: 0,
                    maxWidth: "430px",
                    fontSize: "16px",
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,0.88)",
                }}
            >
                {description}
            </p>


            {/* Decorative circles */}

            <div
                style={{
                    position: "absolute",
                    width: "260px",
                    height: "260px",
                    border: "1px solid rgba(255,255,255,0.38)",
                    borderRadius: "50%",
                    top: "-200px",
                    right: "-120px",
                }}
            />

            <div
                style={{
                    position: "absolute",
                    width: "330px",
                    height: "330px",
                    border: "1px solid rgba(255,255,255,0.38)",
                    borderRadius: "50%",
                    bottom: "-220px",
                    left: "-170px",
                }}
            />

        </section>
    );
}