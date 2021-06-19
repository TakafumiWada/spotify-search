const functions = require("firebase-functions");
const SpotifyWebApi = require("spotify-web-api-node");
require("dotenv").config();

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SERCRET;
const spotifyApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
});

exports.searchMusicSpotify = functions.https.onCall(async (data, context) => {
  try {
    const res = await spotifyApi.clientCredentialsGrant();
    const accessToken = res.body["access_token"];
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.searchTracks(data);
    console.info(context);
    return result;
  } catch (error) {
    return error;
  }
});

exports.searchArtistSpotify = functions.https.onCall(async (data, context) => {
  try {
    const res = await spotifyApi.clientCredentialsGrant();
    const accessToken = res.body["access_token"];
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.searchTracks("artist:" + data);
    console.info(context);
    return result;
  } catch (error) {
    return error;
  }
});

exports.getAudioFeatures = functions.https.onCall(async (data, context) => {
  try {
    const res = await spotifyApi.clientCredentialsGrant();
    const accessToken = res.body["access_token"];
    spotifyApi.setAccessToken(accessToken);
    const result = await spotifyApi.getAudioFeaturesForTrack(data);
    console.info(context);
    return result;
  } catch (error) {
    return error;
  }
});
