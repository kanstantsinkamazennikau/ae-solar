"use client";

import Loader from "@/app/[locale]/components/common/Loader";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProductNotFoundRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.push(`/products`);
  }, [router]);

  return <Loader />;
}
