import { readContacts } from "@/lib/contact-store";

export default async function AdminPage() {
  const contacts = await readContacts();

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Leads</p>
        <h1 className="mt-2 text-4xl font-black tracking-tight">Lead Dashboard</h1>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl">
        <table className="min-w-full text-left">
          <thead className="bg-slate-900 text-sm uppercase tracking-[0.2em] text-slate-400">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email</th>
              <th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Message</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-10 text-center text-slate-500">No leads yet.</td>
              </tr>
            ) : (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-t border-slate-800">
                  <td className="px-6 py-4 font-medium">{contact.name}</td>
                  <td className="px-6 py-4">{contact.email}</td>
                  <td className="px-6 py-4">{contact.subject}</td>
                  <td className="max-w-md px-6 py-4 text-slate-300">
                    {contact.message.length > 120 ? `${contact.message.slice(0, 120)}...` : contact.message}
                  </td>
                  <td className="px-6 py-4 text-slate-400">{new Date(contact.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
