import { Link } from "react-router";
import { useState } from "react";
import type { User } from "~/types/User";
import styles from "../components/CustomButton.module.css";

export function Welcome() {
  const [user, setUser] = useState<User>({username: ""});
  const [input, setInput] = useState<string>("");

  const updateDisplayValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(e.currentTarget.value);
  }

  const onSaveUser = (e: React.MouseEvent<HTMLElement>): void => {
    setUser({username: getInputValue()});
  }

  const getInputValue = (): string => {
    return input;
  }

  return (
    <>  
          <h2>Ditt användarnamn är: {user.username}</h2>
          <input style={{ padding: '10px' }} type="text" onChange={updateDisplayValue}/>
          <button className={styles.btn} onClick={onSaveUser}>Spara användarnamn</button>     
          <br />
          <Link to={"/about"}>Navigate to about page</Link>
          </>
      );
}
