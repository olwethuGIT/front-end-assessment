import React from 'react';
import {
    Formik,
    Form as FormikForm,
    Field,
    ErrorMessage,
} from 'formik';
import { PageWrapper, Input, Label, StyledInlineErrorMessage } from '../../pages/styles';

export function Form(props) {
    return (
        <Formik
            {...props}
        >
            <FormikForm className="needs-validation" noValidate="">
                {props.children}
            </FormikForm>
        </Formik>)
}

export function TextField(props) {
    const { name, label, placeholder, text, ...rest } = props
    return (
        <>
            {label && <label htmlFor={name}>{label}</label>}
            <Input
                className="form-control"
                type={text}
                name={name}
                id={name}
                placeholder={placeholder || ""}
                {...rest}
            />
            <ErrorMessage name={name} render={msg => <div style={{ color: 'red' }} >{msg}</div>} />
        </>
    )
}

export function RadioField(props) {
    const { name, label, value } = props
    return (
        <>
            {
                label && <label htmlFor={name}>
                    <Field type="radio" name={name} value={value} />
                    {label}
                </label>
            }

        </>
    )
}
