import React from 'react';

//--- Компонент авторизации пользователя ---
function Login({ onLogin }) {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  //---ОБРАБОТЧИКИ---
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  
  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password){
      return;
    }
    onLogin(password, email);
  }

  //---ЭФФЕКТЫ---
  // React.useEffect(() => {
  //   setEmail('');
  //   setPassword('');
  // }, [onLogin]); 
    
  
  //---РАЗМЕТКА JSX---
  return (
    <section className='entrance page__center' >
      <div className='entrance__container'>
        <h3 className='entrance__title'>Вход</h3>
        <form className='entrance__form' name='entrance-form-login' noValidate onSubmit={handleSubmit}>
          <input
            value={email}
            onChange={handleChangeEmail}
            id="loggin-input"
            type="email"
            placeholder="Email"
            className="entrance__input"
            name="loggin"
            minLength="2"
            maxLength="40"
            required
          />

          <input
            value={password}
            onChange={handleChangePassword}
            id="password-input"
            type="password"
            placeholder="Пароль"
            className="entrance__input"
            name="password"
            minLength="4"
            maxLength="10"
            required
          />

          <button className='entrance__submit-btn' type="submit">Войти</button>
        </form>
      </div>
    </section>
  )

}
      
export default Login;