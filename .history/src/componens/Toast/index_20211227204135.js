import { toast } from "react-toastify";

// Import toastify css file
import "react-toastify/dist/ReactToastify.css";

// toast-configuration method,
// it is compulsory method.
toast.configure();

export const toastNoti = {
  info(message) {
    Toastify({
      text: message,
      duration: 5000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#29b6f6",
      },
    }).showToast();
  },
  success(message) {
    Toastify({
      text: message,
      duration: 5000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#66bb6a",
      },
    }).showToast();
  },
  error(message) {
    Toastify({
      text: message,
      duration: 5000,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "right", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "#e57373",
      },
    }).showToast();
  },
};
