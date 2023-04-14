import {ReactNode} from "react";

interface TypographyProps {
    children: ReactNode;
    className?: string;
}

const H1 = ({children, className}: TypographyProps) => {
    return (
        <h1 className={`  ${className}`}>{children}</h1>
    )
}

const H2 = ({children, className}: TypographyProps) => {
    return (
        <h2 className={`  ${className}`}>{children}</h2>
    )
}

const H3 = ({children, className}: TypographyProps) => {
    return (
        <h3 className={`  ${className}`}>{children}</h3>
    )
}

const H4 = ({children, className}: TypographyProps) => {
    return (
        <h4 className={`  ${className}`}>{children}</h4>
    )
}

const H5 = ({children, className}: TypographyProps) => {
    return (
        <h5 className={`  ${className}`}>{children}</h5>
    )
}

const H6 = ({children, className}: TypographyProps) => {
    return (
        <h6 className={`  ${className}`}>{children}</h6>
    )
}

const Subheading = ({children, className}: TypographyProps) => {
    return (
        <p className={`  ${className}`}>{children}</p>
    )
}

const Subheading2 = ({children, className}: TypographyProps) => {
    return (
        <p className={`  ${className}`}>{children}</p>
    )
}

const Body = ({children, className}: TypographyProps) => {
    return (
        <p className={`  ${className}`}>{children}</p>
    )
}

const Body2 = ({children, className}: TypographyProps) => {
    return (
        <p className={`  ${className}`}>{children}</p>
    )
}

const Caption = ({children, className}: TypographyProps) => {
    return (
        <p className={`  ${className}`}>{children}</p>
    )
}

export {H1, H2, H3, H4, H5, H6, Subheading, Subheading2, Body, Body2, Caption};
