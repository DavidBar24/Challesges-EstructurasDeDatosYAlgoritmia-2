import { useState } from "react";
import CashierQueue from "./CashierQueue";
import PersonForm from "./PersonForm";
import QueueList from "./QueueList";

const cashierQueue = new CashierQueue();

function QueuePage() {
  const [queue, setQueue] = useState(cashierQueue.getQueue());

  const addPerson = (person) => {
    cashierQueue.enqueue(person);
    setQueue(cashierQueue.getQueue());
  };

  const removePerson = () => {
    cashierQueue.dequeue();
    setQueue(cashierQueue.getQueue());
  };

  return (
    <div>
      <h1>Caja Automatica</h1>
      <PersonForm onAdd={addPerson} />
      <QueueList queue={queue} onRemove={removePerson} />
    </div>
  );
}

export default QueuePage;