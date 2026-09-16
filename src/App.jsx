
import { useEffect, useRef, useState } from 'react'
import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import CountdownSlide from './components/CountdownSlide'
import EventSlide from './components/EventSlide'
import FinalSlide from './components/FinalSlide'
import ScrollProgress from './components/ScrollProgress'

function App() {
  const [inviteOpen, setInviteOpen] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const startMusic = () => {
      const audio = audioRef.current

      if (!audio) return

      audio.currentTime = 0

      audio
        .play()
        .then(() => {
          setMusicPlaying(true)
        })
        .catch((error) => {
          console.log('Music playback blocked:', error)
          setMusicPlaying(false)
        })
    }

    window.addEventListener('wedding-invite-open', startMusic)

    return () => {
      window.removeEventListener(
        'wedding-invite-open',
        startMusic
      )
    }
  }, [])

  const toggleMusic = () => {
    const audio = audioRef.current

    if (!audio) return

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setMusicPlaying(true)
        })
        .catch(() => {
          setMusicPlaying(false)
        })
    } else {
      audio.pause()
      setMusicPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
      />

      {!inviteOpen && (
        <EnvelopeIntro
          onComplete={() => setInviteOpen(true)}
        />
      )}

      {inviteOpen && (
        <main>
          <ScrollProgress />

          <button
            onClick={toggleMusic}
            aria-label={
              musicPlaying
                ? 'Mute music'
                : 'Play music'
            }
            style={{
              position: 'fixed',
              top: '18px',
              right: '18px',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              border:
                '1px solid rgba(169, 120, 32, 0.65)',
              background:
                'rgba(255, 250, 242, 0.94)',
              color: '#a97820',
              fontSize: '17px',
              cursor: 'pointer',
              zIndex: 10000,
              boxShadow:
                '0 5px 18px rgba(74, 45, 19, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(5px)',
            }}
          >
            {musicPlaying ? '♫' : '🔇'}
          </button>

          <HeroSlide />
          <CountdownSlide />

          <EventSlide
            label="THE FIRST HUES OF LOVE"
            heading="Mehendi"
            headingColor="#1e5c2a"
            accentColor="#1e5c2a"
            floralImage="/mehendi-floral.jpg"
            description="Begin with henna, music and memories."
            date="20 November 2026"
            time="6:00 PM"
            venue="Manik Chowk"
            address="Manik Chowk"
            dressCode="Green"
            mapsUrl="https://www.google.com/maps/search/?api=1&query=Manik+Chowk"
          />

          <EventSlide
            label="A DAY OF GOLDEN JOY"
            heading="Haldi"
            headingColor="#7a4e00"
            accentColor="#d4a017"
            description="A celebration filled with colour, laughter and love."
            date="21 November 2026"
            time="7:00 PM"
            venue="Pushpak Wedding Hall"
            address="35/2121, Pushpak Road, near Akashwani, Naikwadi Nagar, Anand Nagar, Samta Colony, Dharashiv, Maharashtra 413501"
            dressCode="Yellow"
            mapsUrl="https://maps.app.goo.gl/TcEMXLXoYsj1T7HDA"
          />

          <EventSlide
            label="AN EVENING TO REMEMBER"
            heading="Haldi Dinner"
            headingColor="#6b1e48"
            accentColor="#d4a017"
            floralImage="/haldi-dinner-floral.jpg"
            description="An evening of food, laughter and cherished moments."
            date="21 November 2026"
            time="8:00 PM"
            venue="Pushpak Wedding Hall"
            address="35/2121, Pushpak Road, near Akashwani, Naikwadi Nagar, Anand Nagar, Samta Colony, Dharashiv, Maharashtra 413501"
            mapsUrl="https://maps.app.goo.gl/TcEMXLXoYsj1T7HDA"
          />

          <EventSlide
            label="THE BEGINNING OF FOREVER"
            heading="Wedding"
            headingColor="#5a3200"
            accentColor="#c9a6a0"
            floralImage="/wedding-floral.jpg"
            showCross={true}
            description="Join us as we begin our journey together."
            date="22 November 2026"
            time="4:00 PM"
            venue="John Malelu Memorial Church"
            address="John Malelu Memorial Church"
            dressCode="Pastels"
            mapsUrl="https://maps.app.goo.gl/PXPaH3DCbXLfCy8A6"
          />

          <EventSlide
            label="AN EVENING OF CELEBRATION"
            heading="Reception"
            headingColor="#6b1e48"
            accentColor="#c9942a"
            description="Join us for an evening of celebration, joy and togetherness."
            date="22 November 2026"
            time="7:00 PM onwards"
            venue="Pushpak Wedding Hall"
            address="35/2121, Pushpak Road, near Akashwani, Naikwadi Nagar, Anand Nagar, Samta Colony, Dharashiv, Maharashtra 413501"
            mapsUrl="https://maps.app.goo.gl/TcEMXLXoYsj1T7HDA"
          />

          <FinalSlide />
        </main>
      )}
    </>
  )
}

export default App