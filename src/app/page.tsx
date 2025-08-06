import Hero from '@/components/Hero'
import Countdown from '@/components/Countdown'
import CoupleProfile from '@/components/CoupleProfile'
import LoveStory from '@/components/LoveStory'
import EventDetails from '@/components/EventDetails'
import RSVP from '@/components/RSVP'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import DigitalGift from '@/components/DigitalGift'
import Wishes from '@/components/Wishes'
import MusicPlayer from '@/components/MusicPlayer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <MusicPlayer />
      <Hero />
      <Countdown />
      <CoupleProfile />
      <LoveStory />
      <EventDetails />
      <RSVP />
      <Gallery />
      <Location />
      <DigitalGift />
      <Wishes />
    </main>
  )
}
