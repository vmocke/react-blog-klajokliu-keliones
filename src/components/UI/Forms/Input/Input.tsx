import React from 'react';

interface Test {
    inputType: string;
    classInputDiv?: any;
    classInputSpanErrorMsg?: any;
    spanText: string;
    classInputLabel?: any;
    labelText?: string;
    classInput?: any;
    placeholder: string;
    value: string;
    onChange: any;
}

const Input_ = (props: Test) => {
    let inputEl = null;

    switch (props.inputType) {
        case 'number':
            inputEl = (
                <div className={props.classInputDiv}>
                    <span className={props.classInputSpanErrorMsg}>{props.spanText}</span>
                    <label className={props.classInputLabel} htmlFor="number">
                        {props.labelText}
                    </label>
                    <input
                        className={props.classInput}
                        type="text"
                        name="number"
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            );
            break;
        case 'name':
            inputEl = (
                <div className={props.classInputDiv}>
                    <span className={props.classInputSpanErrorMsg}>{props.spanText}</span>
                    <label className={props.classInputLabel} htmlFor="name">
                        {props.labelText}
                    </label>
                    <input
                        className={props.classInput}
                        type="text"
                        name="name"
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            );
            break;
        case 'email':
            inputEl = (
                <div className={props.classInputDiv}>
                    <span className={props.classInputSpanErrorMsg}>{props.spanText}</span>
                    <label className={props.classInputLabel} htmlFor="email">
                        {props.labelText}
                    </label>
                    <input
                        className={props.classInput}
                        type="email"
                        name="email"
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            );
            break;
        case 'textarea':
            inputEl = (
                <div className={props.classInputDiv}>
                    <span className={props.classInputSpanErrorMsg}>{props.spanText}</span>
                    <label className={props.classInputLabel} htmlFor="textarea">
                        {props.labelText}
                    </label>
                    <textarea
                        className={props.classInput}
                        name="textarea"
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            );
            break;
        case 'password':
            inputEl = (
                <div className={props.classInputDiv}>
                    <span className={props.classInputSpanErrorMsg}>{props.spanText}</span>
                    <label className={props.classInputLabel} htmlFor="password">
                        {props.labelText}
                    </label>
                    <input
                        className={props.classInput}
                        type="password"
                        name="password"
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            );
            break;
        default:
            break;
    }

    return inputEl;
};

export default Input_;
/**
    const [reqForm, setReqForm] = useState({
        name: {
            inputType: 'input',
            value: '',
            inputConfig: {
                type: 'text',
                placeholder: 'Your Name',
            },
            validation: {
                errorText: 'Must be atleast 3 char',
                minLength: 3,
            },
        },
        email: {
            inputType: 'input',
            value: '',
            inputConfig: {
                type: 'email',
                placeholder: 'Your email',
            },
            validation: {
                errorText: 'Not valid email adress',
            },
        },
        textarea: {
            inputType: 'textarea',
            value: '',
            inputConfig: {
                placeholder: 'Your Name',
            },
            validation: {
                errorText: 'Must be atleast 4 char',
                minLength: 4,
            },
        },
    });
    const [reqFormErrors, setReqFormErrors] = useState({
        name: '',
        email: '',
        textarea: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
*/
