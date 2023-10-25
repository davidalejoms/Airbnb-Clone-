"use client"
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"
import { BiDollar } from "react-icons/bi"

interface InputProps {
  id: string
  label: string
  type?: string
  disabled?: boolean
  formatPrice?: boolean
  required?: boolean
  register: UseFormRegister<FieldValues>
  errors: FieldErrors
}

const Input: React.FC<InputProps> = ({ id, label, type = "text", disabled, formatPrice, required, register, errors }) => {
  return (
    <>
      <div className="w-full relative">
        {formatPrice && <BiDollar />}
        {/* 
        explicación del peer:
        https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state
        https://tailwindcss.com/docs/hover-focus-and-other-states#differentiating-peers
        */}
        <input
          id={id}
          disabled={disabled}
          {...register(id, { required })}
          placeholder=" "
          className={`
          peer/input
          text-md
          w-full
          p-4
          pt-6
          font-light
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatPrice ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-rose-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
          `}
        />
        <label
          className={`
        absolute
        text-md
        duration-150
        transform
        -translate-y-3
        top-5
        z-10
        origin-[0]
        ${formatPrice ? "left-9" : "left-4"}
        peer-placeholder-shown/input:scale-100
        peer-placeholder-shown/input:translate-y-0
        peer-focus/input:scale-75
        peer-focus/input:-translate-y-4
        ${errors[id] ? "text-rose-500" : "text-zinc-400"}
        `}
        >
          {label}
        </label>
      </div>
    </>
  )
}

export default Input
