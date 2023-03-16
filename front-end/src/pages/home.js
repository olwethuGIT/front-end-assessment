import data from '../api/questions.json';
import { useState } from 'react';
import { Form, TextField, RadioField } from '../components/element';

import { PageWrapper, Wrapper, MultiRadioWrapper, Label, Icon } from './styles';

export default function Home({ details }) {
    const [activeYes, setActiveYes] = useState(false);
    const [activeNo, setActiveNo] = useState(false);
    const [inputFields, setInputFields] = useState({ details })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: ""
    });
    const onSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
        setSubmitting(false);
    }

    const handleOnChange = (e) => {
        if (e.target.value === 'YES') {
            setActiveYes(true);
            setActiveNo(false);
            setInputFields(prevState => ({
                ...prevState,
                [e.target.name]: true
            }))
        } else {
            setActiveYes(false);
            setActiveNo(true);
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
                            return <Wrapper key={index} role="group" aria-labelledby="my-radio-group" onChange={handleOnChange}>
                                <Label>{field.text}</Label>
                                <MultiRadioWrapper>
                                    <RadioField
                                        name={field.code}
                                        label={field.falseLabel}
                                        value={field.falseLabel}
                                        active={activeNo}
                                    />
                                    <RadioField
                                        name={field.code}
                                        label={field.trueLabel}
                                        value={field.trueLabel}
                                        active={activeYes}
                                    />
                                </MultiRadioWrapper>
                            </Wrapper>;
                        }
                    })
                }
            </Form>
        </PageWrapper>
    )
}