"use client";

import { colors } from "@/src/styles/theme";

export default function LanguageSelector() {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "8px",
                marginBottom: "30px",
            }}
        >

            <button
                type="button"
                style={languageButton}
            >
                සිං
            </button>

            <button
                type="button"
                style={languageButton}
            >
                த
            </button>

            <button
                type="button"
                style={{
                    ...languageButton,
                    background: colors.navy,
                    color: colors.white,
                    borderColor: colors.navy,
                }}
            >
                English
            </button>

        </div>
    );
}

const languageButton = {
    height: "40px",
    padding: "0 14px",
    border: `1px solid ${colors.border}`,
    borderRadius: "9px",
    background: colors.white,
    color: colors.navy,
    fontSize: "14px",
    fontWeight: 600,
    cursor: "pointer",
};