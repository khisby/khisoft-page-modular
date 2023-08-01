import Add from "@/app/admin/page/add";
import Delete from "@/app/admin/page/delete";
import Update from "@/app/admin/page/update";
import { Page } from "@prisma/client";
import { ToastComponent } from "@/components/toast";

const getData = async () => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/api/page`, {
    cache: "no-store",
  }).then((res) => res.json());
  return data;
};

const Page = async () => {
  const data = await getData();
  return (
    <div>
      <ToastComponent />

      <div className="py-2">
        <Add />
      </div>
      <table className="table w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>Serial</th>
            <th>Path</th>
            <th>Properties</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item: Page, index: number) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.serial}</td>
                <td>{item.path}</td>
                <td>
                  <pre>{JSON.stringify(item.properties, null, 2)}</pre>
                </td>
                <td className="flex justify-center space-x-1">
                  <Update item={item} />
                  <Delete serial={item.serial} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Page;
