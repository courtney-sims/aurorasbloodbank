export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === "/api/cats") {
      const { results } = await env.DB.prepare(
        "SELECT * FROM Cats where ReadyToDonate=True"
      )
        //.bind("Cats in program")
        .all();
      return new Response(JSON.stringify(results), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(
      "Call /api/cats to see all of the cats in the donor program"
    );
  },
};