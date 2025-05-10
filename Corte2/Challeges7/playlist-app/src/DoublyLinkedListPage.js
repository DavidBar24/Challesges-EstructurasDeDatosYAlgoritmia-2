import React, { useState } from "react";
import { DoublyLinkedList } from "./DoublyLinkedList";

const historyList = new DoublyLinkedList();
historyList.append("Página 1");
historyList.append("Página 2");
historyList.append("Página 3");

function DoublyLinkedListPage() {
  const [currentPage, setCurrentPage] = useState(historyList.getHead());

  const nextPage = () => {
    if (currentPage?.next) {
      setCurrentPage(currentPage.next);
    }
  };

  const prevPage = () => {
    if (currentPage?.prev) {
      setCurrentPage(currentPage.prev);
    }
  };

  return (
    <div>
      <h2>Lista Doblemente Enlazada - Historial</h2>
      <p>Página actual: {currentPage ? currentPage.value : "Ninguna"}</p>
      <button onClick={prevPage}>Página Anterior</button>
      <button onClick={nextPage}>Página Siguiente</button>
    </div>
  );
}

export default DoublyLinkedListPage;