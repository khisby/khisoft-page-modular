"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Toast } from "@/components/toast";

const Delete = ({ serial }: { serial: string }) => {
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();

  function handleModal() {
    setShowModal(!showModal);
  }

  function handleSubmit() {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/page/${serial}`, {
      method: "DELETE",
    })
      .then((res: Response) => {
        if (res.ok) {
          setShowModal(!showModal);
          Toast("success", "✅ Success delete page");
          router.refresh();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log("Error: " + err);
        Toast("error", "🔥 Failed delete page");
      });
  }

  return (
    <div>
      <button className="btn btn-error btn-sm" onClick={handleModal}>
        DELETE
      </button>

      <input
        type="checkbox"
        className="modal-toggle"
        checked={showModal}
        onChange={handleModal}
      />
      <dialog className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Remove Item</h3>
          <p className="py-4">Please make sure you want to remove this item.</p>
          <div className="modal-action">
            <button className="btn btn-primary" onClick={handleModal}>
              Close
            </button>
            <button className="btn btn-error" onClick={handleSubmit}>
              Remove
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Delete;
