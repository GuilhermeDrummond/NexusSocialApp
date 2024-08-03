import React, { useState } from 'react'; // Certifique-se de importar useState do React
import styles from './login.module.css'; // Corrija o caminho se necessário

export default function LoginPage() {
  // Estado para controlar a exibição dos campos adicionais
  const [showAdditionalFields, setShowAdditionalFields] = useState(false);

  // Função chamada ao clicar no link
  const handleCreateAccountClick = (event) => {
    event.preventDefault(); // Previne o comportamento padrão do link
    setShowAdditionalFields(true); // Atualiza o estado para mostrar os campos adicionais
  };

  return (
    <main className={styles.loginPage}>
      <div className={styles.leftSide}>
        <img className={styles.capaLogin} src="src/components/Default_A_modern_simple_yet_striking_logo_featuring_the_styliz_1-removebg-preview.png" alt="" />
        <h3>Rede Social ao vivo!</h3>
      </div>
      <div className={styles.loginSide}>
        <form action="" className={styles.login}>
          <img className={styles.logo} src="src/components/logohome.png" alt="" />
          <div className={styles.inputs}>
            <label htmlFor="username">User:</label>
            <input type="text" id="username" name="username" className={styles.input} placeholder="Username" />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" className={styles.input} placeholder="Enter your password" />
            {/* Renderização condicional dos campos adicionais */}
            {showAdditionalFields && (
              <>
                <label htmlFor="confirmPassword">Confirmar Senha:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" className={styles.input} placeholder="Confirm your password" />
                <label htmlFor="username">E-mail:</label>
                <input type="email" id="username" name="email" className={styles.input} placeholder="E-mail" />
                <label htmlFor="birthdate">Data de Nascimento:</label>
                <input type="date" id="birthdate" name="birthdate" className={styles.input} />
              </>
            )}
            <a href="#" onClick={handleCreateAccountClick}>Crie sua conta</a>
          </div>
          <button className={styles.entrar}>Entrar</button>
        </form>
      </div>
    </main>
  );
}
