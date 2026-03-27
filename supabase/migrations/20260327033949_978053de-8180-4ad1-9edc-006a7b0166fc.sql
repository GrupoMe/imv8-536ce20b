
-- Create app_role enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- user_roles policies
CREATE POLICY "Users can view their own roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (auth.uid() = user_id);

-- Create agenda_events table
CREATE TABLE public.agenda_events (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'workshop',
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  participants INTEGER NOT NULL DEFAULT 0,
  max_participants INTEGER NOT NULL DEFAULT 20,
  description TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'inscricoes-abertas',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.agenda_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read agenda events" ON public.agenda_events
  FOR SELECT USING (true);
CREATE POLICY "Admins can insert agenda events" ON public.agenda_events
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update agenda events" ON public.agenda_events
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete agenda events" ON public.agenda_events
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Create gallery_events table
CREATE TABLE public.gallery_events (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'workshop',
  date TEXT NOT NULL,
  location TEXT NOT NULL DEFAULT '',
  images TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.gallery_events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read gallery events" ON public.gallery_events
  FOR SELECT USING (true);
CREATE POLICY "Admins can insert gallery events" ON public.gallery_events
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update gallery events" ON public.gallery_events
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete gallery events" ON public.gallery_events
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));

-- Create cursos_formations table
CREATE TABLE public.cursos_formations (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'curso',
  duration TEXT NOT NULL DEFAULT '',
  participants INTEGER NOT NULL DEFAULT 0,
  rating NUMERIC(2,1) NOT NULL DEFAULT 0,
  price TEXT NOT NULL DEFAULT '',
  description TEXT NOT NULL DEFAULT '',
  modules TEXT[] NOT NULL DEFAULT '{}',
  checkout_link TEXT NOT NULL DEFAULT '#checkout-cursos',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
ALTER TABLE public.cursos_formations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read cursos formations" ON public.cursos_formations
  FOR SELECT USING (true);
CREATE POLICY "Admins can insert cursos formations" ON public.cursos_formations
  FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can update cursos formations" ON public.cursos_formations
  FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
CREATE POLICY "Admins can delete cursos formations" ON public.cursos_formations
  FOR DELETE TO authenticated USING (public.has_role(auth.uid(), 'admin'));
