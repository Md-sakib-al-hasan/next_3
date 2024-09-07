export default function DashboardLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <div>
        <h1>kkk</h1>
        <section className="text-red-500">
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
        {
            console.log("start now")
        }
        {console.log(children)}
        {children}
      </section>
      </div>
    )
  }