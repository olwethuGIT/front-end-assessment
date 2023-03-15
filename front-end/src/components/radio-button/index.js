import React from 'react';
import { Formik, Field, Form } from 'formik';


export default function RadioButton(props) {
    console.log(props.values)
    return (
        <div role="group" aria-labelledby="my-radio-group">
            <label>
                <Field type="radio" name="picked" value={props.values.falseLabel} />
                {props.values.falseLabel}
            </label>
            <label>
                <Field type="radio" name="picked" value={props.values.falseLabel} />
                {props.values.trueLabel}
            </label>
        </div>
    )
}