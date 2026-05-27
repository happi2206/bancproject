import { Skeleton } from "@/app/components/Skeleton";

export default function BagSkeleton() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
      <section className="lg:col-span-8 space-y-10">
        {[1, 2].map((item) => (
          <div key={item} className="flex gap-6 md:gap-8 items-start border-b border-outline/10 pb-12">
            <Skeleton className="w-1/3 aspect-[4/5]" />
            <div className="flex-1 space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-4 w-1/3" />
              <Skeleton className="h-10 w-40" />
            </div>
          </div>
        ))}
      </section>
      <aside className="lg:col-span-4">
        <Skeleton className="h-[420px] w-full" />
      </aside>
    </div>
  );
}
