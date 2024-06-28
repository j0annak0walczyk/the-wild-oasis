import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dcdgaoacpsevugqegeqc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjZGdhb2FjcHNldnVncWVnZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA0NDgwNTEsImV4cCI6MjAyNjAyNDA1MX0.1XYM-PthNeeyx2jTVY1bLJS53swWWCUyqNQneyvd_vQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
