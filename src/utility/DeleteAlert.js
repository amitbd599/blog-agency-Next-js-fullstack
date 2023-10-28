import Swal from "sweetalert2";
import { delete_blog__Request__API } from "./api";

export const DeleteAlertBlogPost = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return delete_blog__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
export const DeleteAlertProject = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deleteProject__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
export const DeleteAlertComment = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deleteComment__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
export const DeleteAlertMessage = (id) => {
  return Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      return deleteMessage__Request__API(id).then((result) => {
        return result;
      });
    }
  });
};
