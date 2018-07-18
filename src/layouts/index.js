import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'jquery'
import Header from '../components/header'
import Menu from '../components/menu'
import MenuList from "../components/menu.list";
import Footer from '../components/footer'
import './index.scss'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        {
          name: 'description',
          content: 'Šilutės rajono savivaldybės puslapio atnaujinimas',
        },
        { name: 'keywords', content: 'silute, rajonas, savivaldybe' },
      ]}
      link={
        [{href : "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=cyrillic,cyrillic-ext,greek,greek-ext,latin-ext,vietnamese", rel : "stylesheet"}]
      }
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Menu />
    <div
      id="content"
      style={{
        margin: '0 auto',
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        display:'flex',
      }}
    >
      {/* <aside className="d-none d-lg-block">
        <MenuList />
      </aside> */}
      <main className="container">
        {children()}
      </main>
    </div>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.any,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
