import Swal from "sweetalert2";

// Success Toast
export const successToast = (title = "Success") => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title,
    showConfirmButton: false,
    timer: 1500,
  });
};

// Error Toast
export const errorToast = (title = "Error", text = "Something went wrong") => {
  Swal.fire({
    icon: "error",
    title,
    text,
    confirmButtonText: "Try Again",
  });
};

// Confirm Dialog (NEW)
export const confirmDialog = async (
  title = "Are you sure?",
  text = "You won't be able to revert this!",
) => {
  const result = await Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });

  return result.isConfirmed;
};
