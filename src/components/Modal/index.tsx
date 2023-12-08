import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMudate"
import { FoodData } from "../../interface/FoodData"
import "./index.css"

interface InputProps {
  label: string,
  value: string | number,
  updateValue(value: any): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return (
    <>
      <label>{ label }</label>
      <input value={value} onChange={e => updateValue(e.target.value)}/>
    </>
  )
}

interface ModalProps {
  closeModal(): void
}

export function Modal({ closeModal }: ModalProps) {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const { mutate, isSuccess } = useFoodDataMutate();

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image
    }

    mutate(foodData)
  }

  useEffect (() => {
    if (!isSuccess) return
    closeModal()
  }, [isSuccess])

  return (
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <Input label="Title" value={title} updateValue={setTitle} />
          <Input label="Price" value={price} updateValue={setPrice} />
          <Input label="Image" value={image} updateValue={setImage} />
        </form>
        <button onClick={submit} className="btn-secondary">Postar</button>
      </div>
    </div>
  )
}
