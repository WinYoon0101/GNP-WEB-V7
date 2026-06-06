"use client";

import { useEffect } from "react";
import { createBrowserClient } from '@supabase/ssr';

export function ViewUpdater({ postId }: { postId: string }) {
  useEffect(() => {
    const incrementView = async () => {
      const supabase = createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // Gọi RPC và bắt lỗi
      const { error } = await supabase.rpc('increment_view', { post_id: postId });
      
      if (error) {
        console.error("Lỗi tăng view:", error.message);
      } else {
        console.log("Tăng view thành công!");
      }
    };

    incrementView();
  }, [postId]);

  return null;
}