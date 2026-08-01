import { createClient } from '@supabase/supabase-js';

// Utilise les variables d'environnement de Vite (préfixées par VITE_)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Crée et exporte le client Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);