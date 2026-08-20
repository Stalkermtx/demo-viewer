import { useEffect, useState } from "react";
import { CheckCircle2 } from "lucide-react";

type Notification = {
  id: number;
  user: string;
  saved: string;
  time: string;
};

const USERS = ["Lucas M.", "Mariana R.", "Pedro S.", "Ana C.", "Gabriel F.", "Juliana P.", "Enzo B."];
const SAVINGS = ["R$ 142,00", "R$ 89,50", "R$ 215,00", "R$ 67,20", "R$ 310,00", "R$ 155,90"];

export function ProofSocial() {
  const [notification, setNotification] = useState<Notification | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const showRandom = () => {
      const newUser = USERS[Math.floor(Math.random() * USERS.length)];
      const newSaved = SAVINGS[Math.floor(Math.random() * SAVINGS.length)];
      
      setNotification({
        id: Date.now(),
        user: newUser,
        saved: newSaved,
        time: "agora mesmo",
      });
      
      setVisible(true);
      
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    const interval = setInterval(() => {
      if (!visible) showRandom();
    }, 15000);

    // Show first one after 3s
    const firstTimeout = setTimeout(showRandom, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimeout);
    };
  }, [visible]);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-24 left-4 z-50 transition-all duration-500 transform ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/80 p-3 pr-6 backdrop-blur-xl shadow-2xl shadow-pink-500/10">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
          <CheckCircle2 size={20} />
        </div>
        <div className="flex flex-col">
          <p className="text-sm font-medium text-white">
            <span className="font-bold">{notification.user}</span> economizou{" "}
            <span className="text-emerald-400 font-bold">{notification.saved}</span>
          </p>
          <p className="text-[10px] uppercase tracking-wider text-white/40">
            {notification.time} via Vorax
          </p>
        </div>
      </div>
    </div>
  );
}
