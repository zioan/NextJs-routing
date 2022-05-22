// http://localhost:3000/blog/2021/15/test/abc

import { useRouter } from 'next/router';

function BlogPostsPage() {
  const router = useRouter();

  console.log(router.query); // {slug: Array(4)}
  // slug: (4) ['2021', '15', 'test', 'abc']

  return (
    <>
      <h2>The Blog Posts Page</h2>
    </>
  );
}

export default BlogPostsPage;
