const FLOWFORGE_SUPABASE_URL = "https://wvwqeizmxucpdentpkbl.supabase.co";
const FLOWFORGE_SUPABASE_KEY = "sb_publishable_m6qWXQGves4e7WQ3l3WhFw_DbHVcVdh";

const FlowForgeSupabase = {
  enabled: Boolean(FLOWFORGE_SUPABASE_URL && FLOWFORGE_SUPABASE_KEY),
  url: FLOWFORGE_SUPABASE_URL,
  headers: {
    apikey: FLOWFORGE_SUPABASE_KEY,
    Authorization: `Bearer ${FLOWFORGE_SUPABASE_KEY}`,
    "Content-Type": "application/json",
    Prefer: "resolution=merge-duplicates,return=representation"
  },

  async read(path) {
    if (!this.enabled) return null;
    const response = await fetch(`${this.url}/rest/v1/${path}`, {
      headers: this.headers
    });
    if (!response.ok) throw new Error(`Supabase read failed: ${response.status}`);
    return response.json();
  },

  async upsert(table, payload, conflictKey) {
    if (!this.enabled) return null;
    const response = await fetch(`${this.url}/rest/v1/${table}?on_conflict=${conflictKey}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error(`Supabase upsert failed: ${response.status}`);
    return response.json();
  }
};

window.FlowForgeSupabase = FlowForgeSupabase;
