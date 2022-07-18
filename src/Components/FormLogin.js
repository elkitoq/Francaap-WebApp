import { useState } from 'react';
import { Form, FormGroup } from 'reactstrap'

export const FormLogin = () => {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUserInputChange = (e)=>{ 
        setUser(e.target.value);
    }

    const handlePassInputChange = (e)=>{ 
        setPassword(e.target.value);
        console.log(password)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(user, password);
        setUser('');
        setPassword('');
    }

  return (
    <Form onSubmit={handleSubmit}>
        <FormGroup>
            <label htmlFor="user">Usuario</label>
            <input value={user} onChange={handleUserInputChange} type="text" className="form-control" id="user" placeholder="Usuario" />
        </FormGroup>
        <FormGroup>
            <label htmlFor="pass">Contraseña</label>
            <input value={password} onChange={handlePassInputChange} type="password" className="form-control" id="pass" placeholder="Contraseña" />
        </FormGroup>
        <FormGroup>
            <a href='register'>Registrate</a>
        </FormGroup>
        <FormGroup>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Ingresar</button>
        </FormGroup>
    </Form>
  )
}

