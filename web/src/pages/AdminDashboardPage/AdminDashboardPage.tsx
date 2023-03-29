import { MetaTags } from '@redwoodjs/web'

const AdminDashboardPage = () => {
  return (
    <>
      <MetaTags title="AdminDashboard" description="AdminDashboard page" />

      <div className="flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 py-64 text-gray-400">
        Content (max width 1920px)
      </div>
    </>
  )
}

export default AdminDashboardPage
