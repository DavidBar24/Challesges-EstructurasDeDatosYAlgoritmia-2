function QueueList({ queue, onRemove }) {
    return (
      <div>
        <h2>La Cola</h2>
        <ul>
          {queue.map((person, index) => (
            <li key={index}>
              <strong>{person.name}</strong> - Retira: ${person.amount}
            </li>
          ))}
        </ul>
        <button onClick={onRemove} disabled={queue.length === 0}>Siguente persona</button>
      </div>
    );
  }
  
  export default QueueList;  