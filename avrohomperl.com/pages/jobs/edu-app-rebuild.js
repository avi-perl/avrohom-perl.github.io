import FormText from "react-bootstrap/FormText"
import {Formik, Field, Form} from 'formik';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import Card from "../../Components/Card";


import React from "react";
import {withRouter} from "next/router";

class JobApplication extends React.Component {
    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //     };
    // }

    render() {

        function validateRequired(value) {
            let error;
            if (!value) {
                error = 'Required';
            }
            return error;
        }

        return (
            <Card cardContentOpen={true}>
                <div className="p-2">
                    <Formik
                        initialValues={{
                            name: 'test',
                            contact: 'avi@aviperl.me',
                            coverLetter: '',
                            workLinks: '',
                            resumeUrl: '',
                            checkbox: '',
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {

                                fetch("https://post-hole-development.herokuapp.com/model/jobtest", {
                                    method: 'POST',
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(values, null, 2)
                                }).then(response => this.setState({fetchInProgress: false}, () => {
                                    if (response.status === 200) {
                                        this.setState({submitSuccess: true})
                                        console.log(response)
                                    } else {
                                        this.setState({submitSuccess: false})
                                        console.log(response)
                                    }
                                }));

                                setSubmitting(false);
                            }, 1000);
                        }}
                    >
                        {({isSubmitting, errors, touched}) => (
                            <Form>
                                <Row>
                                    <Col lg={6}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <Field name="name" className="form-control" type="text"
                                                   validate={validateRequired}/>
                                            {errors.name && touched.name &&
                                            <div style={{color: "red"}}>{errors.name}</div>}
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="form-group">
                                            <label htmlFor="contact">Preferred contact</label>
                                            <Field name="contact" className="form-control" type="text"
                                                   validate={validateRequired}/>
                                            {errors.email && touched.email &&
                                            <div style={{color: "red"}}>{errors.email}</div>}
                                            <FormText className="text-muted">
                                                Email, phone, etc.
                                            </FormText>
                                        </div>
                                    </Col>
                                </Row>
                                <hr/>

                                <div className="form-group">
                                    <label htmlFor="coverLetter">Why are you a good fit for this role?</label>
                                    <Field name="coverLetter" className="form-control" as="textarea"/>
                                    <FormText className="text-muted">
                                        What specific experience have you had that is related to this type of project?
                                    </FormText>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="workLinks">Links to related projects</label>
                                    <Field name="workLinks" className="form-control" as="textarea"
                                           validate={validateRequired}/>
                                    {errors.workLinks && touched.email &&
                                    <div style={{color: "red"}}>{errors.workLinks}</div>}
                                    <FormText className="text-muted">
                                        Please include some links to apps/code that demonstrates the skills that you can
                                        bring to this project.
                                    </FormText>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="other">Additional Comments</label>
                                    <Field name="other" className="form-control" as="textarea"/>
                                    <FormText className="text-muted">
                                        Add any additional comments about availability etc.
                                    </FormText>
                                </div>

                                <div role="group" aria-labelledby="checkbox-group">
                                    <label>
                                        <Field type="checkbox" name="checkbox" value="Back End"/>
                                        {" "}I can contribute to a Python backend
                                    </label><br/>
                                    <label>
                                        <Field type="checkbox" name="checkbox" value="Front End"/>
                                        {" "}I can contribute to a React or Vue Front end
                                    </label><br/>
                                    <label>
                                        <Field type="checkbox" name="checkbox" value="Other Positions"/>
                                        {" "}Please keep me in mind for other contracting positions
                                    </label><br/>
                                </div>
                                <hr/>

                                <div className="form-group">
                                    <label htmlFor="resumeLink">Link to resume</label>
                                    <Field name="resumeLink" className="form-control" type="text"/>
                                </div>

                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary"
                                            disabled={isSubmitting}>{isSubmitting ? "Please wait..." : "Submit"}</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </Card>
        );
    }
}

export default withRouter(JobApplication);