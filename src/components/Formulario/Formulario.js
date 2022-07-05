import { useContext } from "react"
import { useForm } from 'react-hook-form'
import UserContext from "../../context/UserContext"
import { useNotification } from "../../notification/Notification"
import './estilosForm.css'

const Formulario = () => {
  const { register, handleSubmit } = useForm()
  const { user, setUserLogin } = useContext(UserContext)
  const { setNotification } = useNotification()

  const customSubmit = (data) => {
    if (data.name != '' && data.email != '' && data.phone != '') {

      setUserLogin({
        name: data.name,
        email: data.email,
        phone: data.phone
      })
      setNotification('success', 'login exitoso')
    }else{
      setNotification('error', 'debe completar todos los campos')
    }

  }
  return (
    <>
      <h2>Formulario de Contactos</h2>
      <form onSubmit={handleSubmit(customSubmit)} className='form-react'>
        <div className='form-control'>
          <label>Nombre</label>
          <input type="text" {...register('name')} />
        </div>
        <div className='form-control'>
          <label>email</label>
          <input type="email" {...register('email')} />
        </div>
        <div className='form-control'>
          <label>telefono</label>
          <input type="number" {...register('phone')} />
        </div>
        <button className='btnOrden' type='submit'>enviar datos</button>
      </form>
    </>
  )
}

export default Formulario