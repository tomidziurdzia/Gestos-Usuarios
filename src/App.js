import {useState} from 'react'
import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'
import Button from './components/Button'

function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({
    name: '', 
    lastname: '', 
    email:''
  })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset()
  }

  return (
    <div style={{marginTop:'15%'}}>
      <Container>
        <Card >
          <div style={{padding:20}}>
            <form onSubmit={submit}>
              <Input 
                label='Nombre' 
                name='name' 
                value={formulario.name} 
                onChange={handleChange}
                placeholder='Nombre'
              />
              <Input 
                label='Apellido' 
                name='lastname' 
                value={formulario.lastname} 
                onChange={handleChange}
                placeholder='Apellido'
              />
              <Input 
                label='Correo' 
                name='email' 
                value={formulario.email} 
                onChange={handleChange}
                placeholder='Correo' 
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul style={{listStyle:'none', padding:10}}>
            {usuarios.map(usuario =>
              <li style={{margin:'5px 0'}} key={usuario.email}>{`${usuario.name} ${usuario.lastname} : ${usuario.email}`}</li>
            )}
          </ul>
        </Card>
      </Container>
    </div>
  )
}

export default App;
