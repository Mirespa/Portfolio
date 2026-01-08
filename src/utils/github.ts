export interface Repo {
    name: string;
    description: string;
    html_url: string;
}
// Fetch repositories from Github API
export async function getRepos(username: string): Promise<Repo[]> {
    try {
        const res = await fetch(`https://api.github.com/users/${username}/repos`);
        // Check for successful response
        if (!res.ok) {
            console.error('Github API returned status:', res.status);
            return[]; // Return empty array so the site doesn't crash
        }
        // Parse JSON response
        const repos = await res.json();
        return Array.isArray(repos) ? repos : [];
    } catch (error) {
        console.error('Error fetching repos from Github:', error);
        return []; // Return empty array on network failure
    }
}