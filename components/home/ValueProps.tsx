import { Card } from "@/components/ui/Card";
import { valueProps } from "@/lib/site";

export function ValueProps() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">我们在做什么</h2>
        <p className="mt-4 text-muted-foreground leading-7">
          坚持实践驱动，而不是概念驱动。持续分享真实项目、商业思考与可复用的方法。
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {valueProps.map((item) => (
          <Card key={item.title} title={item.title} description={item.description} />
        ))}
      </div>
    </section>
  );
}
