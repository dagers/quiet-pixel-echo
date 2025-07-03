export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      activity_streaks: {
        Row: {
          created_at: string
          id: string
          last_activity_date: string
          streak_count: number
          student_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_activity_date?: string
          streak_count?: number
          student_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          last_activity_date?: string
          streak_count?: number
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_streaks_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: true
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      audio_exchanges: {
        Row: {
          audio_url: string
          coins_spent: number | null
          created_at: string
          free_exchange: boolean
          id: string
          lesson_id: string
          match_id: string
          recipient_id: string
          student_id: string
          transcript: string | null
        }
        Insert: {
          audio_url: string
          coins_spent?: number | null
          created_at?: string
          free_exchange?: boolean
          id?: string
          lesson_id: string
          match_id: string
          recipient_id: string
          student_id: string
          transcript?: string | null
        }
        Update: {
          audio_url?: string
          coins_spent?: number | null
          created_at?: string
          free_exchange?: boolean
          id?: string
          lesson_id?: string
          match_id?: string
          recipient_id?: string
          student_id?: string
          transcript?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "audio_exchanges_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audio_exchanges_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "student_matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audio_exchanges_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "audio_exchanges_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          created_at: string
          default_match_country_id: string | null
          id: string
          name: string
          school_id: string | null
          teacher_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          default_match_country_id?: string | null
          id?: string
          name: string
          school_id?: string | null
          teacher_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          default_match_country_id?: string | null
          id?: string
          name?: string
          school_id?: string | null
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "classes_default_match_country_id_fkey"
            columns: ["default_match_country_id"]
            isOneToOne: false
            referencedRelation: "countries"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classes_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      coin_packages: {
        Row: {
          coins_amount: number
          created_at: string
          description: string
          id: string
          is_active: boolean
          price_usd: number
          updated_at: string
        }
        Insert: {
          coins_amount: number
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          price_usd: number
          updated_at?: string
        }
        Update: {
          coins_amount?: number
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          price_usd?: number
          updated_at?: string
        }
        Relationships: []
      }
      coin_purchases: {
        Row: {
          coins_amount: number
          created_at: string
          id: string
          package_id: string
          payment_id: string | null
          payment_provider: string | null
          payment_status: string
          price_paid: number
          student_id: string
          updated_at: string
        }
        Insert: {
          coins_amount: number
          created_at?: string
          id?: string
          package_id: string
          payment_id?: string | null
          payment_provider?: string | null
          payment_status?: string
          price_paid: number
          student_id: string
          updated_at?: string
        }
        Update: {
          coins_amount?: number
          created_at?: string
          id?: string
          package_id?: string
          payment_id?: string | null
          payment_provider?: string | null
          payment_status?: string
          price_paid?: number
          student_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "coin_purchases_package_id_fkey"
            columns: ["package_id"]
            isOneToOne: false
            referencedRelation: "coin_packages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "coin_purchases_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      coin_transactions: {
        Row: {
          amount: number
          created_at: string
          description: string
          id: string
          related_entity_id: string | null
          related_entity_type: string | null
          student_id: string
          transaction_type: string
        }
        Insert: {
          amount: number
          created_at?: string
          description: string
          id?: string
          related_entity_id?: string | null
          related_entity_type?: string | null
          student_id: string
          transaction_type: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string
          id?: string
          related_entity_id?: string | null
          related_entity_type?: string | null
          student_id?: string
          transaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "coin_transactions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      content_analysis_results: {
        Row: {
          analysis_type: string
          communication_style: string | null
          confidence_score: number | null
          created_at: string
          emotional_tone: string | null
          flagged_content: string[] | null
          fluency_score: number | null
          id: string
          language_detected: string | null
          overall_risk_score: number | null
          silence_detected: boolean | null
          silence_duration_seconds: number | null
          speaking_pace: string | null
          submission_id: string | null
          topic_keywords: string[] | null
          transcript: string | null
          updated_at: string
          vocabulary_complexity: number | null
        }
        Insert: {
          analysis_type: string
          communication_style?: string | null
          confidence_score?: number | null
          created_at?: string
          emotional_tone?: string | null
          flagged_content?: string[] | null
          fluency_score?: number | null
          id?: string
          language_detected?: string | null
          overall_risk_score?: number | null
          silence_detected?: boolean | null
          silence_duration_seconds?: number | null
          speaking_pace?: string | null
          submission_id?: string | null
          topic_keywords?: string[] | null
          transcript?: string | null
          updated_at?: string
          vocabulary_complexity?: number | null
        }
        Update: {
          analysis_type?: string
          communication_style?: string | null
          confidence_score?: number | null
          created_at?: string
          emotional_tone?: string | null
          flagged_content?: string[] | null
          fluency_score?: number | null
          id?: string
          language_detected?: string | null
          overall_risk_score?: number | null
          silence_detected?: boolean | null
          silence_duration_seconds?: number | null
          speaking_pace?: string | null
          submission_id?: string | null
          topic_keywords?: string[] | null
          transcript?: string | null
          updated_at?: string
          vocabulary_complexity?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "content_analysis_results_submission_id_fkey"
            columns: ["submission_id"]
            isOneToOne: false
            referencedRelation: "submissions"
            referencedColumns: ["id"]
          },
        ]
      }
      countries: {
        Row: {
          code: string
          created_at: string
          id: string
          name: string
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      h5p_content: {
        Row: {
          content_type: string
          created_at: string
          created_by: string
          description: string | null
          embed_url: string
          h5p_content_id: string
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          content_type: string
          created_at?: string
          created_by: string
          description?: string | null
          embed_url: string
          h5p_content_id: string
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          content_type?: string
          created_at?: string
          created_by?: string
          description?: string | null
          embed_url?: string
          h5p_content_id?: string
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      lesson_assignments: {
        Row: {
          assigned_at: string
          created_at: string
          due_date: string | null
          id: string
          lesson_id: string
          status: string
          student_id: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          assigned_at?: string
          created_at?: string
          due_date?: string | null
          id?: string
          lesson_id: string
          status?: string
          student_id: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          assigned_at?: string
          created_at?: string
          due_date?: string | null
          id?: string
          lesson_id?: string
          status?: string
          student_id?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "lesson_assignments_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
        ]
      }
      lessons: {
        Row: {
          created_at: string
          created_by: string | null
          description: string | null
          h5p_content_id: string | null
          h5p_embed_url: string | null
          id: string
          lesson_number: number
          title: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          h5p_content_id?: string | null
          h5p_embed_url?: string | null
          id?: string
          lesson_number: number
          title: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          created_by?: string | null
          description?: string | null
          h5p_content_id?: string | null
          h5p_embed_url?: string | null
          id?: string
          lesson_number?: number
          title?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      match_feedback: {
        Row: {
          created_at: string
          feedback_notes: string | null
          id: string
          is_active: boolean | null
          last_interaction_at: string | null
          match_id: string | null
          match_quality_score: number | null
          message_count: number | null
          student_id: string | null
          total_interaction_time: number | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          feedback_notes?: string | null
          id?: string
          is_active?: boolean | null
          last_interaction_at?: string | null
          match_id?: string | null
          match_quality_score?: number | null
          message_count?: number | null
          student_id?: string | null
          total_interaction_time?: number | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          feedback_notes?: string | null
          id?: string
          is_active?: boolean | null
          last_interaction_at?: string | null
          match_id?: string | null
          match_quality_score?: number | null
          message_count?: number | null
          student_id?: string | null
          total_interaction_time?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "match_feedback_match_id_fkey"
            columns: ["match_id"]
            isOneToOne: false
            referencedRelation: "student_matches"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "match_feedback_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      password_reset_tokens: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          ip_address: unknown | null
          token: string
          used_at: string | null
          user_agent: string | null
          user_email: string
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          ip_address?: unknown | null
          token: string
          used_at?: string | null
          user_agent?: string | null
          user_email: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          ip_address?: unknown | null
          token?: string
          used_at?: string | null
          user_agent?: string | null
          user_email?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      rate_limits: {
        Row: {
          action_type: string
          attempt_count: number
          created_at: string
          id: string
          identifier: string
          last_attempt: string
          updated_at: string
          window_start: string
        }
        Insert: {
          action_type: string
          attempt_count?: number
          created_at?: string
          id?: string
          identifier: string
          last_attempt?: string
          updated_at?: string
          window_start?: string
        }
        Update: {
          action_type?: string
          attempt_count?: number
          created_at?: string
          id?: string
          identifier?: string
          last_attempt?: string
          updated_at?: string
          window_start?: string
        }
        Relationships: []
      }
      schools: {
        Row: {
          coordinator_email: string | null
          country_code: string | null
          created_at: string
          id: string
          invitation_code: string
          invitation_token: string | null
          invited_at: string | null
          name: string
          status: string
          updated_at: string
        }
        Insert: {
          coordinator_email?: string | null
          country_code?: string | null
          created_at?: string
          id?: string
          invitation_code: string
          invitation_token?: string | null
          invited_at?: string | null
          name: string
          status?: string
          updated_at?: string
        }
        Update: {
          coordinator_email?: string | null
          country_code?: string | null
          created_at?: string
          id?: string
          invitation_code?: string
          invitation_token?: string | null
          invited_at?: string | null
          name?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      security_events: {
        Row: {
          created_at: string
          details: Json | null
          event_type: string
          id: string
          identifier: string
          ip_address: unknown | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          details?: Json | null
          event_type: string
          id?: string
          identifier: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          details?: Json | null
          event_type?: string
          id?: string
          identifier?: string
          ip_address?: unknown | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      student_communication_profiles: {
        Row: {
          average_fluency_score: number | null
          average_vocabulary_complexity: number | null
          conversation_confidence: number | null
          created_at: string
          cultural_curiosity_score: number | null
          dominant_topics: string[] | null
          id: string
          language_learning_level: string | null
          last_analysis_at: string | null
          preferred_communication_style: string | null
          response_time_preference: string | null
          student_id: string | null
          total_submissions: number | null
          updated_at: string
        }
        Insert: {
          average_fluency_score?: number | null
          average_vocabulary_complexity?: number | null
          conversation_confidence?: number | null
          created_at?: string
          cultural_curiosity_score?: number | null
          dominant_topics?: string[] | null
          id?: string
          language_learning_level?: string | null
          last_analysis_at?: string | null
          preferred_communication_style?: string | null
          response_time_preference?: string | null
          student_id?: string | null
          total_submissions?: number | null
          updated_at?: string
        }
        Update: {
          average_fluency_score?: number | null
          average_vocabulary_complexity?: number | null
          conversation_confidence?: number | null
          created_at?: string
          cultural_curiosity_score?: number | null
          dominant_topics?: string[] | null
          id?: string
          language_learning_level?: string | null
          last_analysis_at?: string | null
          preferred_communication_style?: string | null
          response_time_preference?: string | null
          student_id?: string | null
          total_submissions?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_communication_profiles_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: true
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      student_invitations: {
        Row: {
          age_group: string
          class_id: string | null
          created_at: string
          email: string
          expires_at: string
          first_name: string
          id: string
          invitation_token: string
          invited_at: string
          last_name: string
          registered_at: string | null
          school_id: string | null
          status: string
          teacher_id: string
          updated_at: string
        }
        Insert: {
          age_group: string
          class_id?: string | null
          created_at?: string
          email: string
          expires_at?: string
          first_name: string
          id?: string
          invitation_token: string
          invited_at?: string
          last_name: string
          registered_at?: string | null
          school_id?: string | null
          status?: string
          teacher_id: string
          updated_at?: string
        }
        Update: {
          age_group?: string
          class_id?: string | null
          created_at?: string
          email?: string
          expires_at?: string
          first_name?: string
          id?: string
          invitation_token?: string
          invited_at?: string
          last_name?: string
          registered_at?: string | null
          school_id?: string | null
          status?: string
          teacher_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      student_matches: {
        Row: {
          coins_spent: number | null
          connection_reason: string | null
          created_at: string
          id: string
          lesson_id: string | null
          match_type: string
          matched_student_id: string
          status: string
          student_id: string
          unlocked_at: string | null
        }
        Insert: {
          coins_spent?: number | null
          connection_reason?: string | null
          created_at?: string
          id?: string
          lesson_id?: string | null
          match_type: string
          matched_student_id: string
          status?: string
          student_id: string
          unlocked_at?: string | null
        }
        Update: {
          coins_spent?: number | null
          connection_reason?: string | null
          created_at?: string
          id?: string
          lesson_id?: string | null
          match_type?: string
          matched_student_id?: string
          status?: string
          student_id?: string
          unlocked_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "student_matches_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_matches_matched_student_id_fkey"
            columns: ["matched_student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_matches_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          age: number | null
          class_id: string | null
          coins_balance: number
          created_at: string
          english_fluency: number | null
          enneagram_explanation: string | null
          enneagram_identified_at: string | null
          enneagram_type: number | null
          first_name: string
          highlight_expires_at: string | null
          id: string
          interests: string[] | null
          last_name: string
          profile_highlighted: boolean
          speaking_tone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          age?: number | null
          class_id?: string | null
          coins_balance?: number
          created_at?: string
          english_fluency?: number | null
          enneagram_explanation?: string | null
          enneagram_identified_at?: string | null
          enneagram_type?: number | null
          first_name: string
          highlight_expires_at?: string | null
          id?: string
          interests?: string[] | null
          last_name: string
          profile_highlighted?: boolean
          speaking_tone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          age?: number | null
          class_id?: string | null
          coins_balance?: number
          created_at?: string
          english_fluency?: number | null
          enneagram_explanation?: string | null
          enneagram_identified_at?: string | null
          enneagram_type?: number | null
          first_name?: string
          highlight_expires_at?: string | null
          id?: string
          interests?: string[] | null
          last_name?: string
          profile_highlighted?: boolean
          speaking_tone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "students_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      submissions: {
        Row: {
          audio_url: string | null
          created_at: string
          id: string
          lesson_assignment_id: string | null
          lesson_id: string
          status: string
          student_id: string
          transcript: string | null
          updated_at: string
          video_url: string | null
        }
        Insert: {
          audio_url?: string | null
          created_at?: string
          id?: string
          lesson_assignment_id?: string | null
          lesson_id: string
          status?: string
          student_id: string
          transcript?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          audio_url?: string | null
          created_at?: string
          id?: string
          lesson_assignment_id?: string | null
          lesson_id?: string
          status?: string
          student_id?: string
          transcript?: string | null
          updated_at?: string
          video_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "submissions_lesson_assignment_id_fkey"
            columns: ["lesson_assignment_id"]
            isOneToOne: false
            referencedRelation: "lesson_assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_lesson_id_fkey"
            columns: ["lesson_id"]
            isOneToOne: false
            referencedRelation: "lessons"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      teacher_invitations: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string
          expires_at: string
          id: string
          invitation_token: string
          invited_at: string
          invited_by: string
          school_id: string | null
          status: string
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invitation_token: string
          invited_at?: string
          invited_by: string
          school_id?: string | null
          status?: string
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invitation_token?: string
          invited_at?: string
          invited_by?: string
          school_id?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "teacher_invitations_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          school_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          school_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          school_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_roles_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      validation_patterns: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_dangerous: boolean
          pattern_name: string
          pattern_regex: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_dangerous?: boolean
          pattern_name: string
          pattern_regex: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_dangerous?: boolean
          pattern_name?: string
          pattern_regex?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      check_rate_limit: {
        Args: {
          p_identifier: string
          p_action_type: string
          p_limit: number
          p_window_minutes?: number
        }
        Returns: boolean
      }
      cleanup_expired_reset_tokens: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      complete_student_registration: {
        Args: { p_token: string; p_user_id: string }
        Returns: Json
      }
      create_student_invitations: {
        Args: {
          p_students: Json
          p_teacher_id: string
          p_class_id: string
          p_school_id: string
        }
        Returns: Json
      }
      generate_password_reset_token: {
        Args: { p_email: string; p_ip_address?: unknown; p_user_agent?: string }
        Returns: string
      }
      get_coordinator_school_stats: {
        Args: { coordinator_email_param: string }
        Returns: {
          school_id: string
          school_name: string
          teacher_count: number
          student_count: number
          pending_invitations: number
          invitation_code: string
        }[]
      }
      get_current_user_role: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_match_tier: {
        Args: { p_student_id: string }
        Returns: Json
      }
      get_school_stats: {
        Args: { school_id_param: string }
        Returns: {
          teacher_count: number
          student_count: number
        }[]
      }
      get_student_submission_count: {
        Args: { p_student_id: string }
        Returns: number
      }
      is_admin: {
        Args: { user_uuid?: string }
        Returns: boolean
      }
      log_security_event: {
        Args:
          | {
              p_event_type: string
              p_user_id?: string
              p_identifier?: string
              p_details?: Json
              p_ip_address?: unknown
              p_user_agent?: string
            }
          | {
              p_event_type: string
              p_user_id?: string
              p_identifier?: string
              p_details?: Json
              p_ip_address?: unknown
              p_user_agent?: string
            }
        Returns: string
      }
      mark_token_used: {
        Args: { p_token: string }
        Returns: boolean
      }
      upsert_user_role: {
        Args: { p_user_id: string; p_role: string; p_school_id?: string }
        Returns: string
      }
      validate_input_security: {
        Args: { p_input: string; p_field_name?: string }
        Returns: Json
      }
      validate_password_reset_token: {
        Args: { p_token: string }
        Returns: Json
      }
      validate_student_invitation: {
        Args: { p_token: string }
        Returns: Json
      }
      verify_admin_session: {
        Args: { p_session_id: string }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "school_coordinator" | "teacher" | "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "school_coordinator", "teacher", "student"],
    },
  },
} as const
