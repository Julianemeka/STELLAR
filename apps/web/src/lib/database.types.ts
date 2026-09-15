export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    PostgrestVersion: '12'
    Tables: {
      cooperatives: {
        Row: { id: string; name: string; admin_address: string; created_at: string }
        Insert: { id?: string; name: string; admin_address: string; created_at?: string }
        Update: { id?: string; name?: string; admin_address?: string; created_at?: string }
        Relationships: []
      }
      meters: {
        Row: {
          id: string
          cooperative_id: string
          serial_number: string
          pubkey_hex: string
          active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          cooperative_id: string
          serial_number: string
          pubkey_hex: string
          active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          cooperative_id?: string
          serial_number?: string
          pubkey_hex?: string
          active?: boolean
          created_at?: string
        }
        Relationships: [
          {
            foreignKeyName: 'meters_cooperative_id_fkey'
            columns: ['cooperative_id']
            isOneToOne: false
            referencedRelation: 'cooperatives'
            referencedColumns: ['id']
          }
        ]
      }
      readings: {
        Row: {
          id: string
          meter_id: string
          kwh: number
          timestamp: string
          reading_hash: string
          signature_hex: string
          anchor_tx_hash: string | null
          mint_tx_hash: string | null
          anchored: boolean
          minted: boolean
        }
        Insert: {
          id?: string
          meter_id: string
          kwh: number
          timestamp: string
          reading_hash: string
          signature_hex: string
          anchor_tx_hash?: string | null
          mint_tx_hash?: string | null
          anchored?: boolean
          minted?: boolean
        }
        Update: {
          id?: string
          meter_id?: string
          kwh?: number
          timestamp?: string
          reading_hash?: string
          signature_hex?: string
          anchor_tx_hash?: string | null
          mint_tx_hash?: string | null
          anchored?: boolean
          minted?: boolean
        }
        Relationships: []
      }
      certificates: {
        Row: {
          id: string
          cooperative_id: string
          reading_id: string
          reading_hash: string
          mint_tx_hash: string
          anchor_tx_hash: string
          kwh: number
          issued_at: string
          retired: boolean
          retired_at: string | null
          retired_by: string | null
        }
        Insert: {
          id?: string
          cooperative_id: string
          reading_id: string
          reading_hash: string
          mint_tx_hash: string
          anchor_tx_hash: string
          kwh: number
          issued_at?: string
          retired?: boolean
          retired_at?: string | null
          retired_by?: string | null
        }
        Update: {
          id?: string
          cooperative_id?: string
          reading_id?: string
          reading_hash?: string
          mint_tx_hash?: string
          anchor_tx_hash?: string
          kwh?: number
          issued_at?: string
          retired?: boolean
          retired_at?: string | null
          retired_by?: string | null
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
