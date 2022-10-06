/** @type {import('./$types').PageLoad} */
export async function load({ data }) {
  return {
    startups: data
  };
}
