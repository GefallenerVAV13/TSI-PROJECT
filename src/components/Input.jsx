import React from "react";

export const Input = ({ type, placeholder, color, size }) => {
    const defaultClass = "border rounded-2 px-3 py-2";

    const classes = {
        colors: {
            primary: "border-purple-950 focus:border-purple-950",
            secondary: "purple-950 focus:border-purple-950",
        },
        sizes: {
            small: "text-sm h-[32px]",
            medium: "text-base h-[40px]",
            large: "text-lg h-[48px]",
        },
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`${defaultClass} ${classes.colors[color]} ${classes.sizes[size]}`}
        />
    );
};