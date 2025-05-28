import React from 'react';

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
}
export default function Button(props: ButtonProps){
    return (
        <button className="bg-black" onClick={props.onClick}>        
            {props.children}
        </button>
    );
}