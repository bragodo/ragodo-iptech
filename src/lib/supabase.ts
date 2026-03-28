import { createClient } from '@supabase/supabase-js';

// The URL and Key MUST be wrapped in "quotes" to be valid strings
const supabaseUrl = "https://jxqkuinyvrlyvaakhbfg.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp4cWt1aW55dnJseXZhYWtoYmZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ1NDI1NDksImV4cCI6MjA4MDExODU0OX0.9622jL07zogfK6wj5FzgAZ13LVpPtLkYPMgMAI6jeAY";

// This checks if the strings are actually there before starting the client
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase configuration. Please check your URL and Anon Key.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);