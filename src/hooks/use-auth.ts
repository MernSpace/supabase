import { useEffect, useState } from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'

export function useAuth() {
    console.log("useAuth hook called")

    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log("useAuth useEffect running")

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            console.log("Initial session:", session)
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)
        })

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            (event, session) => {
                console.log("Auth state changed:", event, session)
                setSession(session)
                setUser(session?.user ?? null)
                setLoading(false)
            }
        )

        return () => subscription.unsubscribe()
    }, [])

    const signIn = async (email: string, password: string) => {
        console.log("signIn called with:", email)

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            console.log("signIn result:", { data, error })
            return { data, error }
        } catch (err) {
            console.error("signIn error:", err)
            throw err
        }
    }

    const signUp = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        })
        return { data, error }
    }

    const signOut = async () => {
        const { error } = await supabase.auth.signOut()
        return { error }
    }

    console.log("useAuth returning:", { user, session, loading })

    return {
        user,
        session,
        loading,
        signIn,
        signUp,
        signOut,
    }
}
