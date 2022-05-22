// http://localhost:3000/clients/ioan/48b
import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query); //{id: 'ioan', clientprojectid: '48b'}

  return (
    <>
      <h2>The project page for a Specific Project for a Selected Client</h2>
    </>
  );
}

export default SelectedClientProjectPage;
