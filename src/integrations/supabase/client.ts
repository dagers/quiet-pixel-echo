// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gjxhmmpcvzvgwivtrabm.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdqeGhtbXBjdnp2Z3dpdnRyYWJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0ODg3NjQsImV4cCI6MjA2NDA2NDc2NH0.AXteNETLZ-mM0abfKZJQS6LCcursgX4VB7HWaRzmWuo";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});