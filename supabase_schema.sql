-- 1. Create categories table
CREATE TABLE public.categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create posts table
CREATE TABLE public.posts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT,
    thumbnail TEXT,
    category_id UUID REFERENCES public.categories(id) ON DELETE SET NULL,
    author_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    status TEXT DEFAULT 'Draft' CHECK (status IN ('Draft', 'Published')),
    seo_title TEXT,
    seo_description TEXT,
    views INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Create users table (optional, mirroring auth.users or holding custom profile info)
-- Since Supabase auth.users already exists, we will create a profiles table tied to it
CREATE TABLE public.users (
    id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    role TEXT DEFAULT 'Editor' CHECK (role IN ('Admin', 'Editor')),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
-- Categories RLS
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Categories are viewable by everyone" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Categories insertable by authenticated admins" ON public.categories FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Categories updatable by authenticated admins" ON public.categories FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Categories deletable by authenticated admins" ON public.categories FOR DELETE USING (auth.role() = 'authenticated');

-- Posts RLS
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published posts are viewable by everyone" ON public.posts FOR SELECT USING (status = 'Published');
CREATE POLICY "All posts viewable by authenticated users" ON public.posts FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Posts insertable by authenticated users" ON public.posts FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Posts updatable by authenticated users" ON public.posts FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Posts deletable by authenticated users" ON public.posts FOR DELETE USING (auth.role() = 'authenticated');

-- Users RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users viewable by authenticated users" ON public.users FOR SELECT USING (auth.role() = 'authenticated');
CREATE POLICY "Users insertable by authenticated users" ON public.users FOR INSERT WITH CHECK (auth.role() = 'authenticated');
CREATE POLICY "Users updatable by authenticated users" ON public.users FOR UPDATE USING (auth.role() = 'authenticated');
CREATE POLICY "Users deletable by authenticated users" ON public.users FOR DELETE USING (auth.role() = 'authenticated');

-- Function to handle new user signup
CREATE OR REPLACE FUNCTION public.handle_new_user() 
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.users (id, email, role)
    VALUES (new.id, new.email, 'Editor');
    RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to call handle_new_user when a new user is created in auth.users
CREATE TRIGGER on_auth_user_created
    AFTER INSERT ON auth.users
    FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Create Supabase Storage Bucket for images
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Storage RLS
CREATE POLICY "Images are publicly accessible" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Images uploadable by authenticated users" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');
CREATE POLICY "Images updatable by authenticated users" ON storage.objects FOR UPDATE USING (bucket_id = 'images' AND auth.role() = 'authenticated');
CREATE POLICY "Images deletable by authenticated users" ON storage.objects FOR DELETE USING (bucket_id = 'images' AND auth.role() = 'authenticated');



create table public.consultations (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  phone text not null,
  email text,
  status text default 'new', -- Trạng thái: new (mới), contacted (đã liên hệ)
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.consultations
add column course text,
add column message text;


alter table public.consultations enable row level security;


create policy "Cho phép khách gửi form tư vấn" 
on public.consultations for insert 
to anon 
with check (true);


create policy "Chỉ admin được xem" 
on public.consultations for select 
to authenticated 
using (true);


-- Tạo bảng
create table public.team_members (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  position text not null,
  image text not null, -- Chứa đường dẫn/link ảnh
  sort_order integer default 0, -- Để sắp xếp ai hiện trước hiện sau
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Bật RLS
alter table public.team_members enable row level security;

-- Cho phép tất cả mọi người đọc dữ liệu (SELECT)
create policy "Cho phép mọi người xem danh sách giáo viên" 
on public.team_members for select 
to public 
using (true);



CREATE TABLE public.branches (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  address TEXT NOT NULL,
  image_url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);

-- Bật RLS
ALTER TABLE public.branches ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can view branches" ON public.branches FOR SELECT USING (true);


CREATE TABLE IF NOT EXISTS public.contact_info (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL, -- 'phone', 'zalo', 'email', 'map'
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  icon_name TEXT, -- Để lưu tên icon (VD: 'Phone', 'MapPin')
  is_active BOOLEAN DEFAULT true
);


INSERT INTO public.contact_info (type, label, value) VALUES 
('phone', 'Call 083 999 0997', '0839990997'),
('zalo', 'Zalo Chat', 'https://zalo.me/0839990997'),
('email', 'info@gnp.edu.vn', 'info@gnp.edu.vn');