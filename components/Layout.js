import Nav from './Nav'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ children }) {
  return (
    <div className=''>
      <Nav />
      <main>
        <Header />
        {children}    
      </main>
      <Footer />
    </div>
  )
}
