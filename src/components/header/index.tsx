import Link from "next/link";

export function Header() {
  return (
    <div className="navbar bg-base-100 pt-5 px-10 ">
      <span className="normal-case text-xl">Khisoft Page Modular</span>
      <Link
        className="btn btn-ghost normal-case text-xl ms-5"
        href="/admin/page"
      >
        Manage Page
      </Link>
    </div>
  );
}
