"use client";

import { ReactNode } from "react";
import { colors } from "@/src/styles/theme";

interface AuthCardProps {
    children: ReactNode;
}

export default function AuthCard({
                                     children,
                                 }: AuthCardProps) {
    return (
        <div
            style={{
                width: "100%",
                maxWidth: "580px",
                background: colors.white,
                borderRadius: "19px",
                padding: "32px 48px 38px",
                boxShadow:
                    "0 12px 40px rgba(20, 40, 75, 0.10)",
            }}
        >
            {children}
        </div>
    );
}