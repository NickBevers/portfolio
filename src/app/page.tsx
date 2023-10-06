import HeroSection from './_components/hero/page';
import AboutSection from './_components/about/page'
import SelectedWorks from './_components/selectedWorks/page';
import Footer from './_components/footer/page';

export default function Home() {
  return (
    <div>
        <HeroSection />
        <AboutSection />
        <SelectedWorks />

        <Footer />
    </div>
  )
}
