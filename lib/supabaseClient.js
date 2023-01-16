import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://tdccfedlvqzgipagbmsy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRkY2NmZWRsdnF6Z2lwYWdibXN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzM4ODg5MTcsImV4cCI6MTk4OTQ2NDkxN30.mwScPXmqiBycthpQBgubCesq2cO3WZJl9timymZ-cGs')