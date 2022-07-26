import SideNav from '../side-nav/SideNav'

export default function AdminLayout({ children }: { children: JSX.Element }) {
  return (
    <main className="flex max-h-screen min-h-screen">
      <div className="w-2/12 min-w-260 bg-white  p-5 drop-shadow-md">
        <SideNav />
      </div>
      <div className="flex-1 bg-slate-50 p-12">{children}</div>
    </main>
  )
}