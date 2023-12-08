import { useState } from 'react';
import './App.css'
import { Card } from './components/Card';
import { useFoodData } from './hooks/useFood';
import { Modal } from './components/Modal';

function App() {
  const { data } = useFoodData();
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }
  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(({ id, price, title, image }) => (
          <Card
            key={id}
            price={price}
            title={title}
            image={image}
          />
        ))}
      </div>
      {isModalOpen && <Modal closeModal={handleOpenModal} />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
