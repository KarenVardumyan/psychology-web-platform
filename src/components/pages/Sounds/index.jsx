import './styles.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Brave from 'assets/music/Brave.mp3';
import Stronger from 'assets/music/Stronger.mp3';
import Unwritten from 'assets/music/Unwritten.mp3';
import HallOfFame from 'assets/music/HallOfFame.mp3';
import EyeoftheTiger from 'assets/music/EyeoftheTiger.mp3';

function Sounds() {

  useEffect(() => {
    const audioTags = document.querySelectorAll('audio');
    function pauseOtherAudios(currentAudio) {
      audioTags.forEach(audio => {
        if (audio !== currentAudio) {
          audio.pause();
        }
      });
    }
    audioTags.forEach(audio => {
      audio.addEventListener('play', () => {
        pauseOtherAudios(audio);
      });
    });
  }, []);

  return (
    <div id="musics">
      <h2>Երգեր</h2>
      <div className="music-container">

        <div className="music">
          <audio src={EyeoftheTiger} controls type="audio/mpeg"  />
          <div className="music-content">
            <div className="music-title">Eye of the Tiger</div>
            <div className="music-artist">Survivor</div>
          </div>
        </div>

        <div className="music">
          <audio src={Stronger} controls type="audio/mpeg"  />
          <div className="music-content">
            <div className="music-title">Stronger</div>
            <div className="music-artist">Kanye West</div>
          </div>
        </div>

        <div className="music">
          <audio src={Stronger} controls type="audio/mpeg"  />
          <div className="music-content">
            <div className="music-title"> Roar</div>
            <div className="music-artist">Katy Perry</div>
          </div>
        </div>

        <div className="music">
          <audio src={Unwritten} controls type="audio/mpeg"  />
          <div className="music-content">
            <div className="music-title">Unwritten</div>
            <div className="music-artist">Natasha Bedingfield</div>
          </div>
        </div>

        <div className="music">
          <audio src={Brave} controls type="audio/mpeg" />
          <div className="music-content">
            <div className="music-title">Brave</div>
            <div className="music-artist">Sara Bareilles</div>
          </div>
        </div>

        <div className="music">
          <audio src={HallOfFame} controls type="audio/mpeg" />
          <div className="music-content">
            <div className="music-title">Hall Of Fame</div>
            <div className="music-artist">The Script feat. Will.I.Am</div>
          </div>
        </div>

      </div>
      <button class="butt"><Link to="/motivation">Վերադառնալ</Link></button>
    </div>
  )
}

export default Sounds;
