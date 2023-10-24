'use client';

import Button from "@components/global/Button"
import type { ACF } from "@app/_wordpress/Types"
import { ContactFormSchema } from "@app/schemas";
import { FormInput, FormSelect, FormTextArea, FormCheckBox } from "@components/Input"
import { Formik } from "formik";
import { SuccessTemplate } from "@components/ui/Modal"
import { getZodErrorMessage } from "@app/helpers";
import { postJson } from "@app/client";
import { useModalStore } from "@stores/ModalStore"
import { useState } from "react";

type ContactFormProps = {
  contact_form_sucess_modal: ACF.Group.ContactForm.contact_form_success_modal
}

export default function ContactForm(props: ContactFormProps) {
  const modalStore = useModalStore()
  const [isLoading, setLoading] = useState(false)

  const [formHasBeenSubmitted, setHasSubmitted] = useState(false)

  const [formIsValid, setFormIsValid] = useState(false)

  const initalValues = {
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    message: '',
    contact_reason: 'select-a-reason',
    privacy: false,
    add_to_newsletter: false
  } as const;

  type initalValues = keyof typeof initalValues

  return <div className="p-5 flex flex-col gap-6 pt-14 pb-14 max-w-[690px] max-h-[850px]">
    <h3 className="mobile-h3 lg:desktop-h3">Send us a message</h3>
    <Formik
      validateOnBlur={true}
      validateOnChange={true}
      initialValues={initalValues}
      validate={values => {
        if (!formHasBeenSubmitted) {
          return;
        }

        const validation = ContactFormSchema.safeParse(values)


        setFormIsValid(validation.success)

        if (!validation.success) {
          return validation.error.flatten();
        }

      }}
      onSubmit={async (values, { validateForm, submitForm }) => {
        if (!formHasBeenSubmitted) {
          validateForm().then(() => {
            submitForm().then(() => {
              setHasSubmitted(true)
            })
          })
        }

        if (formIsValid) {
          setLoading(true);
          await postJson('/api/contact-form', values).then(async (response: Response) => {
            setLoading(false);
            if (response.status != 200) {
              alert('Form submission failed. Please try again later.')
              throw new Error('Form submission failed. Please try again later.')
            } else {
              modalStore.setContent(<SuccessTemplate {...props.contact_form_sucess_modal} />)
            }
          });
        }
      }}>
      {({ errors, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-3">
            <FormInput
              id="first_name"
              error_message={getZodErrorMessage<initalValues>(errors, "first_name")}
              label="First Name"
              name="first_name"
              disabled={isLoading}
              onBlur={handleBlur}
              onChange={handleChange}
              required={true}
              value={initalValues.first_name}
            />
            <FormInput
              id="last_name"
              error_message={getZodErrorMessage<initalValues>(errors, "last_name")}
              label="Last Name"
              name="last_name"
              disabled={isLoading}
              onBlur={handleBlur}
              onChange={handleChange}
              required={true}
              value={initalValues.last_name}
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <FormInput
              id="email"
              error_message={getZodErrorMessage<initalValues>(errors, "email")}
              label="Email"
              name="email"
              disabled={isLoading}
              onBlur={handleBlur}
              onChange={handleChange}
              required={true}
              value={initalValues.email}
            />
            <FormInput
              error_message={getZodErrorMessage<initalValues>(errors, "phone_number")}
              label="Telephone"
              name="phone_number"
              id="phone_number"
              disabled={isLoading}
              onBlur={handleBlur}
              onChange={handleChange}
              required={true}
              value={initalValues.phone_number}
            />
          </div>

          <FormSelect options={[
            { value: '', text: 'Select a reason' },
            { value: 'general-inquiry', text: 'General Inquiry' },
            { value: 'product-support', text: 'Product Support' },
            { value: 'partnership-opportunity', text: 'Partnership Opportunity' },
            { value: 'feedback-suggestion', text: 'Feedback/Suggestion' },
            { value: 'technical-issue', text: 'Technical Issue' }
          ]}
            error_message={getZodErrorMessage<initalValues>(errors, "contact_reason")}
            label="Why are you getting in touch?"
            name="contact_reason"
            id="contact_reason"
            disabled={isLoading}
            onBlur={handleBlur} value={initalValues.contact_reason}
            onChange={handleChange}
            required={true}
          />

          <FormTextArea
            error_message={getZodErrorMessage<initalValues>(errors, "message")}
            label="Tell Us About Your Childcare Needs" value={initalValues.message}
            name="message"
            id="message"
            disabled={isLoading}
            onBlur={handleBlur}
            onChange={handleChange}
            required={true}
          />

          <div className="flex flex-col gap-0">
            <FormCheckBox
              checked={initalValues.privacy}
              error_message={getZodErrorMessage<initalValues>(errors, "privacy")}
              id="privacy"
              name="privacy"
              disabled={isLoading}
              onChange={handleChange} label=<p>Click here to confirm you have read and agree with our <a className="underline" href="#">Privacy Policy.</a></p>
              required={true}
            />
            <FormCheckBox
              id="add_to_newsletter"
              disabled={isLoading}
              label="Sign-up for our newsletter to be the first to hear about our workshops and latest insights"
              name="add_to_newsletter"
            />
          </div>

          <div className="w-fit">
            <Button elm="button" {...{
              label: "Send Message",
              disabled: isLoading,
              theme: "royal-purple",
              url: { title: "Send Message", }
            }}
              theme="royal-purple"
              className="hover:cursor-pointer desktop-button font-bold font-basis-grotesque-bold py-[14px] px-[28px]" />
          </div>
        </form>
      )}
    </Formik>
  </div >
}
