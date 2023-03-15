import data from '../api/questions.json';
import { useState } from 'react';
import { Form, TextField, RadioField } from '../components/element';

import { PageWrapper } from './styles';

export default function Home({ details }) {
    const [inputFields, setInputFields] = useState({ details })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: ""
    });
    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        console.log(values);
        setSubmitting(false);
    }

    const handleOnChange = (e) => {
        if (e.target.value === 'YES') {
            setInputFields(prevState => ({
                ...prevState,
                [e.target.name]: true
            }))
        } else {
            setInputFields(prevState => ({
                ...prevState,
                [e.target.name]: false
            }))
        }
    }

    return (
        <PageWrapper>
            <Form
                enableReinitialize
                initialValues={formData}
                onSubmit={onSubmit}
            >
                {
                    data.questions.map((field, index) => {
                        if (field.type === "text") {
                            return field.conditions.map((element, i) => {
                                if (eval(inputFields[element.question] + element.operator + element.value)) {
                                    return <div key={index}>
                                        <TextField
                                            name={field.code}
                                            label={field.text}
                                            type={field.type}
                                            placeholder={field.placeholder}
                                        />
                                    </div>;
                                }
                            });
                        }

                        if (field.type === "bool") {
                            return <div key={index} role="group" aria-labelledby="my-radio-group" onChange={handleOnChange}>
                                <RadioField
                                    name={field.code}
                                    label={field.falseLabel}
                                    value={field.falseLabel}
                                />
                                <RadioField
                                    name={field.code}
                                    label={field.trueLabel}
                                    value={field.trueLabel}
                                />
                            </div>;
                        }
                    })
                }
            </Form>
        </PageWrapper>
    )
}