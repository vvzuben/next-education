export type Props = {
  label: string | React.ReactNode
  id: string
  required?: boolean
  error_message?: string
  checked?: boolean
  onChange?: (event: any) => void
  onBlur?: (event: any) => void
  value?: string | number
  name?: string
  disabled?: boolean
}

function ErrorMessage(props: { error_message?: string }) {
  return <div className="h-4">
    {props.error_message &&
      <p className="text-red text-sm">{props.error_message}</p>
    }
  </div>
}

function Required() {
  return <span className="text-red font-bold">*</span>
}

export function FormInput(props: Props) {
  return <div className="flex flex-col gap-1.5">
    <label htmlFor={props.id} className="input-label">{props.label} {props.required && <span>*</span>}</label>
    <input id={props.id} disabled={props.disabled} name={props.name} defaultValue={props.value} onBlur={props.onBlur} onChange={props.onChange} className={`py-5 px-2.5 rounded-md border-light-grey border h-12 ${(props.error_message && "border-red")}`} type="text" />
    <ErrorMessage error_message={props.error_message} />
  </div>
}

export function FormSelect(props: Props & { options: { value: string, text: string }[] }) {
  return <div className="flex flex-col gap-1.5">
    <label htmlFor={props.id} className="input-label">{props.label} {props.required && <span>*</span>}</label>
    <select id={props.id} disabled={props.disabled} onChange={props.onChange} name={props.name} className={`py-5 px-2.5 bg-white border border-light-grey ${(props.error_message && "border border-red")}`}>
      {props.options?.map((option, idx) => <option key={idx} value={option.value}>{option.text}</option>)}
    </select>
    <ErrorMessage error_message={props.error_message} />
  </div>
}

export function FormTextArea(props: Props) {
  return <div className="flex flex-col gap-1.5">
    <label htmlFor={props.id} className="input-label">{props.label} {props.required && <span>*</span>}</label>
    <textarea id={props.id} name={props.name} disabled={props.disabled} onChange={props.onChange} onBlur={props.onBlur} className={`py-5 px-2.5 rounded-md border-light-grey border h-[120px] drag resize-none ${(props.error_message && "border-red")}`} />
    <ErrorMessage error_message={props.error_message} />
  </div>
}

export function FormCheckBox(props: Props) {
  return <div className="flex flex-col">
    <div className="flex w-full gap-4">
      <input id={props.id} name={props.name} disabled={props.disabled} onChange={props.onChange} className={`hover:cursor-pointer rounded-md inline-block w-6 h-6`} type="checkbox" />
      <label htmlFor={props.id} className={`flex hover:cursor-pointer mobile-p-regular lg:desktop-p-regular ${(props.error_message && "border-red")}`}>
        <span>{props.label}</span>
        {props.required && <Required />}
      </label>
    </div>
    <div className="pl-10">
      <ErrorMessage error_message={props.error_message} />
    </div>
  </div>
}
