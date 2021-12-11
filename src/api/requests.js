import axios from 'axios';

export default async function getLink(linkURL, link) {
  try {
    const linkFormatter = `${linkURL}?url=${link}`;
    const res = await axios.get(linkFormatter, {
      headers: {
        Accept: 'application/json',
      },
    });
    return res;
  } catch (e) {
    console.log(`${e} During fetching the Links`);
  }
}
