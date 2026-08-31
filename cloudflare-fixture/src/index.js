const MARKER = "cloudflare-artifact-baseline-586";

export default {
  async fetch() {
    return new Response(MARKER, {
      headers: {
        "content-type": "text/plain; charset=utf-8"
      }
    });
  }
};
