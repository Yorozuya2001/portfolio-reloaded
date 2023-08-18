import projects from "../../../../public/projects.json";

interface Projects {
  name: string;
  repo: string;
  url: string;
}

export async function GET(req: any) {
  try {
    const responseBody = JSON.stringify(projects);

    return new Response(responseBody, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response("Error al obtener projects.json");
  }
}
