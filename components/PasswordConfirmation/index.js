import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import styled from 'styled-components';

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
`;

const PasswordConfirmDialog = ({ isOpen, onClose, onConfirm }) => {
  const [password, setPassword] = useState('');

  const handleConfirm = () => {
    onConfirm(password); // Lakukan konfirmasi password
    setPassword(''); // Reset password
  };

  const handleClose = () => {
    onClose(); // Tutup dialog hanya jika tombol "Batal" diklik
  };

  return (
    <Transition show={isOpen} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={handleClose}>
        <Overlay className="fixed inset-0" aria-hidden="true" />
        <div className="flex items-center justify-center min-h-screen px-4">
          <Dialog.Panel className="w-full max-w-md p-6 bg-white rounded-md">
            <Dialog.Title className="text-lg font-medium">Konfirmasi Password</Dialog.Title>
            <div className="mt-4">
              <input
                type="password"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Masukkan Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            <div className="mt-4 flex justify-end">
              <button onClick={handleClose} className="mr-2 px-4 py-2 bg-gray-200 rounded-md">
                Batal
              </button>
              <button onClick={handleConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Konfirmasi
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PasswordConfirmDialog;
