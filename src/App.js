import {useState, useEffect} from 'react';
import{ Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from "./pages/Home";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import {v4 as uuidv4} from 'uuid';
import {useLocalStorage} from './hooks/useLocalStorage';


function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = 'technos';
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    setTechnos(storedTechnos);
  }, [])

  useEffect(() => {
    setStoredTechnos(technos);
  }, [technos]);

  const handleAddTechno = (techno) => {
    console.log('handleAddTechno', techno);
    setTechnos([...technos, {...techno, technoid:uuidv4()}])
  }

  const handleDeleteTechno = (id) => {
    setTechnos(technos.filter((tech) => tech.technoid !== id))
  }
  return (
    <>
    <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
        <Route path="/list" element={<TechnoList technos={technos} handleDeleteTechno={handleDeleteTechno} />} />
        <Route path="*" element={<Home />} />
      </Routes>  
    </>
  );
}

export default App;
