// app/+html.tsx
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        {/* 전역 CSS를 링크로 연결 */}
        <link rel="stylesheet" href="/global.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
