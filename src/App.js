import {Route, Routes } from 'react-router-dom'
import {Layout} from './Components/Layout';
import {NewOrder} from './Views/NewOrder'
import {Workorders} from './Views/Workorders'
import {Calendar} from './Views/Calendar'
import {Options} from './Views/Options'
import { FormOptions } from './Components/FormOptions';
import { SpinLoader } from './Components/SpinLoader';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styleGeneral.css'
import { NotFound } from './Views/404NotFound';

export const App = () => {

  return (
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={<NewOrder />} />
        <Route path="/Workorders" element={<Workorders />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/Options" element={<Options />}>
          <Route index element={<FormOptions />} />
          <Route path="user" element={<FormOptions/>}/>
          <Route path="email" element={<SpinLoader/>}/>
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>      
  );
}