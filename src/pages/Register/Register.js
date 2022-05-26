//CSS
import styles from './Register.module.css';

import { useState, useEffect } from 'react';

const Register = () => {
    return (
        <div>
            <h1>Cadastre-se</h1>
            <p>Crie seu usuario e compartilhe suas histórias</p>
            <form>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="displayName" required placeholder='Seu nome' />
                </label>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" required placeholder='Seu email' />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password" name="password" required placeholder='Sua senha' />
                </label>
                <label>
                    <span>Confirmar senha:</span>
                    <input type="password" name="confirmPassword" required placeholder='Confirme a sua senha' />
                </label>
                <button className='btn'>Cadastrar</button>
            </form>
        </div>
    )
}

export default Register