// http://localhost:3000/clients/ioan
import { useRouter } from 'next/router';

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query); // {id: 'ioan'}

  function loadProjectHandler() {
    //load data ....
    router.push('/clients/ioan/project1');
    // router.push({
    //   pathname: '/clients/[id]/[clientprojectid]',
    //   query: { id: 'ioan', clientprojectid: 'project1' },
    // });
  }

  return (
    <>
      <h2>The Projects of a Given Clien</h2>
      <button onClick={loadProjectHandler}>Load Project 1</button>
    </>
  );
}

export default ClientProjectsPage;
