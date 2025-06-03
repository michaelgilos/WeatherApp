import './style.css'

const WeatherForm = ( {city, setCity, handleSubmit }) => {
  return (
    <>
    <div className='container'>
        <form onSubmit={handleSubmit}>
            <input type='text' placeholder='Input City...' alt='Input City' value={city } onChange={(e) => setCity(e.target.value)}></input>
            <button type='submit'>🔍</button>
        </form>
    </div>
    </>
  )
}

export default WeatherForm