import { Skeleton } from "@/app/components/Skeleton";

export default function ProductPageSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      <div className="lg:col-span-7 space-y-10">
        <Skeleton className="h-[420px] w-full" />
        <div className="grid grid-cols-2 gap-gutter">
          <Skeleton className="h-[280px] w-full" />
          <Skeleton className="h-[280px] w-full" />
        </div>
      </div>
      <div className="lg:col-span-5 space-y-6">
        <Skeleton className="h-5 w-1/3" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-8 w-1/4" />
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-14 w-full" />
      </div>
    </div>
  );
}
