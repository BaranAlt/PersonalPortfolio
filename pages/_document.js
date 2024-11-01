import { Html, Head, Main, NextScript } from 'next/document'
import { ga_measurement_id } from '../lib/google-analytics'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='description' content='Portfolio' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {ga_measurement_id && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${ga_measurement_id}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${ga_measurement_id}', {
  page_path: window.location.pathname,
});
`,
              }}
            />
          </>
        )}

        {/* Chatra Chatbot Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(d, w, c) {
                w.ChatraID = '796Sfi9WgbbQ3dfQu';
                var s = d.createElement('script');
                w[c] = w[c] || function() {
                    (w[c].q = w[c].q || []).push(arguments);
                };
                s.async = true;
                s.src = 'https://call.chatra.io/chatra.js';
                if (d.head) d.head.appendChild(s);
              })(document, window, 'Chatra');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
