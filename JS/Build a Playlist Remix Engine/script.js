const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) return [];

  let result = [];

  playlists.forEach((playlist, playlistIndex) => {
    playlist.forEach((track, trackIndex) => {
      result.push({
        ...track,
        source: [playlistIndex, trackIndex],
      });
    });
  });

  return result;
}

function scoreTracks(tracks) {
  return tracks.map((track) => ({
    ...track,
    score: track.votes * 10 - Math.abs(track.bpm - 120),
  }));
}

function dedupeTracks(tracks) {
  let seen = new Set();

  return tracks.filter((track) => {
    if (seen.has(track.trackId)) {
      return false;
    }

    seen.add(track.trackId);
    return true;
  });
}

function enforceArtistQuota(tracks, maxPerArtist) {
  let count = {};

  return tracks.filter((track) => {
    count[track.artist] = (count[track.artist] || 0) + 1;
    return count[track.artist] <= maxPerArtist;
  });
}

function buildSchedule(tracks) {
  return tracks.map((track, index) => ({
    slot: index + 1,
    trackId: track.trackId,
  }));
}

function remixPlaylist(playlists, maxPerArtist) {
  const flat = flattenPlaylists(playlists);
  const scored = scoreTracks(flat);
  const unique = dedupeTracks(scored);
  const quota = enforceArtistQuota(unique, maxPerArtist);

  return buildSchedule(quota);
}
