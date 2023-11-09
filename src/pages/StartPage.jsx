
import ComparisonTable from '../components/startpage/comparison-table/ComparisonTable'
import Footer from '../components/startpage/footer/Footer'
import Header from '../components/startpage/header/Header'
import Quote from '../components/startpage/quote/Quote'
import WhyChooseUs from '../components/startpage/why-choose-us/WhyChooseUs'

const StartPage = () => {
  return (
    <div>
      <Header />
      <Quote />
      <WhyChooseUs />
      <ComparisonTable />
      <Footer />
    </div>
  )
}

export default StartPage
