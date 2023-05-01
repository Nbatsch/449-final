import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://lbbriaijfeimtqzsuzww.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxiYnJpYWlqZmVpbXRxenN1end3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4NTAwNDYsImV4cCI6MTk5NDQyNjA0Nn0.CdqCxEb-PONqD64J6HHWgH_DOAaK0Eo-xukk4xCc0BE'

export const supabase = createClient(supabaseUrl, supabaseKey)









  