create table if not exists public.flowforge_projects (
  id text primary key,
  title text not null,
  pill text not null,
  summary text not null,
  accent text not null default '#1e64ff',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.flowforge_tasks (
  id text primary key,
  project_id text not null references public.flowforge_projects(id) on delete cascade,
  title text not null,
  status text not null default 'Backlog',
  summary text not null default '',
  sort_order integer not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.flowforge_canvases (
  task_id text primary key references public.flowforge_tasks(id) on delete cascade,
  nodes jsonb not null default '[]'::jsonb,
  links jsonb not null default '[]'::jsonb,
  zoom numeric not null default 1,
  updated_at timestamptz not null default now()
);

create table if not exists public.flowforge_agent_logs (
  id uuid primary key default gen_random_uuid(),
  agent_name text not null,
  project_id text references public.flowforge_projects(id) on delete set null,
  task_id text references public.flowforge_tasks(id) on delete set null,
  title text not null,
  body text not null default '',
  screenshot_url text,
  created_at timestamptz not null default now()
);

alter table public.flowforge_projects enable row level security;
alter table public.flowforge_tasks enable row level security;
alter table public.flowforge_canvases enable row level security;
alter table public.flowforge_agent_logs enable row level security;

create policy flowforge_projects_demo_write
on public.flowforge_projects for all to anon, authenticated
using (true) with check (true);

create policy flowforge_tasks_demo_write
on public.flowforge_tasks for all to anon, authenticated
using (true) with check (true);

create policy flowforge_canvases_demo_write
on public.flowforge_canvases for all to anon, authenticated
using (true) with check (true);

create policy flowforge_agent_logs_demo_write
on public.flowforge_agent_logs for all to anon, authenticated
using (true) with check (true);

create index if not exists idx_flowforge_tasks_project_id
on public.flowforge_tasks(project_id);

create index if not exists idx_flowforge_agent_logs_project_id
on public.flowforge_agent_logs(project_id);

create index if not exists idx_flowforge_agent_logs_task_id
on public.flowforge_agent_logs(task_id);

grant usage on schema public to anon, authenticated;
grant select, insert, update, delete on public.flowforge_projects to anon, authenticated;
grant select, insert, update, delete on public.flowforge_tasks to anon, authenticated;
grant select, insert, update, delete on public.flowforge_canvases to anon, authenticated;
grant select, insert, update, delete on public.flowforge_agent_logs to anon, authenticated;
