import Hero from '@/components/Hero'
import APropos from '@/components/APropos'
import Soins from '@/components/Soins'
import PhotoInterlude from '@/components/PhotoInterlude'
import Temoignages from '@/components/Temoignages'
import Tarifs from '@/components/Tarifs'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <APropos />
      <Soins />
      <PhotoInterlude />
      <Temoignages />
      <Tarifs />
      <Footer />
    </main>
  )
}
