"use client"
import axios from "axios"
import { AiFillGithub } from "react-icons/ai"
import { FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import useRegisterModal from "@/hooks/useRegisterModal"
import Modal from "./Modal"
import Heading from "@/components/Heading"
import Input from "../inputs/Input"
import { toast } from "react-hot-toast"
import Button from "../Button"
const RegisterModal = () => {
  const RegisterModal = useRegisterModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true)
    try {
      const response = await axios.post("/api/register", data)
      RegisterModal.onClose()
    } catch (error) {
      toast.error("Algo salió Terriblemente mal!")
      // toast.success("Algo salió bien!")
    } finally {
      setIsLoading(false)
    }
  }

  const bodyContent = (
    <div
      className="
  flex
  flex-col 
  gap-4"
    >
      <Heading
        title="Welcome to Airbnb"
        subtitle=" Create an Account!"
        center={false}
      />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        type="password"
        label="Password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className=" flex flex-col gap-4 mt-3">
      <hr />
      <Button
        outline
        label="Continue with GitHub"
        icon={FcGoogle}
        onClick={() => {}}
      />
      <Button
        outline
        label="Continue with Google"
        icon={AiFillGithub}
        onClick={() => {}}
      />
      <div
        className="
      text-neutral-500
      text-sm
      text-center
      mt-4
      font-light
      "
      >
        <div
          className="
        flex flex-row justify-center items-center gap-2 "
        >
          <div>Already have an account?</div>
          <div
            onClick={RegisterModal.onClose}
            className="
          text-neutral-800
          cursor-pointer
          hover:underline
          "
          >
            Log in
          </div>
        </div>
      </div>
    </div>
  )
  return (
    <>
      <Modal
        disabled={isLoading}
        isOpen={RegisterModal.isOpen}
        title="Registrate"
        actionLabel="Continuar"
        onClose={RegisterModal.onClose}
        onSubmit={handleSubmit(onSubmit)}
        body={bodyContent}
        footer={footerContent}
      />

      {/* 
      https://youtu.be/c_-b_isI4vg?t=5451 jue 19 de octubre 2023
      */}
    </>
  )
}

export default RegisterModal
