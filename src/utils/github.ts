export interface Repo {
    name: string;
    description: string;
    html_url: string;
}

export async function getRepos(username: string): Promise<Repo[]> {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!res.ok) throw new Error(`Failed to fetch repos`);
    const repos = await res.json();
    return repos;
}