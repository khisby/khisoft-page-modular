import { toast as originalToast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";

export function Toast(
  type: "success" | "info" | "error" | "warning",
  message: string
) {
  originalToast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    theme: "light",
  });
}

export function ToastComponent() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </>
  );
}
