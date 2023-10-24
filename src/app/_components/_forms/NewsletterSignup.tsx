'use client';

import { useRef, useState } from "react";
import { useModalStore } from "@stores/ModalStore";
import { MediaProps } from "@components/Media";
import type NewsletterSignupProps from "@components/_forms/NewsletterSignup";
import { SuccessTemplate } from "@components/ui/Modal"
import { NewsletterSchema } from "@app/schemas";
import { postJson } from "@app/client";

export type NewsletterSignupProps = {
  inputClasses?: string
  formClasses?: string
  buttonClasses?: string
  image?: MediaProps
  sucess_modal: {
    image?: MediaProps,
    title?: string,
    content?: string
  }
}

export default function NewsletterSignup(props: NewsletterSignupProps) {
  const email = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const modalStore = useModalStore()

  const handleSubmit = async (e: any): Promise<void> => {
    e.preventDefault();

    const emailField = email.current
    const validate = NewsletterSchema.safeParse({

      email: emailField?.value,
    });

    setError(false);

    if (validate.success && emailField?.value) {
      setLoading(true);

      await postJson('/api/newsletter-form', validate.data).then(async (response: Response) => {
        emailField.value = ''

        if (response.status != 200) {
          setError(true);
          emailField?.focus()
        } else {
          modalStore.setContent(<SuccessTemplate {...props.sucess_modal} />)
          modalStore.setIsOpen(true)
        }

      });
      setLoading(false);
    } else {
      setError(true);
      emailField!.focus()
    }
  }

  const handleTyping = (): void => setError(false);

  return <form onSubmit={(e: any) => {
    handleSubmit(e)
  }} className={`flex flex-row gap-4 text-base text-dark-plum h-16 items-center justify-around ${props.formClasses}`}>
    <input ref={email}
      disabled={isLoading}
      onChange={() => handleTyping()}
      className={`w-full
        ${error ? 'border-red' : ''}
        focus:outline
        focus:outline-light-purple
        focus:outline-1
        font-basis-grotesque-regular
        text-base
        rounded-xl
        px-5
        py-4
        border
        border-lavender-gray
        ${props.inputClasses}`}
      type="text"
      placeholder="Your Email Address..." />
    <button disabled={isLoading} className={`btn-primary w-[168px] ${props.buttonClasses} text-white font-basis-grotesque-regular bg-royal-purple border border-royal-purple hover:opacity-90`}>
      Sign Up
    </button>
  </form>
}
