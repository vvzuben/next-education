'use client';

import Media from "@components/Media";
import { ACF } from "@app/_wordpress/Types";
import { ModalStore, useModalStore } from "@stores/ModalStore";
import { useClickAway } from "react-use";
import { useRef } from "react";

function ModalContainer({ children }: { children: JSX.Element }): JSX.Element {
  const modalStore: ModalStore = useModalStore()

  const ref = useRef(null);

  useClickAway(ref, () => {
    // modalStore.setIsOpen(false)
  });

  return <div ref={ref} className="my-[50px] bg-white rounded-lg shadow-modal relative max-w-[90%]">
    <button
      onClick={() => modalStore.setIsOpen(false)}
      className="absolute
      bg-royal-purple
      rounded-full
      flex
      justify-center
      items-center
      text-white
      -translate-y-1/2
      translate-x-1/2
      right-0 
      z-50
      p-1
      h-8
      md:w-16
      md:h-16"
    >
      <svg className="hover:opacity-80" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
    <div>
      {children}
    </div>
  </div>
}

export function SuccessTemplate(props: ACF.Group.ContactForm.contact_form_success_modal) {
  return <div className="p-5 flex justify-center items-center w-full h-full">
    <div className="flex flex-col gap-6 justify-center items-center max-w-[400px]">
      {props.image &&
        <Media className="w-full h-auto" {...props.image} alt="" width={292} height={138} />
      }
      <div className="flex flex-col gap-2.5 justify-center items-center">
        {props.title &&
          <h4 className="mobile-h4 lg:desktop-h4 text-center">
            {props.title}
          </h4>
        }
        {props.content &&
          <p className="mobile-p lg:desktop-p-regular text-center">
            {props.content}
          </p>
        }
      </div>
    </div>
  </div>
}

function Mask({ children }: { children: JSX.Element }): JSX.Element {
  return <div className="w-full h-full fixed z-[999999] bg-dark-plum top-0 bg-opacity-70 grid grid-cols-1 justify-items-center items-center">
    {children}
  </div>
}

export default function Modal(): JSX.Element {
  const modal: ModalStore = useModalStore()
  return <>
    {modal.isOpen && modal.content &&
      <Mask>
        <ModalContainer>
          {modal.content}
        </ModalContainer>
      </Mask>}
  </>
}
