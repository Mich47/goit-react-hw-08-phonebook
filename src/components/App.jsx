import { Contacts } from 'pages/Contacts/Contacts';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="contacts/new" element={<Contacts />} />
          <Route path="contacts/:contactId" element={<Contacts />} />
          <Route path="contacts/:contactId/edit" element={<Contacts />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};
