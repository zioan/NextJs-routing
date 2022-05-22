import { useRouter } from 'next/router';

function PortfolioProjectPage() {
  const router = useRouter();

  // http://localhost:3000/portfolio/12abc
  console.log(router.pathname); // /portfolio/[projectid]
  console.log(router.query); // {projectid: '12abc'}

  // send a request to some backend server
  // to fetch the piece of data with an id of router.query.projectid

  return (
    <>
      <h2>The Portfolio Project Page</h2>
    </>
  );
}

export default PortfolioProjectPage;
