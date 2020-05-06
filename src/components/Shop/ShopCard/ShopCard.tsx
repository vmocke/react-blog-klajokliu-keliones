import React, { useState } from 'react';
import classes from './ShopCard.module.css';
import Input from '../../UI/Forms/Input/Input';
import { checkInputValidation } from '../../../shared/utility';

interface ShopCard {
    id: string;
    title: string;
    price: string;
    text: string;
    src: string;
}

const ShopCard = (props: ShopCard) => {
    const [reqForm, setReqForm] = useState({
        name: {
            inputType: 'input',
            value: '',
            inputConfig: {
                type: 'text',
                placeholder: 'vardas, pavardė',
            },
            validation: {
                errorText: 'mažiausiai trys raidės',
                minLength: 3,
            },
        },
        email: {
            inputType: 'input',
            value: '',
            inputConfig: {
                type: 'email',
                placeholder: 'email',
            },
            validation: {
                errorText: 'netinkamas pašto adresas',
            },
        },
        textarea: {
            inputType: 'textarea',
            value: '',
            inputConfig: {
                placeholder: 'kelionės vieta, data',
            },
            validation: {
                errorText: 'tekstas per trumpas',
                placeholder: 'šalis į kur keliaujate, data',
                minLength: 10,
            },
        },
    });
    const [reqFormErrors, setReqFormErrors] = useState({
        name: '',
        email: '',
        textarea: '',
    });
    const [isFormValid, setIsFormValid] = useState(false);
    const [buttonCliked, setButtonCliked] = useState(false);

    const checkFormValidation = (errForm: {}, reqForm_: {}) => {
        // cheking if have input errors
        const errValidationArr: string[] = Object.values(errForm);
        const errValidation: string[] = errValidationArr.filter((value: string) => value.length !== 0);
        // cheking if form is fullfiled
        const formValidationArr: string[] = [];
        for (let key in reqForm_) {
            formValidationArr.push(reqForm_[key].value);
        }
        const formValidation = formValidationArr.filter((value) => value.length === 0);
        // cheking if no err and all form filled
        if (errValidation.length === 0 && formValidation.length === 0) {
            setIsFormValid(true);
            // cia dar galbut kazakaip pakoreguoti issiunciama info pagal serveri ar pan
            const sendReqFormData = { id: props.id };
            for (let key in reqForm) {
                Object.assign(sendReqFormData, { [key]: reqForm[key].value });
            }
        } else {
            console.error('INVALID FORM');
        }
    };

    const onInputChangeHandler = (e: any) => {
        e.preventDefault();
        const { name, value } = e.target;
        const reqFormUpdateEl = { ...reqForm[name], value: value };
        const reqFormUpdate = { ...reqForm, [name]: reqFormUpdateEl };
        let reqFormErrors_ = { ...reqFormErrors };
        setReqFormErrors(checkInputValidation(name, value, reqFormErrors_, reqForm));
        setReqForm(reqFormUpdate);
    };

    const onFormSubmitHandler = (e: any) => {
        e.preventDefault();
        checkFormValidation(reqFormErrors, reqForm);
        setButtonCliked(true);
        setTimeout(() => {
            setButtonCliked(false);
            setIsFormValid(false);
        }, 2000);
        // NEED TO SEND CLIENT INFORMATION TO A SERVER
    };

    const reqFormArr = [];
    for (let key in reqForm) {
        reqFormArr.push({
            id: key,
            config: reqForm[key],
            span: reqFormErrors[key],
        });
    }

    let buttonClickMsg;
    if (buttonCliked) {
        if (isFormValid) {
            buttonClickMsg = <p className={classes.ShopCardEmailSent}>Laiškas išiųstas</p>;
        } else {
            buttonClickMsg = <p className={classes.ShopCardNotAllFilled}>Nevisi laukai užpildyti</p>;
        }
    }

    let form = (
        <form onSubmit={onFormSubmitHandler} className={classes.ShopCardForm}>
            {reqFormArr.map((item: any) => (
                <Input
                    key={item.id}
                    inputType={item.id}
                    classInputDiv={classes.FormInputDiv}
                    spanText={item.span}
                    placeholder={item.config.inputConfig.placeholder}
                    value={item.config.value}
                    onChange={onInputChangeHandler}
                />
            ))}
            {buttonClickMsg}
            <button onClick={onFormSubmitHandler}>
                <div></div>
                <div></div>
                <div></div>
                <span>siųsti</span>
            </button>
        </form>
    );

    return (
        <div className={classes.ShopCard} id={props.id}>
            <h3>{props.title}</h3>
            <span>{props.price}</span>
            <p>{props.text}</p>
            {form}
            {props.src && (
                <div className={classes.ShopCardImg}>
                    <img src={props.src} alt="foto_" />
                </div>
            )}
        </div>
    );
};

export default ShopCard;
