import React from 'react';

export const updateObject = (oldObject: object, updatedProperties: any) => {
    return {
        ...oldObject,
        ...updatedProperties,
    };
};

export const checkValidity = (
    value: string,
    rules: { required: boolean; minLength: number; maxLength: number; isEmail: any; isNumeric: any },
) => {
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid;
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid;
    }

    return isValid;
};

export const spinnerTimeout = (setLocalSpinnerName: any, time: number) => {
    setLocalSpinnerName(true);
    setTimeout(() => {
        setLocalSpinnerName(false);
    }, time);
};

export const checkInputValidation = (
    name: string,
    value: string,
    reqFormErrorCopy: { number?: string; name?: string; email?: string; textarea?: string; password?: string } | any,
    reqForm:
        | {
              number?: { validation: { errorText: string } | undefined };
              email?: { validation: { errorText: string } };
              name?: { validation: { errorText: string; minLength: number } };
              textarea?: { validation: { errorText: string; minLength: number } };
              password?: { validation: { errorText: string; minLength: number } };
          }
        | any,
) => {
    const emailRegex = RegExp(
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    );
    const numberRegex = RegExp(/^\d+$/);

    switch (name) {
        case 'number':
            reqFormErrorCopy.number = numberRegex.test(value.trim()) ? '' : reqForm.number.validation.errorText;
            break;
        case 'name':
            reqFormErrorCopy.name =
                value.trim().length >= reqForm.name.validation.minLength ? '' : reqForm.name.validation.errorText;
            break;
        case 'email':
            reqFormErrorCopy.email = emailRegex.test(value) ? '' : reqForm.email.validation.errorText;
            break;
        case 'textarea':
            reqFormErrorCopy.textarea =
                value.trim().length < reqForm.textarea.validation.minLength
                    ? reqForm.textarea.validation.errorText
                    : '';
            break;
        case 'password':
            reqFormErrorCopy.password =
                value.trim().length < reqForm.password.validation.minLength
                    ? reqForm.password.validation.errorText
                    : '';
            break;
        default:
            break;
    }
    return reqFormErrorCopy;
};
// GETTING DATES AND TIMES
export const convertDateFirestore = (itemDate: any) => {
    const currentDate = new Date(itemDate.toDate());
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const day = currentDate.getDate();
    return `${year}-${month + 1}-${day}`;
};
export const convertTimeFirestore = (itemDate: any) => {
    const currentDate = new Date(itemDate.toDate());
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    return `${hours}:${minutes}`;
};
// GETTING LAST POST DATE
export const getLastPageLastPostDate = (fullItemsArr: any, itemPageArr: any) => {
    const lastPostDate: {}[] = [];
    if (fullItemsArr.length > 0 && itemPageArr.length > 0) {
        const lastPageArr = itemPageArr[itemPageArr.length - 1];
        const lastPagePostDate = lastPageArr[lastPageArr.length - 1].date;
        lastPostDate.push(lastPagePostDate);
    } else if (fullItemsArr.length > 0 && itemPageArr.length === 0) {
        const lastPagePostDate = itemPageArr[itemPageArr.length - 1].date;
        lastPostDate.push(lastPagePostDate);
    } else {
        return null;
    }
    return lastPostDate;
};

export const getLastPostDate = (fullItemsArr: any) => {
    const lastPostDate: {}[] = [];
    if (fullItemsArr.length > 0) {
        const lastPagePostDate = fullItemsArr[fullItemsArr.length - 1].date;
        lastPostDate.push(lastPagePostDate);
    } else {
        return null;
    }
    return lastPostDate;
};
// LIMIT TEXT LENGTH
export const limitTitle = (title: string, limit: number) => {
    const newTitle: any = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc: any, cur: any) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            }

            return acc + cur.length;
        }, 0);

        return `${newTitle.join(' ')} ...`;
    }

    return title;
};
// LINKIFY CUSTOM SETUP
const textDecoration = (text: string): string => {
    text = text.includes('@') ? text : 'nuoroda';
    return text;
};
export const componentDecorator = (href: string, text: string, key: number) => (
    <a href={href} key={key} target="_blank" rel="noopener noreferrer">
        {textDecoration(text)}
    </a>
);
