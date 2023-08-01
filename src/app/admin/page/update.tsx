"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Page } from "@prisma/client";
import { Toast } from "@/components/toast";

const Update = ({ item }: { item: Page }) => {
  const [showModal, setShowModal] = React.useState(false);
  const [path, setPath] = React.useState(item.path);
  const [properties, setProperties] = React.useState(item.properties);
  const router = useRouter();

  function handleModal() {
    setShowModal(!showModal);
    setPath(item.path);
    setProperties(item.properties);
  }

  function handleSubmit() {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/page/${item.serial}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        path: path,
        properties: properties,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setShowModal(!showModal);
          setPath(item.path);
          setProperties(item.properties);
          Toast("success", "✅ Success update page");
          router.refresh();
        } else {
          throw new Error(res.statusText);
        }
      })
      .catch((err) => {
        console.log("Error: " + err);
        Toast("error", "🔥 Failed update page");
      });
  }

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        Update
      </button>

      <input
        type="checkbox"
        className="modal-toggle"
        checked={showModal}
        onChange={handleModal}
      />
      <dialog className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Update</h3>
          <div className="py-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Path</span>
              </label>
              <input
                type="text"
                placeholder="Type Path URL"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Properties</span>
              </label>
              <textarea
                placeholder="Type Properties"
                value={JSON.stringify(properties, null, 2)}
                onChange={(e) => setProperties(JSON.parse(e.target.value))}
                className="textarea textarea-bordered w-full"
                rows={5}
              />
            </div>
          </div>
          <div className="modal-action">
            <button className="btn btn-error" onClick={handleModal}>
              Close
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default Update;
