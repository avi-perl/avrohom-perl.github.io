import Head from "next/head";
import React from "react";

class SiteHead extends React.Component {
  render() {
    return (
      <Head>
        <title> Avi Perl </title>
        <meta
          name="description"
          content="Developer portfolio for Avi Perl, a Python and PHP developer."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    );
  }
}

export default SiteHead;
