'use client'
import { useModalStore } from "@stores/ModalStore"
import type { ACF } from "@app/_wordpress/Types"
import { FormInput, FormSelect, FormTextArea, FormCheckBox } from "@components/Input"
import { useState } from "react";
import { ZodSchema, z } from "zod";
import { Formik, FormikErrors } from "formik";
import { colorNameToCode, getZodError } from "@app/helpers";
import Dropzone from 'react-dropzone'
import Button from "./global/Button"

const fields = {
  fullName: "",
  email: "",
  telephone: "",
  experience: "",
  coverLetter: "",
  resume: "",
  privacy: false
}

const schema = {
  fullName: z.string().min(2, "Name must be at least 2 characters long").max(50, "Name must be less than 50 characters long").nonempty("Name is required"),
  email: z.string().email({ message: "Invalid email address" }),
  telephone: z.string().min(7, { message: "Telephone must be at least 7 characters long" }).max(15, { message: "Telephone must be less than 15 characters long" }),
  experience: z.string().min(1, { message: "Field is required" }),
  privacy: z.boolean().refine(val => val === true, { message: "Please confirm you have read and agree with our Privacy Policy" })
}

export default function VacancyApplicationForm() {


  const modalStore = useModalStore()
  const [formHasBeenSubmitted, setHasSubmitted] = useState(false)
  const [formIsValid, setFormIsValid] = useState(false)

  return <Formik validateOnBlur={true} validateOnChange={true} initialValues={fields}
    validate={values => {
      const errors = {} as FormikErrors<typeof fields>;

      const fullName = schema.fullName.safeParse(values.fullName)

      if (!fullName.success) {
        errors.fullName = getZodError(fullName.error.message)
      }

      const email = schema.email.safeParse(values.email)

      if (!email.success) {
        errors.email = getZodError(email.error.message)
      }

      const telephone = schema.telephone.safeParse(values.telephone)

      if (!telephone.success) {
        errors.telephone = getZodError(telephone.error.message)
      }

      const experience = schema.experience.safeParse(values.experience)

      if (!experience.success) {
        errors.experience = getZodError(experience.error.message)
      }

      const privacy = schema.privacy.safeParse(values.privacy)

      if (!privacy.success) {
        errors.privacy = getZodError(privacy.error.message)
      }

      setFormIsValid(Object.keys(errors).length === 0)
      return errors;
    }}


    onSubmit={(values, { setSubmitting, validateForm, submitForm }) => {
      if (!formHasBeenSubmitted) {
        validateForm().then((errors) => {
          submitForm().then(() => {
            setHasSubmitted(true)
          })
        })
      }

      if (formIsValid) {
        alert("Sucess")
      }
    }}
  >
    {({ values, errors, handleChange, handleBlur, handleSubmit, isSubmitting }) => (

      <form onSubmit={handleSubmit} className="bg-white rounded-xl py-5 px-10 lg:py-10 lg:px-20 z-50 relative pt-5 gap-6 flex flex-col shadow-primary">
        <style jsx global>
          {`
      body {
          background: ${colorNameToCode("peach-whip")} !important;
       }
   `}
        </style>
        <h3 className="mobile-h3 lg:desktop-h3" > Apply to vacancy</h3>

        <FormInput id="fullName" error_message={errors.fullName} required={true} name="fullName" label="Full Name" onChange={handleChange} onBlur={handleBlur} value={fields.fullName} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <FormInput id="email" error_message={errors.email} required={true} name="email" label="Email" onChange={handleChange} onBlur={handleBlur} value={fields.email} />
          <FormInput id="telephone" error_message={errors.telephone} required={true} name="telephone" label="Telephone" onChange={handleChange} onBlur={handleBlur} value={fields.telephone} />
        </div>

        <FormTextArea id="experiance" error_message={errors.experience} required={true} onChange={handleChange} onBlur={handleBlur} name="experience" label="Tell us about your experience" value={fields.experience} />

        <div className="flex flex-col gap-1.5">
          <label className="input-label">Submit Your Cover Letter</label>
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="bg-dropzone py-7 px-3.5 flex justify-center items-center font-basis-grotesque-regular text-16">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="hover:cursor-pointer hover:opacity-90">Drag and drop or <span className="underline">upload your file here.</span></p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="input-label">Submit your Resume *</label>
          <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section className="bg-dropzone py-7 px-3.5 flex justify-center items-center font-basis-grotesque-regular text-16">
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p className="hover:cursor-pointer hover:opacity-90">Drag and drop or <span className="underline">upload your file here.</span></p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        <div className="flex flex-col gap-5">
          <FormCheckBox id="privacy" required={true} error_message={errors.privacy} checked={fields.privacy} name="privacy" onChange={handleChange} label=<p>Click here to confirm you have read and agree with our <a className="underline" href="#">Privacy Policy.</a></p> />
          <FormCheckBox id="newsletter" label="Sign-up for our newsletter to be the first to hear about our workshops and latest insights" />
        </div>

        <div className="w-fit">
          <Button {...{
            elm: "button",
            label: "Send Message",
            theme: "royal-purple",
            link: {
              url: "#",
              title: 'Send Job Application'
            }
          }} elm="button" theme="royal-purple" className="hover:cursor-pointer desktop-button font-bold font-basis-grotesque-bold py-[14px] px-[28px]" />
        </div>
      </form>)}
  </Formik>
}
