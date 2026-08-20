import { memo } from "react";
import { SectionHeading } from "../ui";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Carlos Alberto",
    role: "Fullstack Developer",
    text: "A Vorax Lovable mudou o jogo. Meus custos com créditos caíram drasticamente e a velocidade de resposta é incrível.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    name: "Beatriz Santos",
    role: "Freelancer UI/UX",
    text: "Não acreditei na economia de 70% até ver meu extrato. O suporte via WhatsApp é nota 10, resolvem tudo na hora.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Beatriz",
  },
  {
    name: "Ricardo Oliveira",
    role: "Dono de Agência",
    text: "Escalamos nossa produção de apps Lovable sem explodir o orçamento. O plano Studio é perfeito para times.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ricardo",
  },
];

export const Testimonials = memo(function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 px-5">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Quem usa, recomenda"
          subtitle="Junte-se a mais de 12.000 desenvolvedores que já economizam diariamente."
        />
        
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/5 bg-white/5 p-8 transition-all hover:bg-white/10 hover:border-pink-500/30"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              <p className="text-lg leading-relaxed text-white/80 italic mb-8">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full bg-violet-500/20"
                />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
