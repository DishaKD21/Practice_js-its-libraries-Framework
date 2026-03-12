// app/page.jsx
import Video from 'next-video';
import demo from '../videos/demo.mp4';

export default function Page() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      margin: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'black'
    }}>
      <Video
        src={demo}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}/>
    </div>
  );
}