import { useRouter } from 'next/router';

export default function DetailPage() {
  const router = useRouter();
  const newsId = router.query.newsId;

  // send request

  return <h1>Detail Page - {newsId}</h1>;
}