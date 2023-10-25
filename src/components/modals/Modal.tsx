"use client"
import React, { useCallback, useEffect, useState } from "react"
import { IoMdClose } from "react-icons/io"
import Button from "../Button"

interface ModalProps {
  isOpen?: boolean
  onClose: () => void
  onSubmit: () => void
  title?: string
  body?: React.ReactElement
  footer?: React.ReactElement
  actionLabel: string
  disabled?: boolean
  secondaryAction?: () => void
  secondaryActionlabel?: string
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryActionlabel,
}) => {
  const [showModal, setShowModal] = useState(isOpen) // <- hay que revisar si se inicializa en falso que pasa...

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen])

  const handleClose = useCallback(async () => {
    if (disabled) return
    setShowModal(false)
    await new Promise((resolve) => setTimeout(resolve, 300))
    onClose()
  }, [disabled, onClose])

  const handleSubmit = useCallback(async () => {
    if (disabled) return
    onSubmit()
  }, [disabled, onSubmit])

  const handleSecondaryAction = useCallback(async () => {
    if (disabled || !secondaryAction) return
    secondaryAction()
  }, [disabled, secondaryAction])

  if (!isOpen) return null

  return (
    <>
      <div
        /* https://youtu.be/8mv1HJgh6-o?si=pzlywRaM_Q1QPEdM&t=97 for inset shorthand for top etc..  */
        className="
        fixed
        inset-0 
        z-50
        overflow-x-hidden
        oveyflow-y-auto
        outline-none
        focus:outline-none
        bg-neutral-800/70
        flex
        flex-col
        items-center
        justify-center
        "
      >
        <div
          className="
        relative
        my-6
        w-full
        md:w-2/3
        lg:w-1/2
        xl:w-2/5
        mx-auto
        h-full
        lg:h-auto
        "
        >
          {/* Content wrapper */}
          <div
            className={`
            duration-300
            h-full
            ${showModal ? "translate-y-0" : "translate-y-full"}
            ${showModal ? "opacity-100" : "opacity-0"}
          
            `}
          >
            {/* modal body */}
            <div
              className="
            w-full
            h-full
            md:h-auto
            xl:h-full
            border-0
            rounded-lg
            shadow-lg
            relative
            flex
            flex-col
            outline-none
            focus:outline-none
            bg-white
            "
            >
              {/* Header */}
              <div
                className="
                relative
                p-6
                flex
                items-center
                justify-center
                rounded-t-lg
                rounded-b-none
                border-b
              /bg-neutral-100
              "
              >
                <button
                  className="
                absolute
                p-1
                hover:opacity-70
                left-9
                "
                >
                  <IoMdClose
                    onClick={handleClose}
                    className="text-xl"
                  />
                </button>
                <div
                  className="
text-lg font-semibold
"
                >
                  {title}
                </div>
              </div>
              {/* Body */}
              <div
                className="
              relative
              p-6
              aqui experimentar con flex-grow y
              flex-auto
              "
              >
                {body}
              </div>
              {/* Footer */}
              <div
                className="
                flex
                flex-col
                gap-2
                p-6
                border-t
                "
              >
                <div
                  className="
flex
items-center
gap-4
w-full
"
                >
                  {secondaryAction && secondaryActionlabel && (
                    <Button
                      outline
                      disabled={disabled}
                      label={secondaryActionlabel}
                      onClick={handleSecondaryAction}
                      // small
                      // icon={IoMdClose}
                    />
                  )}
                  <Button
                    disabled={disabled}
                    onClick={handleSubmit}
                    label="Guardar"
                    // outline
                    // small
                    // icon={IoMdClose}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
