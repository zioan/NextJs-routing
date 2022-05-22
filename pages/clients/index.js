import Link from 'next/link';

function ClientsPage() {
  const clients = [
    { id: 1, name: 'Ioan' },
    { id: 2, name: 'Tom' },
    { id: 3, name: 'John' },
  ];

  return (
    <>
      <h2>The Clients Page</h2>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link href={`/clients/${client.name}`}>{client.name}</Link>
              {/* <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link> */}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ClientsPage;
