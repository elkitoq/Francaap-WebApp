import {Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Layout} from './Components/Layout';
import {NewOrder} from './Views/NewOrder'
import {Workorders} from './Views/Workorders'
import {Calendar} from './Views/Calendar'
import {Options} from './Views/Options'
import './assets/css/styleGeneral.css'

export const App = () => {

  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<NewOrder />} />
        <Route path="/Workorders" element={<Workorders />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Options" element={<Options />} />
        <Route path="*" element={<h1>404 not found</h1>} />
      </Route>
    </Routes>      
  );
}