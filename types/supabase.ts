export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      clicks: {
        Row: {
          city: string | null
          country: string | null
          created_at: string | null
          id: number
          ip: string | null
          link_id: number
          user_agent: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: number
          ip?: string | null
          link_id: number
          user_agent?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          id?: number
          ip?: string | null
          link_id?: number
          user_agent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "clicks_link_id_fkey"
            columns: ["link_id"]
            referencedRelation: "links"
            referencedColumns: ["id"]
          }
        ]
      }
      links: {
        Row: {
          clicks: number | null
          created_at: string | null
          id: number
          key: string
          url: string | null
          user_id: string | null
        }
        Insert: {
          clicks?: number | null
          created_at?: string | null
          id?: number
          key: string
          url?: string | null
          user_id?: string | null
        }
        Update: {
          clicks?: number | null
          created_at?: string | null
          id?: number
          key?: string
          url?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}