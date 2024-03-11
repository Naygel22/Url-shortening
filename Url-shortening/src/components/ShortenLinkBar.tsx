export function ShortenLinkBar() {
  return (
    <div className="shortenContainer">
      <div className="shortenBar">
        <input
          type="text"
          className="inputLink"
          placeholder="Shorten a link here..."
        />
        <button className="shortenButton">Shorten It!</button>
      </div>
    </div>
  );
}
