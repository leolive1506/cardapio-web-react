import './App.css'
import { Card } from './components/Card';
import { useFoodData } from './hooks/useFood';

function App() {
  const { data } = useFoodData();

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(({ price, title, image }) => (
          <Card
            price={price}
            title={title}
            image={image}
          />
        ))}
      </div>
    </div>
  )
}

export default App
