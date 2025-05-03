export default function Home() {
    return (
      <div style={{ padding: 30 }}>
        <h1>Welcome to CVM Modding</h1>
        <p>Here are some modded APKs:</p>
        <ul>
          <li><a href="/myapp.apk" download>Download MyApp Mod</a></li>
          <li><a href="/another-mod.apk" download>Download Another Mod</a></li>
        </ul>
      </div>
    );
  }