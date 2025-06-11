import React from 'react';
import { useLocation, Redirect } from '@docusaurus/router';
import DocHome from '../../docs/home.mdx'; 

const sourceRedirects = {
  definer: '/docs/your_target_doc_for_definer', // Change to your real target
  windows_designer: '/docs/Desktop_UIs/Exploring_USoft_Windows_Designer',
  // ... add more as needed
};

export default function HomeWithSourceRedirect() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const source = params.get('source');
  const redirectUrl = source && sourceRedirects[source];

  if (redirectUrl) {
    return <Redirect to={redirectUrl} />;
  }

  return <DocHome />;
}