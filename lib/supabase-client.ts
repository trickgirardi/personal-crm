"use client";

import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for client-side usage
// This is safe to expose on the client as we're using the anon key
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    throw new Error(
      "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables"
    );
  }

  return createClient(supabaseUrl, supabaseKey);
};

// Helper function to create a new user
export const signUpUser = async (
  email: string,
  password: string,
  name?: string
) => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  return { data, error };
};

// Helper function to sign in a user
export const signInUser = async (email: string, password: string) => {
  const supabase = createSupabaseClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
};

// Helper function to sign out a user
export const signOutUser = async () => {
  const supabase = createSupabaseClient();

  const { error } = await supabase.auth.signOut();

  return { error };
};
