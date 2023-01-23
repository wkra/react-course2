import Link from 'next/link';

export default function NewsPage() {

  return (
    <>
    <ul>
      <li>
        <Link href='/news/test-link'>First item</Link>
      </li>
      <li>
        <Link href='/news/another-test-link'>Second item</Link>
      </li>
    </ul>
    </>
  );
}