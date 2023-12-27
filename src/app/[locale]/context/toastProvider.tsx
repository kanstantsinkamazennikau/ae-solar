"use client";

import { ToastContainer } from "react-toastify";

export default function ToastContainerProvider() {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      draggable={false}
      closeOnClick
      pauseOnHover
      theme="dark"
    />
  );
}
