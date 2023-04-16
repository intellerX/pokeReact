import CustomButton from '../CustomButton';
import './index.css';

const FormInformation = ({
  formData,
  handleInputChange,
  handleSliderChange,
  handleSubmit,
  handleCancel,
}) => {

  return (
    <section className="form__container">
      <h3>Nuevo Pokemon</h3>
      <form onSubmit={handleSubmit} aria-label="Pokemon Form" >
        <div className='form__content'>
          <div className='form__name'>
            <label htmlFor="name">Nombre:</label>
            <input
              aria-label="Name"
              value={formData?.name}
              name="name"
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className='form__attack'>
            <label htmlFor="price">Ataque:</label>
            0<input
              aria-label="Attack"
              value={formData?.attack}
              name="attack"
              onChange={e => handleSliderChange("attack", e.target.value)}
              type="range"
              min="0"
              max="100"
              step="1"
            />100
          </div>
          <div className='form__image'>
            <label htmlFor="image">Imagen:</label>
            <input
              aria-label="image"
              value={formData?.image}
              name="image"
              onChange={handleInputChange}
              type="text"
            />
          </div>
          <div className='form__defense'>
            <label htmlFor="defense">Defensa:</label>
            0<input
              aria-label="Defense"
              value={formData?.defense}
              name="defense"
              onChange={e => handleSliderChange("defense", e.target.value)}
              type="range"
              min="0"
              max="100"
              step="1"
            />100
          </div>
          <div className='form__buttons'>
            <CustomButton onClick={handleCancel}>Cancelar</CustomButton>
            <CustomButton type="submit">Guardar</CustomButton>
          </div>
        </div>
      </form>
    </section>
  )
}

export default FormInformation
