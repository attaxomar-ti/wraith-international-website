import { useEffect } from 'react';
import { PUBLISHED } from '../data/articles';

export default function RSS() {
  useEffect(() => {
    const items = [...PUBLISHED]
      .sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
      .map(a => `
    <item>
      <title><![CDATA[${a.headline}]]></title>
      <link>https://wraithintl.com/news/${a.slug}</link>
      <guid>https://wraithintl.com/news/${a.slug}</guid>
      <pubDate>${new Date(a.publishDate + 'T12:00:00').toUTCString()}</pubDate>
      <category>${a.category}</category>
      <description><![CDATA[${a.excerpt}]]></description>
    </item>`).join('');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Wraith International — Newsroom</title>
    <link>https://wraithintl.com/news</link>
    <description>News and announcements from Wraith International LLC, a full-spectrum government contractor based in Irvine, California.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="https://wraithintl.com/rss" rel="self" type="application/rss+xml"/>
    ${items}
  </channel>
</rss>`;

    // Serve as XML
    document.open('application/xml');
    document.write(xml);
    document.close();
  }, []);

  return null;
}
