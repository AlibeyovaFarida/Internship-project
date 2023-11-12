import Home from './pages/Home'
import {useState} from 'react'
import React, { useRef } from "react";
function App() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isOpenBar, setIsOpenBar] = useState(false)
  return (
    <div>
      <Home
        isShowMenu={isShowMenu}
        setIsShowMenu={setIsShowMenu}
        isOpenBar={isOpenBar}
        setIsOpenBar={setIsOpenBar}
      />
    </div>
  );
}

export default App
