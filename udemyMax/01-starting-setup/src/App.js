import Expenses from "./components/Expenses/Expenses";

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
// Stworzyliśmy tablicę z 4 obiektami, możemy ustawić naszym komponentom "ExpenseItem" "parametry", które będą przyjmować dynamicznie. W zależności co wprowadzi np. użytkownik. Używamy do tego "props" (ang. rekwizyt/podpora/właściwość).

function App() {
  return (
    <div>
      <Expenses items={expenses} />
    </div> 
  );
};


export default App;
