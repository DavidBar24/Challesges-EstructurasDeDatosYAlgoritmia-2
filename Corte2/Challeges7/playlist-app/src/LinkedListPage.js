import React, { useState } from "react";
import { LinkedList } from "./LinkedList";

const songList = new LinkedList();
songList.append("Island In The Sun - Weezer");
songList.append("Iron Man - Black Sabbath");
songList.append("Virtual Insanity - Jamiroquai");

function LinkedListPage() {
  const [currentSong, setCurrentSong] = useState(songList.getHead());

  const nextSong = () => {
    if (currentSong?.next) {
      setCurrentSong(currentSong.next);
    }
  };

  const previousSong = () => {
    if (currentSong?.prev) {
      setCurrentSong(currentSong.prev);
    }
  };

  return (
    <div>
      <h2>Lista Enlazada - Reproducción</h2>
      <p>Reproduciendo: {currentSong ? currentSong.value : "Ninguna"}</p>
      <button onClick={previousSong}>Canción Anterior</button>
      <button onClick={nextSong}>Siguiente Canción</button>
    </div>
  );
}

export default LinkedListPage;