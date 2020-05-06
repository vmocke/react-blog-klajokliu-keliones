import React from 'react';

const getViewBox = (name: string) => {
    switch (name) {
        case 'search':
            return '0 0 64 64';
        default:
            return '0 0 32 32';
    }
};

const getPath = (name: string, props: any) => {
    switch (name) {
        case 'search':
            return (
                <g>
                    <circle
                        fill="none"
                        {...props}
                        cx="32"
                        cy="25"
                        r="16"
                        stroke="rgb(0, 0, 0)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                    />
                    <line
                        fill="none"
                        {...props}
                        stroke="rgb(0, 0, 0)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        x1="40.9"
                        x2="38.8"
                        y1="44.1"
                        y2="39.5"
                    />
                    <line
                        fill="none"
                        {...props}
                        stroke="rgb(0, 0, 0)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                        strokeWidth="4"
                        x1="40.9"
                        s="true"
                        x2="46"
                        y1="44.1"
                        y2="55"
                    />
                    <path
                        fill="none"
                        {...props}
                        d="M36.2,13.7   c2.7,1,4.9,2.9,6.3,5.3"
                        stroke="rgb(0, 0, 0)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                </g>
            );
        default:
            return <path />;
    }
};

const SVGIcon = ({
    onClick = (e: any) => e.preventDefault(),
    type = '',
    name = '',
    width = '100%',
    height = '100%',
    fill = 'none',
    viewBox = '',
    style = {},
    className = '',
}) => (
    <svg
        //enable-background="new 0 0 64 64"
        //id="Layer_1"
        //version="1.1"
        //xmlSpace="preserve"
        onClick={onClick}
        type={type}
        width={width}
        height={height}
        className={className}
        style={style}
        viewBox={viewBox || getViewBox(name)}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        {getPath(name, { fill })}
    </svg>
);

export default SVGIcon;
