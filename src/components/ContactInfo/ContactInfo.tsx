import React from 'react';

interface ContactInfo {
    title: string;
    urlTitle: string;
    url: string;
}

const ContactInfo = (props: ContactInfo) => {
    return (
        <React.Fragment>
            <h5>{props.title}:</h5>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={props.title === 'email' ? `mailto:${props.url}` : props.url}
            >
                {props.urlTitle}
            </a>
            <br></br>
        </React.Fragment>
    );
};

export default ContactInfo;
