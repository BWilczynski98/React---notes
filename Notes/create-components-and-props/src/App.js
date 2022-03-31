import { useState } from "react";
import InputText from "./components/InputText";
import UsersList from "./components/UsersList";


function App() {
  const [users, setUserToArray] = useState([]);

  const userArray = (newUser) => {
    setUserToArray((prevUsers) => {
      return [newUser, ...prevUsers]
    });

  };

  return (
    <div>
      <InputText getUser={userArray} />
      <UsersList submitUsers={users} />
    </div>
  );
}

export default App;

// ** HOW WORK

// 1. Dzięki getUser wyciągam dane użytkownika, które zostały wprowadzone w komponencie "InputText". getUser to nazwa mojego propsu, w InputText w funkcji gdzie tworzy się obiekt z wprowadzonymi danymi używam props.getUser("obiektKtóryChcePrzekazac"); Zawsze po props (czy jak tam nazwiemy nasz parametr komponentu, jest nazwa "value"/"propsu", który nadaliśmy w rodzicu przy wywołaniu dziecka.

// 2. Po wyciągnięciu danych z InputText chce je wepchnąć do tablicy "users", dzięki której, będę mógł renderować nowe widoki. W tym celu stworzyłem funkcje "userArray". UserArray jest wywoływany w propsie InputText, więc za każdym razem, kiedy pojawi się nowy obiekt z danymi użytkownika, funkcja zostanie wywołana. Pierwsze co potrzebujemy to stworzyć hooka useState, a następnie destrukturyzujemy go na zmienną i nazwe funkcji. 
  // 2.1 userArray = (newUser) Jest to funkcja, która wywołujemy, newUser to parametr w którym jest przechowywany obiekt z danymi użytkownika
  // 2.2 setUserToArray jest to funkcja z useState wywołana w funkcji userArray. prevUsers to wszystkie elementy, które posiadała tablica "users" przed wywołaniem tej funkcji, które potem operatorem spread rozkładamy na końcu naszej tablicy, a na samym początku wpichamy nową wartość newUser

// 3.